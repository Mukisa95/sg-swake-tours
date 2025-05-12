import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Services', path: '/details' },
    { name: 'Book Now', path: '/booking' },
  ];

  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrolled
      ? 'bg-white shadow-md py-2'
      : 'bg-transparent py-4'
  }`;

  const logoClasses = `font-playfair font-bold flex items-center ${
    scrolled ? 'text-primary-800' : 'text-white'
  }`;

  const linkClasses = `relative px-3 py-2 transition-all font-medium ${
    scrolled ? 'text-neutral-700 hover:text-primary-700' : 'text-white hover:text-accent-300'
  }`;

  const activeLinkClasses = `${
    scrolled ? 'text-primary-700' : 'text-accent-300'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container flex items-center justify-between">
        <Link to="/" className={logoClasses}>
          <Globe className="mr-2" size={36} />
          <div>
            <span className="text-4xl">SG Swake</span>
            <p className={`text-xs ${scrolled ? 'text-primary-700' : 'text-neutral-200'} mt-0.5`}>
              from the pearl to the rest of the world
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `${linkClasses} ${isActive ? activeLinkClasses : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className={`flex items-center ml-4 ${
            scrolled ? 'text-primary-700' : 'text-white'
          }`}>
            <MapPin size={18} className="mr-1" />
            <span className="text-sm">East Africa</span>
          </div>
        </nav>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={scrolled ? 'text-neutral-800' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-neutral-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0"
        >
          <div className="container py-4 flex flex-col">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `py-3 px-4 border-b border-neutral-100 ${
                    isActive ? 'text-primary-700 font-medium' : 'text-neutral-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex items-center text-primary-700 py-3 px-4">
              <MapPin size={18} className="mr-2" />
              <span>East Africa</span>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;