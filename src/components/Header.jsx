import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoSunny } from 'react-icons/io5';
import { RiMoonClearLine } from 'react-icons/ri';
import { MdOutlineFileDownload } from 'react-icons/md';
import { toggleTheme } from '../store/features/theme/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const sections = ['about', 'services', 'resume', 'portfolio', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-secondary-color dark:bg-gray-800 py-2.5 px-[20px] sm:px-[70px]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <span className="text-primary-color text-[26px] tracking-wide leading-tight font-[900]">
              &lt;<span className="text-gray-800 leading-tight font-[700] dark:text-slate-50">Hamza Ali</span>/&gt;
            </span>
          </Link>

          <div className="flex items-center lg:order-2">
            <a
              href="./resume/hamzaali.pdf"
              className="theme-btn items-center gap-2 hidden lg:flex"
            >
              <span>Resume</span>
              <MdOutlineFileDownload className="text-[24px]" />
            </a>
            <button
              onClick={() => dispatch(toggleTheme())}
              className="text-gray-700 focus:outline-none ml-2"
            >
              {theme === 'dark' ? (
                <IoSunny className="w-6 h-6 text-slate-50 hover:text-primary-color" />
              ) : (
                <RiMoonClearLine className="w-6 h-6 text-gray-700 hover:text-primary-color" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="lg:hidden text-gray-700 dark:text-slate-200 focus:outline-none ml-2"
            >
              <FaBars className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Sidebar Menu */}
          <div
            className={`fixed inset-0 bg-gray-800 bg-opacity-90 z-50 transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} className="text-white">
                <FaTimes className="w-6 h-6" />
              </button>
            </div>
            <ul className="flex flex-col items-center text-white font-medium space-y-4 mt-4">
              <li>
                <a
                  href="#about"
                  onClick={toggleMenu}
                  className={`block py-2 px-4 hover:text-primary-color transition duration-200 ${
                    activeSection === 'about' ? 'text-primary-color' : ''
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={toggleMenu}
                  className={`block py-2 px-4 hover:text-primary-color transition duration-200 ${
                    activeSection === 'services' ? 'text-primary-color' : ''
                  }`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  onClick={toggleMenu}
                  className={`block py-2 px-4 hover:text-primary-color transition duration-200 ${
                    activeSection === 'resume' ? 'text-primary-color' : ''
                  }`}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={toggleMenu}
                  className={`block py-2 px-4 hover:text-primary-color transition duration-200 ${
                    activeSection === 'portfolio' ? 'text-primary-color' : ''
                  }`}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={toggleMenu}
                  className={`block py-2 px-4 hover:text-primary-color transition duration-200 ${
                    activeSection === 'contact' ? 'text-primary-color' : ''
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Resume button at bottom of mobile menu */}
            <div className="mt-auto mb-8 px-4 w-full">
              <a
                href="./resume/hamzaali.pdf"
                onClick={toggleMenu}
                className="theme-btn flex items-center justify-center gap-2 w-full"
              >
                <span>Resume</span>
                <MdOutlineFileDownload className="text-[24px]" />
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#about"
                  className={`block py-2 pr-4 pl-3 ${
                    activeSection === 'about'
                      ? 'text-primary-color'
                      : 'text-gray-800 dark:text-slate-50'
                  } border-b lg:border-0 hover:text-primary-color lg:p-0`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={`block py-2 pr-4 pl-3 ${
                    activeSection === 'services'
                      ? 'text-primary-color'
                      : 'text-gray-800 dark:text-slate-50'
                  } border-b lg:border-0 hover:text-primary-color lg:p-0`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className={`block py-2 pr-4 pl-3 ${
                    activeSection === 'resume'
                      ? 'text-primary-color'
                      : 'text-gray-800 dark:text-slate-50'
                  } border-b lg:border-0 hover:text-primary-color lg:p-0`}
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className={`block py-2 pr-4 pl-3 ${
                    activeSection === 'portfolio'
                      ? 'text-primary-color'
                      : 'text-gray-800 dark:text-slate-50'
                  } border-b lg:border-0 hover:text-primary-color lg:p-0`}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`block py-2 pr-4 pl-3 ${
                    activeSection === 'contact'
                      ? 'text-primary-color'
                      : 'text-gray-800 dark:text-slate-50'
                  } border-b lg:border-0 hover:text-primary-color lg:p-0`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}