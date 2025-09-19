import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-black text-white shadow-md">
      <div>
        <div className="max-w-7xl container mx-auto px-4 py-3 flex items-center justify-center relative">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <a href="#home">
              <li className="hover:text-gray-300 cursor-pointer">Home</li>
            </a>
            <a href="#about">
              <li className="hover:text-gray-300 cursor-pointer">About</li>
            </a>
            <a href="#services">
              <li className="hover:text-gray-300 cursor-pointer">Services</li>
            </a>
            <a href="#contact">
              <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            </a>
          </ul>

          <a
            href="tel:0561623688"
            className="hidden mx-10 md:block cursor-pointer font-bold text-start bg-blue-900 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Call Us Now
          </a>

          {/* Mobile Toggle Button (RIGHT SIDE) */}
          <div className="p-5 md:p-0">
            <button
              className="md:hidden focus:outline-none absolute right-4 top-1/2 -translate-y-1/2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar (Left Slide-in) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button (TOP-RIGHT INSIDE SIDEBAR) */}
        <button
          className="absolute top-4 right-4 focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="p-4 space-y-5">
          <ul className="space-y-2">
            <a href="#home" onClick={() => setIsOpen(false)}>
              <li className="hover:text-gray-300 cursor-pointer mt-10 mb-2">
                Home
              </li>
            </a>
            <a href="#about" onClick={() => setIsOpen(false)}>
              <li className="hover:text-gray-300 cursor-pointer mb-2">About</li>
            </a>
            <a href="#services" onClick={() => setIsOpen(false)}>
              <li className="hover:text-gray-300 cursor-pointer mb-2">
                Services
              </li>
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <li className="hover:text-gray-300 cursor-pointer mb-2">
                Contact
              </li>
            </a>
          </ul>

          {/* Call Us Now Button (mobile version) */}
          <a href="tel:0561623688">
            <button className="w-full bg-blue-900 hover:bg-blue-600 font-bold text-white px-4 py-2 rounded-lg mt-2 cursor-pointer">
              Call Us Now
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
