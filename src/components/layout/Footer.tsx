import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Globe 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Globe className="mr-2" size={24} />
              <h3 className="text-xl font-bold text-white">SG Swake LTD</h3>
            </div>
            <p className="text-neutral-200 mb-4">
              Premium tour and hosting services across East Africa, helping you discover
              the beauty and culture of this magnificent region.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-accent-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-200 hover:text-accent-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-200 hover:text-accent-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/details" className="text-neutral-200 hover:text-accent-300 transition-colors">
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link to="/details" className="text-neutral-200 hover:text-accent-300 transition-colors">
                  Accommodations
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-neutral-200 hover:text-accent-300 transition-colors">
                  Book a Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
                <p className="text-neutral-200">
                  Bakuli, Bukesa
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <p className="text-neutral-200">+256755811996</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <p className="text-neutral-200">sgswake@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Newsletter</h4>
            <p className="text-neutral-200 mb-4">
              Subscribe to our newsletter for travel tips and exclusive offers.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded text-neutral-800 focus:outline-none focus:ring-2 focus:ring-accent-400"
              />
              <button
                type="submit"
                className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-neutral-300">
            &copy; {new Date().getFullYear()} SG Swake LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;