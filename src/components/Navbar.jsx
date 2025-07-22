import { useState } from "react";
import { LINKS } from "../constants";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";
import { TbSquareRoundedLetterR } from "react-icons/tb";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleLinkClick = () => {
    // Check if v2 is in the URL
    // const isV2 = window.location.pathname.includes("v2");
    // const newPath = isV2 && href === "/portfolio/" ? "/portfolio/v2" : href;

    // // Navigate to the new path
    // window.location.href = newPath;
    setMenuOpen(false);
  };

  const handleLogoClick = (event) => {
    event.preventDefault();
    const isV2 = window.location.pathname.includes("v2");
    const newPath = isV2 ? "/portfolio/v2" : "/portfolio/";
    window.location.href = newPath;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto md:my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg">
        <div className="text-white font-semibold text-lg uppercase">
          <a href="/">
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
