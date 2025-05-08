import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform, useSpring } from 'framer-motion';
import heroImage from "../assets/images/hero-img.png";
import topWave from "../assets/images/top-wave.svg";


function Herosection() {
  // Section ref for image tilt
  const sectionRef = useRef(null);

  // Image tilt motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const smoothX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const smoothY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const bounds = sectionRef.current.getBoundingClientRect();
    const offsetX = e.clientX - (bounds.left + bounds.width / 2);
    const offsetY = e.clientY - (bounds.top + bounds.height / 2);
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Text animation setup: animate by words
  const headingText = "A Professional & Creative Front-End Developer";
  const words = headingText.split(" ");
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, ease: 'easeOut' }
    }));
  }, [controls]);

  const wordVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>

      <section
        ref={sectionRef}
        id="about"
        className="bg-secondary-color dark:bg-gray-800 pt-[5%] pb-[6%] px-[20px] sm:px-[70px] scroll-mt-16"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Text Block */}
          <div>
            <p className="text-[18px] sm:text-[20px] font-[600] text-primary-color">
              Hello, I’m Hamza Ali.
            </p>
            <h1 className="text-[30px] sm:text-[55px] font-[800] text-gray-800 leading-tight dark:text-slate-50 flex flex-wrap">
              {words.map((word, idx) => (
                <motion.span
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  animate={controls}
                  variants={wordVariant}
                  className={`inline-block mr-2 ${word === '&' || word === 'Creative' ? 'text-primary-color' : ''}`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <p className="para py-4 text-gray-800 dark:text-slate-50">
              With two years of hands-on experience in front-end development, I have built numerous web applications using modern technologies such as React, Redux, Firebase, and more.
            </p>
            <button className="theme-btn mr-4">Download CV</button>
            <button className="theme-btn-2">Explore Projects</button>
          </div>

          {/* Image Block */}
          <div className="flex justify-center perspective-[1000px]">
            <motion.img
              src={heroImage}
              alt="Hero"
              className="w-[80%] will-change-transform"
              style={{ rotateX: smoothX, rotateY: smoothY, transformStyle: 'preserve-3d' }}
            />
          </div>
        </div>
      </section>
      <img src={topWave} className="w-full dark:bg-gray-800 bg-secondary-color" alt="Top Wave" />
    </>
  );
}

export default Herosection;
