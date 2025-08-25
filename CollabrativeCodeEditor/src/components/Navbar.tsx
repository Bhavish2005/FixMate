// // import React, { useState } from 'react';
// // import { Link, useLocation } from 'react-router-dom';
// // import { Code2, Menu, X, User } from 'lucide-react';

// // const Navbar: React.FC = () => {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const location = useLocation();

// //   const navLinks = [
// //     { name: 'Home', path: '/' },
// //     { name: 'About', path: '/about' },
// //     { name: 'Contact', path: '/contact' },
// //   ];

// //   const isActive = (path: string) => location.pathname === path;

// //   return (
// //     <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-16">
// //           {/* Logo */}
// //           <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
// //             <Code2 className="w-8 h-8 text-blue-400" />
// //             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
// //               CodeSync
// //             </span>
// //           </Link>

// //           {/* Desktop Navigation */}
// //           <div className="hidden md:flex items-center space-x-8">
// //             {navLinks.map((link) => (
// //               <Link
// //                 key={link.name}
// //                 to={link.path}
// //                 className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
// //                   isActive(link.path)
// //                     ? 'text-blue-400 bg-gray-700'
// //                     : 'text-gray-300 hover:text-white hover:bg-gray-700'
// //                 }`}
// //               >
// //                 {link.name}
// //               </Link>
// //             ))}
// //             <Link
// //               to="/login"
// //               className="flex items-center space-x-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
// //             >
// //               <User className="w-4 h-4" />
// //               <span>Sign In</span>
// //             </Link>
// //           </div>

// //           {/* Mobile menu button */}
// //           <div className="md:hidden">
// //             <button
// //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// //               className="text-gray-300 hover:text-white p-2"
// //             >
// //               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile Navigation */}
// //         {isMenuOpen && (
// //           <div className="md:hidden border-t border-gray-700 pt-4 pb-4">
// //             <div className="flex flex-col space-y-2">
// //               {navLinks.map((link) => (
// //                 <Link
// //                   key={link.name}
// //                   to={link.path}
// //                   className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
// //                     isActive(link.path)
// //                       ? 'text-blue-400 bg-gray-700'
// //                       : 'text-gray-300 hover:text-white hover:bg-gray-700'
// //                   }`}
// //                   onClick={() => setIsMenuOpen(false)}
// //                 >
// //                   {link.name}
// //                 </Link>
// //               ))}
// //               <Link
// //                 to="/login"
// //                 className="flex items-center space-x-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors w-fit"
// //                 onClick={() => setIsMenuOpen(false)}
// //               >
// //                 <User className="w-4 h-4" />
// //                 <span>Sign In</span>
// //               </Link>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // new UI
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Code2, Menu, X, User } from 'lucide-react';

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="bg-[#0f172a]/95 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
//             <Code2 className="w-8 h-8 text-teal-400" />
//             <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
//               FixMate
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
//                   isActive(link.path)
//                     ? 'text-teal-400 bg-gray-800 shadow-md'
//                     : 'text-gray-300 hover:text-white hover:bg-gray-800/70'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <Link
//               to="/login"
//               className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 rounded-lg transition-all duration-200 shadow-md hover:shadow-teal-500/20"
//             >
//               <User className="w-4 h-4" />
//               <span>Sign In</span>
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="text-gray-300 hover:text-white p-2"
//             >
//               {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden border-t border-gray-800 pt-4 pb-4">
//             <div className="flex flex-col space-y-2">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
//                     isActive(link.path)
//                       ? 'text-teal-400 bg-gray-800 shadow-sm'
//                       : 'text-gray-300 hover:text-white hover:bg-gray-800/70'
//                   }`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//               <Link
//                 to="/login"
//                 className="flex items-center space-x-1 px-3 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 rounded-lg transition-all duration-200 shadow-md hover:shadow-teal-500/20 w-fit"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 <User className="w-4 h-4" />
//                 <span>Sign In</span>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Code2, Menu, X, User } from "lucide-react";

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 
//                     w-[90%] max-w-7xl z-50">
//       {/* Glass Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-cyan-600/20 to-teal-600/20 
//                       backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg"></div>

//       {/* Navbar Content */}
//       <div className="relative flex justify-between items-center h-16 px-6">
//         {/* Logo */}
//         <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
//           <Code2 className="w-8 h-8 text-teal-400" />
//           <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
//             FixMate
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-8">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
//                 isActive(link.path)
//                   ? "text-teal-400 bg-white/10 shadow-sm"
//                   : "text-gray-200 hover:text-white hover:bg-white/10"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <Link
//             to="/login"
//             className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r 
//                        from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 
//                        rounded-lg transition-all duration-200 shadow-md hover:shadow-teal-500/30"
//           >
//             <User className="w-4 h-4" />
//             <span>Sign In</span>
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="text-gray-200 hover:text-white p-2"
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="relative md:hidden border-t border-white/10 rounded-b-2xl bg-black/30 backdrop-blur-xl">
//           <div className="flex flex-col space-y-2 p-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
//                   isActive(link.path)
//                     ? "text-teal-400 bg-white/10"
//                     : "text-gray-200 hover:text-white hover:bg-white/10"
//                 }`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <Link
//               to="/login"
//               className="flex items-center space-x-1 px-3 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 
//                          hover:from-teal-700 hover:to-cyan-700 rounded-lg transition-all duration-200 
//                          shadow-md hover:shadow-teal-500/30 w-fit"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <User className="w-4 h-4" />
//               <span>Sign In</span>
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

//newImprovements
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Code2, Menu, X, User } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 
                  w-[90%] max-w-7xl z-50 transition-transform duration-300
                  ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Glass Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 via-cyan-600/20 to-teal-600/20 
                      backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg"></div>

      {/* Navbar Content */}
      <div className="relative flex justify-between items-center h-16 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
          <Code2 className="w-8 h-8 text-teal-400" />
          <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            FixMate
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive(link.path)
                  ? "text-teal-400 bg-white/10 shadow-sm"
                  : "text-gray-200 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r 
                       from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 
                       rounded-lg transition-all duration-200 shadow-md hover:shadow-teal-500/30"
          >
            <User className="w-4 h-4" />
            <span>Sign In</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-200 hover:text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="relative md:hidden border-t border-white/10 rounded-b-2xl bg-black/30 backdrop-blur-xl">
          <div className="flex flex-col space-y-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-teal-400 bg-white/10"
                    : "text-gray-200 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="flex items-center space-x-1 px-3 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 
                         hover:from-teal-700 hover:to-cyan-700 rounded-lg transition-all duration-200 
                         shadow-md hover:shadow-teal-500/30 w-fit"
              onClick={() => setIsMenuOpen(false)}
            >
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

