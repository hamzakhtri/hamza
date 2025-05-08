import React from 'react';
import { motion } from 'framer-motion';
import { FaRegUser, FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiPhone, HiMail } from 'react-icons/hi';

// Contact info data
const contactInfo = [
    {
        icon: <FaPhoneAlt className="text-primary-color w-5 h-5" />,
        title: 'Phone',
        value: '+1 234 567 890',
    },
    {
        icon: <FaEnvelope className="text-primary-color w-5 h-5" />,
        title: 'Email',
        value: 'example@email.com',
    },
    {
        icon: <FaLinkedinIn className="text-primary-color w-5 h-5" />,
        title: 'LinkedIn',
        value: 'linkedin.com/in/yourprofile',
    },
    {
        icon: <FaGithub className="text-primary-color w-5 h-5" />,
        title: 'GitHub',
        value: 'github.com/yourusername',
    },
];

// Animation variants
const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2, // staggered appearance
            duration: 0.5,
            ease: 'easeOut',
        },
    }),
};

const formVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: contactInfo.length * 0.2 + 0.3,
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const Contact = () => {
    return (
        <section id="contact" className="bg-secondary-color dark:bg-gray-800 px-5 sm:px-10 lg:px-20 pb-20 text-white scroll-mt-16">
            <h2 className="heading-2 text-center mb-10 text-primary-color">&lt;Contact/&gt;</h2>

            <div className="grid grid-cols-12 justify-center gap-8 container w-[100%] md:w-[70%] mx-auto">
                {/* Contact Info Cards */}
                <div className="col-span-12 lg:col-span-5 space-y-6">
                    {contactInfo.map((item, idx) => (
                        <motion.div
                            key={idx}
                            custom={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariant}
                            className="flex items-center p-4 rounded-xl border border-primary-color bg-white dark:bg-gray-700 shadow-md"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 mr-4">
                                {item.icon}
                            </div>
                            <div>
                                <h4 className="text-gray-900 dark:text-white font-semibold text-lg">{item.title}</h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.value}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Form */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={formVariant}
                    className="col-span-12 lg:col-span-7 mx-auto bg-white dark:bg-gray-700 rounded-xl p-8 text-gray-900 dark:text-gray-100 w-[100%]"
                >
                    <form className="space-y-6">
                        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
                            <div className="flex-1 relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <FaRegUser className="h-5 w-5 text-gray-400 dark:text-primary-color" />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full pl-10 pr-4 py-3 placeholder-gray-500 dark:placeholder-gray-400 bg-gray-100 dark:bg-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-color"
                                />
                            </div>
                            <div className="flex-1 relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <HiMail className="h-5 w-5 text-gray-400 dark:text-primary-color" />
                                </span>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full pl-10 pr-4 py-3 placeholder-gray-500 dark:placeholder-gray-400 bg-gray-100 dark:bg-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-color"
                                />
                            </div>
                            <div className="flex-1 relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <HiPhone className="h-5 w-5 text-gray-400 dark:text-primary-color" />
                                </span>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full pl-10 pr-4 py-3 placeholder-gray-500 dark:placeholder-gray-400 bg-gray-100 dark:bg-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-color"
                                />
                            </div>
                        </div>

                        <div>
                            <textarea
                                placeholder="Message Here..."
                                rows={6}
                                className="w-full p-4 placeholder-gray-500 dark:placeholder-gray-400 bg-gray-100 dark:bg-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-color"
                            ></textarea>
                        </div>

                        <div>
                            <button type="submit" className="w-full bg-gray-900 dark:bg-primary-color hover:opacity-90 text-white py-4 rounded-full transition">
                                Send Message
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
