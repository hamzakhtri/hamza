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
                <h3 className="text-3xl font-bold mb-4">Hamza Ali</h3>
                <p className="text-base mb-6">
                    Front-End Developer | React | Firebase | Tailwind CSS
                </p>
                <div className="flex justify-center space-x-8 text-2xl">
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-200 transition"
                    >
                        <FaWhatsapp />
                    </a>
                    <a
                        href="https://facebook.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-200 transition"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-200 transition"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-200 transition"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="mailto:example@email.com"
                        className="hover:text-gray-200 transition"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>

            {/* Secondary Footer */}
            <div className="bg-gray-800 text-base text-gray-300 py-4">
                &copy; {new Date().getFullYear()} Hamza Ali. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
