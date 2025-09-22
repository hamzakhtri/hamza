import React from 'react';
import {
    FaGithub,
    FaLinkedinIn,
    FaEnvelope,
    FaFacebookF,
    FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-center text-white">
            {/* Primary Footer */}
            <div className="bg-primary-color px-5 py-10">
                <h3 className="text-3xl font-bold mb-4">Mr Hamza</h3>
                <p className="text-base mb-6">
                    Front-End Developer | React | Firebase | Tailwind CSS
                </p>
                <div className="flex justify-center space-x-8 text-2xl">
                    <a
                        href="https://wa.me/+923072073643"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-200 transition"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp />
                    </a>
                    <a
                        href="https://www.facebook.com/hamzaalisoomroo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-200 transition"
                        aria-label="Facebook"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hamza-ali-soomro-44148323b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-200 transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://github.com/hamzakhtri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-200 transition"
                        aria-label="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="mailto:hamzakhatri12345@gmail.com"
                        className="hover:text-gray-200 transition"
                        aria-label="Email"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>

            {/* Secondary Footer */}
            <div className="bg-gray-800 text-base text-gray-300 py-4">
                &copy; {new Date().getFullYear()} Mr Hamza. All rights reserved.{' '}
                <small><i>Designed and Developed By Mr Hamza</i></small>
            </div>
        </footer>
    );
};

export default Footer;