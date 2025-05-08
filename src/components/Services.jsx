import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaLaptopCode, FaWordpress, FaReact, FaBug, FaLifeRing } from 'react-icons/fa';
import bottomWave from "../assets/images/bottom-wave.svg";

const servicesData = [
  {
    title: 'PSD to HTML',
    icon: <FaLaptopCode size={48} />,
    description: 'Transforming your creative designs into pixel-perfect websites with modern best practices.',
  },
  {
    title: 'React JS Development',
    icon: <FaReact size={48} />,
    description: 'Developing robust, scalable web applications using React.js and the latest technologies.',
  },
  {
    title: 'UI Bug Fixing',
    icon: <FaTools size={48} />,
    description: 'Identifying and resolving UI issues to ensure smooth, responsive user experiences.',
  },
  {
    title: 'JavaScript Bug Fixing',
    icon: <FaBug size={48} />,
    description: 'Troubleshooting JavaScript issues to enhance functionality and performance.',
  },
  {
    title: 'WordPress Development',
    icon: <FaWordpress size={48} />,
    description: 'Building dynamic, user-friendly WordPress sites tailored to your needs.',
  },
  {
    title: 'Maintenance Service',
    icon: <FaLifeRing size={48} />,
    description: 'Providing ongoing maintenance and support to keep your applications updated.',
  },
];

// Container animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      when: 'beforeChildren',
    },
  },
};

// Card animation with initial state set explicitly to avoid default tilt
const cardVariants = {
  hidden: { opacity: 0, y: 30, rotateX: 0, rotateY: 0 },  // Explicitly set default to 0
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
};

const Services = () => (
  <section id="services" className="bg-secondary-color dark:bg-gray-800 pb-10 scroll-mt-16">

    <div className="bg-primary-color px-5 sm:px-20">
      <h2 className="heading-2 text-gray-800 text-center mb-10">&lt;Services/&gt;</h2>

      {/* Apply perspective to parent for 3D hover to work */}
      <motion.div
        style={{ perspective: '1000px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {servicesData.map((service, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-800 text-white p-6 rounded-lg shadow-md h-full"
            variants={cardVariants}
            whileHover={{
              rotateY: 5,
              rotateX: -5,
              boxShadow: '0px 15px 25px rgba(0,0,0,0.2)',
            }}
            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
          >
            <div className="text-primary-color mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-200 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>

    <img src={bottomWave} className="w-full" alt="Bottom Wave" />
  </section>
);

export default Services;
