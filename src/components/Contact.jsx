import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaRegUser, FaPhoneAlt, FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiPhone, HiMail } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

// 1. Contact info data (unchanged)
const contactInfo = [
    { icon: <FaPhoneAlt className="text-primary-color w-5 h-5" />, title: 'Phone', value: '+92 317 2543144', href: 'tel:+923172543144' },
    { icon: <FaEnvelope className="text-primary-color w-5 h-5" />, title: 'Email', value: 'hamzakhatri12345@gmail.com', href: 'mailto:hamzakhatri12345@gmail.com' },
    { icon: <FaLinkedinIn className="text-primary-color w-5 h-5" />, title: 'LinkedIn', value: 'Visit LinkedIn Profile', href: 'https://www.linkedin.com/in/hamza-ali-soomro-44148323b/' },
    { icon: <FaGithub className="text-primary-color w-5 h-5" />, title: 'GitHub', value: 'Visit GitHub Profile', href: 'https://github.com/hamzakhtri' },
];

// 2. Animation variants (unchanged)
const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' } }),
};
const formVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: contactInfo.length * 0.2 + 0.3, duration: 0.6, ease: 'easeOut' } },
};

const Contact = () => {
    const formRef = useRef();                     // 3. Form ref
    const [status, setStatus] = useState('');     // 4. Status message

    // 5. Submit handler using EmailJS
    const handleSubmit = e => {
        e.preventDefault();
        setStatus('Sending…');

        emailjs.sendForm(
            'service_qonyg0q',  // from EmailJS dashboard
            'template_hwtsfqd', // from EmailJS dashboard
            formRef.current,
            'ZzXoXXYgFCrgFxMaf' // from EmailJS dashboard
        )
            .then(
                () => {
                    setStatus('Message sent successfully!');  // success feedback
                    formRef.current.reset();                // clear form fields
                    // remove status after 3 seconds
                    setTimeout(() => setStatus(''), 3000);
                },
                (error) => {
                    console.error('EmailJS Error:', error.text);
                    setStatus('Failed to send message.');    // error feedback
                    // remove status after 3 seconds
                    setTimeout(() => setStatus(''), 3000);
                }
            );
    };

    return (
        <section id="contact" className="bg-secondary-color dark:bg-gray-800 px-5 sm:px-10 lg:px-20 pb-20 text-white scroll-mt-16">
            <h2 className="heading-2 text-center mb-10 text-primary-color">&lt;Contact/&gt;</h2>
            <div className="grid grid-cols-12 justify-center gap-8 container w-full md:w-4/5 mx-auto">

                {/* Contact Info Cards */}
                <div className="col-span-12 lg:col-span-5 space-y-6">
                    {contactInfo.map((item, idx) => (
                        <motion.a
                            key={idx}
                            custom={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariant}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-4 rounded-xl border border-primary-color bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                        >
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 mr-4">
                                {item.icon}
                            </div>
                            <div className="flex-1">
                                <h4 className="text-gray-900 dark:text-white font-semibold text-lg">{item.title}</h4>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.value}</p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Contact Form */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={formVariant}
                    className="col-span-12 lg:col-span-7 bg-white dark:bg-gray-700 rounded-xl p-8 text-gray-900 dark:text-gray-100"
                >
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
                            {/* Name Input */}
                            <div className="flex-1 relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <FaRegUser className="h-5 w-5 text-gray-400 dark:text-primary-color" />
                                </span>
                                <input
                                    name="user_name"
                                    type="text"
                                    placeholder="Name"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-600 rounded-full placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-color"
                                    required
                                />
                            </div>
                            {/* Email Input */}
                            <div className="flex-1 relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <HiMail className="h-5 w-5 text-gray-400 dark:text-primary-color" />
                                </span>
                                <input
                                    name="user_email"
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-600 rounded-full placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-color"
                                    required
                                />
                            </div>
                            {/* Phone Input */}
                            <div className="flex-1 relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <HiPhone className="h-5 w-5 text-gray-400 dark:text-primary-color" />
                                </span>
                                <input
                                    name="user_phone"
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-600 rounded-full placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-color"
                                />
                            </div>
                        </div>
                        {/* Message Textarea */}
                        <textarea
                            name="message"
                            rows={6}
                            placeholder="Message Here..."
                            className="w-full p-4 bg-gray-100 dark:bg-gray-600 rounded-xl placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-color"
                            required
                        />
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gray-900 dark:bg-primary-color text-white py-4 rounded-full hover:opacity-90 transition"
                        >
                            {status ? status: "Send Message"}
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
