import { Link, Navigate } from 'react-router-dom';
import { getCurrentUser, getUsers } from '../utils/auth';

const formatDate = (dateValue) => {
  if (!dateValue) {
    return 'Recently';
  }

  return new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateValue));
};

const Profile = () => {
  const currentUser = getCurrentUser();

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  const savedUser = getUsers().find((user) => user.id === currentUser.id) || currentUser;
  const username = savedUser.username || 'Customer';
  const email = savedUser.email || 'No email saved';

  return (
    <section className="bg-gradient-to-b from-green-50 via-white to-white py-12 sm:py-16">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-green-700">My account</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">Profile</h1>
          <p className="mt-3 max-w-2xl text-gray-600">
            Review the account details used for your Pneumatique shopping experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1fr_1.4fr]">
          <div className="rounded-lg border border-green-100 bg-white p-6 shadow-sm">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-3xl font-bold uppercase text-green-700">
              {username.charAt(0)}
            </div>
            <h2 className="mt-5 text-2xl font-bold text-gray-900">{username}</h2>
            <p className="mt-1 break-all text-sm text-gray-600">{email}</p>
          </div>

          <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">Account details</h2>

            <dl className="mt-5 space-y-4">
              <div className="rounded-md bg-gray-50 p-4">
                <dt className="text-sm font-medium text-gray-500">Username</dt>
                <dd className="mt-1 break-all font-semibold text-gray-900">{username}</dd>
              </div>
              <div className="rounded-md bg-gray-50 p-4">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 break-all font-semibold text-gray-900">{email}</dd>
              </div>
              <div className="rounded-md bg-gray-50 p-4">
                <dt className="text-sm font-medium text-gray-500">Member since</dt>
                <dd className="mt-1 font-semibold text-gray-900">{formatDate(savedUser.createdAt)}</dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center rounded-md bg-green-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-green-700"
              >
                Continue shopping
              </Link>
              <Link
                to="/cart"
                className="inline-flex items-center justify-center rounded-md border border-green-200 px-5 py-3 font-semibold text-green-700 transition-colors hover:bg-green-50"
              >
                View cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
