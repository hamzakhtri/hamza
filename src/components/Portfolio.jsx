// src/components/Portfolio.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import bottomWave from '../assets/images/bottom-wave.svg';

const projects = [
    {
        title: 'E-Carpool',
        description1:
            'E-Carpool is a carpooling platform where users can post and join rides between cities. It helps save travel costs and reduce carbon emissions.',
        description2:
            'Built with React JS, Redux, Firebase, and React-Bootstrap. Includes real-time chat, trip posting, and user authentication.',
        link: 'https://e-carpool-71cc9.web.app/',
        img: 'port1.png',
    },

    {
        title: 'Trips & Tours',
        description1:
            'Online travel booking system where users can book trips. Includes a dashboard for admin to manage trips, users, and bookings.',
        description2:
            'Built using React JS, Redux, Tailwind CSS, and Ant Design. Features PayPal integration and responsive design.',
        link: 'https://booking.tripsandtours.uk/',
        img: 'port3.png',
    },
    {
        title: 'POS Pro UK',
        description1:
            'A POS system with roles for Admin, Staff, Kitchen, and Delivery. Manages orders, invoices, and user operations in restaurants.',
        description2:
            'Created with React JS, Redux, Ant Design, Axios, and Tailwind CSS. Focused on smooth workflows and real-time updates.',
        link: 'https://posuk.vercel.app/',
        img: 'port4.png',
    },
    {
        title: 'Elite Book Authors',
        description1:
            'A professional website for an agency offering book writing, designing, and ghostwriting services. Includes lead forms for client contact.',
        description2:
            'Developed using HTML, CSS, JS, Bootstrap, jQuery, AJAX, and PHP. Fully responsive with custom form handling.',
        link: 'https://elitebookauthors.com/',
        img: 'port2.png',
    },
];



const Portfolio = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        // Bind Fancybox to elements with data-fancybox attribute
        NativeFancybox.bind(container, '[data-fancybox]', {
            Thumbs: {
                autoStart: true,
            },
        });

        // Cleanup on unmount
        return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    }, []);

    return (
        <section id="portfolio" className="bg-secondary-color dark:bg-gray-800 pb-10 scroll-mt-16 ">
            <div className="bg-primary-color px-5 sm:px-20">
                <h2 className="heading-2 text-gray-800 text-center mb-10">&lt;Portfolio/&gt;</h2>

                <div ref={containerRef}>
                    {projects.map((proj, idx) => {
                        const isEven = idx % 2 === 0;
                        const imgSrc = `../images/${proj.img}`; // Adjust the path as needed

                        return (
                            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center py-5">
                                {/* Image Box */}
                                <div
                                    className={`relative group p-4 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'
                                        }`}
                                >
                                    <a href={imgSrc} data-fancybox="gallery" data-caption={proj.title}>
                                        <motion.img
                                            src={imgSrc}
                                            alt={`${proj.title} Screenshot`}
                                            className="w-full rounded-lg"
                                            whileHover={{
                                                y: -20,
                                                scale: 1.05,
                                                filter: 'drop-shadow(0px 30px 30px rgba(0,0,0,0.3))',
                                            }}
                                            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                        />
                                        <div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </a>
                                </div>

                                {/* Content Box */}
                                <div
                                    className={`px-8 py-8 sm:py-4 flex items-center bg-gray-800 rounded-2xl shadow-lg h-full ${isEven ? 'md:order-2' : 'md:order-1'
                                        }`}
                                >
                                    <div>
                                        <h3 className="heading-3 mb-2 text-primary-color">{proj.title}</h3>
                                        <p className="para mb-4 text-slate-50">{proj.description1}</p>
                                        <p className="para mb-4 text-slate-50">{proj.description2}</p>
                                        <a href={proj.link} target="_blank" rel="noopener noreferrer">
                                            <button className="theme-btn">Visit Now</button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <img src={bottomWave} className="w-full" alt="Bottom Wave" />
        </section>
    );
};

export default Portfolio;
