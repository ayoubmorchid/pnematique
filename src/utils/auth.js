const USERS_KEY = "pneumatique_users";
const SESSION_KEY = "pneumatique_session";

const readJson = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

const writeJson = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getUsers = () => readJson(USERS_KEY, []);

export const getCurrentUser = () => readJson(SESSION_KEY, null);

export const isAuthenticated = () => Boolean(getCurrentUser());

export const registerUser = ({ username, email, password }) => {
  const normalizedUsername = username.trim().toLowerCase();
  const normalizedEmail = email.trim().toLowerCase();
  const users = getUsers();
  const userExists = users.some((user) => user.username === normalizedUsername);
  const emailExists = users.some((user) => user.email === normalizedEmail);

  if (userExists) {
    return { ok: false, message: "This username is already registered." };
  }

  if (emailExists) {
    return { ok: false, message: "This email is already registered." };
  }

  const user = {
    id: crypto.randomUUID(),
    username: normalizedUsername,
    email: normalizedEmail,
    password,
    createdAt: new Date().toISOString(),
  };

  writeJson(USERS_KEY, [...users, user]);
  writeJson(SESSION_KEY, { id: user.id, username: user.username, email: user.email });
  localStorage.setItem("token", user.id);
  window.dispatchEvent(new Event("auth-change"));

  return { ok: true, user };
};

export const loginUser = ({ username, password }) => {
  const normalizedUsername = username.trim().toLowerCase();
  const user = getUsers().find(
    (storedUser) =>
      storedUser.username === normalizedUsername && storedUser.password === password
  );

  if (!user) {
    return { ok: false, message: "Invalid username or password." };
  }

  writeJson(SESSION_KEY, { id: user.id, username: user.username });
  localStorage.setItem("token", user.id);
  window.dispatchEvent(new Event("auth-change"));

  return { ok: true, user };
};

export const logoutUser = () => {
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem("token");
  window.dispatchEvent(new Event("auth-change"));
};
