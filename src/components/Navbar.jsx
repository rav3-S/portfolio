// Kevin RUSH
// import React, { useState } from "react";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import logo from "../assets/kevinRushLogo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className=" mb-20 flex items-center justify-between py-6">
//       <div className="flex flex-shrink-0 items-center">
//         <img className="mx-2 w-10" src={logo} alt="logo" />
//         {/* <h2 className="text-zinc-200 flex px-8">Ravishankar</h2> */}
//       </div>
//       {/* <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         <FaLinkedin />
//         <FaGithub />
//         <FaSquareXTwitter />
//       </div> */}
//       <button
//         onClick={toggleNavbar}
//         className="md:hidden p-2 text-2xl focus:outline-none"
//         aria-label="Toggle navigation"
//       >
//         {isOpen ? "✖" : "☰"}
//       </button>
//       <div
//         className={`${
//           isOpen ? "block" : "hidden"
//         } md:flex md:items-center md:justify-center gap-4 text-2xl absolute left-0 right-0 top-full bg-neutral-800 md:static md:bg-transparent`}
//       >
//         <a
//           href="#hero"
//           className="block px-4 py-2 hover:bg-neutral-700"
//           onClick={() => setIsOpen(false)} // Close navbar on link click
//         >
//           Hero
//         </a>
//         <a
//           href="#technologies"
//           className="block px-4 py-2 hover:bg-neutral-700"
//           onClick={() => setIsOpen(false)} // Close navbar on link click
//         >
//           Technologies
//         </a>
//         <a
//           href="#contact"
//           className="block px-4 py-2 hover:bg-neutral-700"
//           onClick={() => setIsOpen(false)} // Close navbar on link click
//         >
//           Contact
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { LINKS } from "../constants";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { TbSquareRoundedLetterR } from "react-icons/tb";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg">
        <div className="text-white font-semibold text-lg uppercase">
          <a href="#home">
            {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
            <TbSquareRoundedLetterR className="mx-2 w-10 text-3xl text-white " />
          </a>
        </div>

        <div className="hidden md:flex space-x-8">
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white hover:text-stone-400 transition duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <RiCloseFill className="w-6 h-6" />
            ) : (
              <RiMenu3Fill className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div
          className="md:hidden p-2 bg-stone-950/30 backdrop-blur-lg rounded-xl
         flex flex-col space-y-4 max-w-6xl mx-auto"
        >
          {LINKS.map((link, index) => (
            <a
              href={link.href}
              key={index}
              className="text-white hover:text-stone-400 transition duration-300"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
