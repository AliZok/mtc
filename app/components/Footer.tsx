import { HiOutlineMapPin, HiOutlinePhone } from 'react-icons/hi2';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Marium Trading & Contracting
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for construction and renovation services in Yerevan. Fast, affordable, reliable workmanship.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <HiOutlineMapPin className="text-gray-400 flex-shrink-0" size={20} />
                <span>Yerevan, Armenia</span>
              </li>
              <li className="flex items-center gap-2">
                <MdEmail className="text-gray-400 flex-shrink-0" size={20} />
                <a href="mailto:info@mariumtc.com" className="hover:text-white transition-colors">
                  info@mariumtc.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <HiOutlinePhone className="text-gray-400 flex-shrink-0" size={20} />
                <a href="tel:+37498850187" className="hover:text-white transition-colors">
                  +374 98 850187
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Marium Trading and Contracting LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

