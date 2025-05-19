import React from 'react';
import { motion } from 'framer-motion';
import topWave from "../assets/images/top-wave.svg";


const experience = [
    {
        title: 'Frontend Developer',
        company: 'Logic Racks',
        date: 'Mar 2024 – Present',
        location: 'Karachi, Pakistan',
        description: [
            'Built dynamic, high-performance, fully responsive applications.',
            'Transformed complex UI/UX into interactive web apps.',
            'Integrated APIs and enhanced performance.',
        ]
    },
    {
        title: 'Jr Frontend Developer',
        company: 'Parallel Solutions',
        date: 'Oct 2022 – Jun 2023',
        location: 'Karachi, Pakistan',
        description: [
            'Converted dashboard designs into React apps.',
            'Ensured fast load and responsiveness.',
        ]
    },
    {
        title: 'Intern Frontend Developer',
        company: 'Parallel Solutions',
        date: 'Aug 2022 – Oct 2022',
        location: 'Karachi, Pakistan',
        description: [
            'Transformed UI designs into responsive interfaces.',
            'Focused on user-friendly designs.',
        ]
    },
];

const education = [
    {
        title: 'BS Software Engineering',
        school: 'Virtual University',
        date: '2020 – 2024',
        location: 'Pakistan'
    },
    {
        title: 'Diploma in Web Development',
        school: 'SMIT',
        date: '2022 – 2023',
        location: 'Pakistan'
    }
];

const skills = [
    'JavaScript', 'React JS', 'Redux Toolkit', 'Next JS', 'RTK Query', 'Firebase',
    'Material UI', 'Ant Design', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap',
    'Typescript', 'PSD to HTML', 'REST API Integration', 'Responsive Design'
];

const projects = [
    {
        title: 'Optics Inventory System',
        date: 'Jan 2023 – Mar 2023',
        points: [
            'Built with React.js, Redux, Tailwind CSS.',
            'Real-time tracking with API integration.',
            'Export/import via XLSX files.',
        ]
    },
    {
        title: 'Trips & Tours Booking System',
        date: 'Jul 2023 – Sep 2023',
        points: [
            'Integrated PayPal gateway.',
            'User and Admin dashboards.',
            'Real-time trip booking features.',
        ]
    }
];

// Skills container & chip variants
const skillsContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 }   // stagger chips by 0.15s :contentReference[oaicite:5]{index=5}
    }
};

const skillVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,         // smooth chip entry :contentReference[oaicite:6]{index=6}
            delay: i * 0.1,        // per-chip delay 
            ease: [0.4, 0, 0.2, 1],
        }
    })
};

const Resume = () => {
    return (
        <>
            <section id='resume' className="bg-secondary-color overflow-x-hidden dark:bg-gray-800 px-5 sm:px-10 lg:px-20 pb-10 text-white scroll-mt-16">
                <h2 className="heading-2 text-center mb-10 text-primary-color">&lt;Resume/&gt;</h2>

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Experience - Left */}
                    <div className="border-l-4 border-primary-color pl-[1.77rem] space-y-10">
                        <h3 className="text-2xl font-bold text-primary-color mb-2">&lt;Work Experience/&gt;</h3>
                        {experience.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.3 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute -left-[38px] top-2 w-4 h-4 bg-primary-color rounded-full border-2 border-white" />
                                <div>
                                    <h4 className="text-xl font-semibold text-primary-color">{item.title}</h4>
                                    <p className="dark:text-gray-300 text-gray-900 text-sm mb-2">{item.company} • {item.date}</p>
                                    <p className="text-gray-800 dark:text-gray-400 text-xs mb-2">{item.location}</p>
                                    <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                                        {item.description.map((desc, j) => <li key={j}>{desc}</li>)}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Education + Skills - Right */}
                    <div className="space-y-12">
                        {/* Education */}
                        <div>
                            <h3 className="text-2xl font-bold text-primary-color mb-4">&lt;Education/&gt;</h3>
                            <div className="space-y-6">
                                {education.map((edu, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.3 }}
                                        viewport={{ once: true }}
                                        className="bg-gray-700 p-4 rounded-lg shadow"
                                    >
                                        <h4 className="text-lg font-semibold text-white">{edu.title}</h4>
                                        <p className="text-sm text-gray-300">{edu.school} • {edu.date}</p>
                                        <p className="text-xs text-gray-400">{edu.location}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            {/* Skills */}
                            <motion.div
                                className="mt-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={skillsContainer}
                            >
                                <h3 className="text-2xl font-bold text-primary-color mb-4">&lt;Skills/&gt;</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, i) => (
                                        <motion.span
                                            key={i}
                                            custom={i}
                                            variants={skillVariant}
                                            className="bg-gray-700 text-sm px-4 py-2 rounded-full hover:bg-primary-color transition-colors"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Projects - Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <h3 className="text-2xl font-bold text-primary-color mb-6">&lt;Projects/&gt;</h3>
                    <div className="space-y-6">
                        {projects.map((project, i) => (
                            <div key={i} className="bg-gray-700 p-6 rounded-xl shadow-md">
                                <h4 className="text-lg text-white font-semibold">{project.title}</h4>
                                <p className="text-sm text-gray-400 mb-2">{project.date}</p>
                                <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                                    {project.points.map((pt, j) => <li key={j}>{pt}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>
            <img src={topWave} className="w-full bg-secondary-color dark:bg-gray-800" alt="Top Wave" />
        </>
    );
};

export default Resume;
