import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    return (
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-10 px-4">
            {/* Introductory Text */}
            <div className="text-center max-w-3xl mb-10">
    <h2 className="text-4xl font-extrabold text-gray-800">
        Get in Touch with Us!
    </h2>
    <p className="mt-4 text-lg text-gray-600">
        Whether you have inquiries about managing your inventory, need assistance with order processing, or want to optimize your sales tracking, our team at 
        <strong className="text-green-600"> Inventory Management System </strong> is here to support you. 
        Reach out today, and let’s streamline your business operations together!
    </p>
</div>


            {/* Contact Section */}
            <div className="grid md:grid-cols-2 gap-16 items-center relative overflow-hidden p-8 shadow-lg rounded-3xl max-w-6xl bg-white font-[sans-serif]">
                {/* Contact Form */}
                <div>
                    <p className="text-green-600 relative before:absolute before:w-20 before:h-1 before:bg-green-600 before:top-[50%] before:left-0 pl-24 text-2xl font-semibold before:translate-y-[-50%] max-sm:before:w-16 max-sm:pl-20">
                        Get In Touch
                    </p>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Have questions about our eco-friendly products or want to partner with us? Our team is ready to help!
                    </p>

                    <form action="https://formspree.io/f/xovqzgbv" method="POST" className="mt-8">
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="full_name"
                                placeholder="Full Name"
                                className="px-3 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-green-600 outline-none"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="px-3 py-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-green-600 outline-none"
                            />
                            <textarea
                                name="message"
                                placeholder="Write Message"
                                className="px-3 pt-3 bg-white w-full text-gray-800 text-sm border-b border-gray-300 focus:border-green-600 outline-none"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 bg-green-600 hover:bg-green-500 text-white transition-shadow shadow-md hover:shadow-lg"
                        >
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            Send Message
                        </button>
                    </form>

                    <ul className="mt-6 flex flex-wrap justify-center gap-6">
                        <li className="flex items-center text-green-600">
                            <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
                            <a href="mailto:contact@greenbag.com" className="text-sm ml-4">
                                <strong>ayoubmorchid123@pneumatique.com</strong>
                            </a>
                        </li>
                        <li className="flex items-center text-green-600">
                            <FontAwesomeIcon icon={faPhone} className="text-lg" />
                            <a href="tel:+212636960514" className="text-sm ml-4">
                                <strong>+212 6 369 605 14</strong>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Map */}
                <div className="relative h-full max-md:min-h-[350px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.1742367444153!2d-10.072372422380772!3d28.98220749022928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa141e5f82cc1d23%3A0x45f8f3a0c5473138!2sSt%C3%A9%20Ifni%20Pneumatique!5e0!3m2!1sen!2sma!4v1741183693656!5m2!1sen!2smaلا  "
                        className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg shadow-md"
                        frameBorder="0"
                        allowFullScreen
                        title="Agadir Location"
                    ></iframe>
                </div>
                
            </div>
        </section>
    );
};

export default ContactUs;






