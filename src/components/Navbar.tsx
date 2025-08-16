import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div>
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center relative">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Services</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>

          {/* Call Us Now Button (always visible on desktop) */}
          <button className="hidden mx-10 md:block cursor-pointer text-start bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg">
            Call Us Now
          </button>

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
                    d="M6 18L18 6M6 6l12 12"
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
        className={`fixed top-0 left-0 h-full w-64 bg-blue-900 text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 space-y-3">
          <ul className="space-y-2">
            <li className="hover:text-gray-300 cursor-pointer">Home</li>
            <li className="hover:text-gray-300 cursor-pointer">About</li>
            <li className="hover:text-gray-300 cursor-pointer">Services</li>
            <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          </ul>

          {/* Call Us Now Button (mobile version) */}
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg mt-2 cursor-pointer">
            Call Us Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
