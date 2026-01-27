import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClipboardList,
    faBoxes,
    faTruckLoading,
    faChartLine,
    faCheckCircle,
    faWarehouse,
} from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Testimonials } from '../components/Testimonials';
import { Hero } from '../components/Hero';
import BestOfferSection from '../components/BestOfferSection';

const features = [
    {
        icon: faClipboardList,
        title: "Efficient Inventory Management",
        description: "Track stock levels in real-time and optimize inventory flow effortlessly."
    },
    {
        icon: faBoxes,
        title: "Comprehensive Stock Control",
        description: "Manage product availability, categories, and supplier details seamlessly."
    },
    {
        icon: faTruckLoading,
        title: "Seamless Order Processing",
        description: "Process customer orders quickly and keep track of shipments efficiently."
    },
    {
        icon: faChartLine,
        title: "Data-Driven Reports",
        description: "Gain insights into sales trends and stock performance with detailed analytics."
    },
    {
        icon: faCheckCircle,
        title: "Automated Low Stock Alerts",
        description: "Never run out of essential stock with real-time alerts and restocking reminders."
    },
    {
        icon: faWarehouse,
        title: "Optimized Storage & Logistics",
        description: "Maximize warehouse efficiency with a structured storage management system."
    }
];

const Home = () => {
    return (
        <main className="bg-gray-50 font-[sans-serif]">
            <Hero />
            <BestOfferSection />

            {/* Section for Features */}
            <section className="py-16 min-h-screen flex items-center bg-white">
                <div className="container mx-auto px-5">
                    <div className="text-center max-w-4xl mx-auto mb-10">
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                            Why Choose <span className="text-green-600">Our Inventory System?</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Because we offer a powerful, efficient, and automated inventory management solution 
                            that helps businesses track stock, process orders, and make data-driven decisions.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105 relative group"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-green-600 group-hover:h-full transition-all duration-300"></div>
                                <div className="relative">
                                    <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-100 rounded-full">
                                        <FontAwesomeIcon icon={feature.icon} className="text-green-600 text-3xl" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mt-6">{feature.title}</h3>
                                    <p className="text-gray-600 mt-4">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials />
        </main>
    );
};

export default Home;
