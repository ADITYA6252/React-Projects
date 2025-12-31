import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("#About");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

 
    const sections = ["#About", "#Experience", "#Projects", "#Footer"];
    const offset = 100; 

    const onScrollActive = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i]);
        if (section && window.scrollY + offset >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScrollActive);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", onScrollActive);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 flex flex-wrap justify-between items-center px-10 pt-4 md:px-20 text-white
        transition-all duration-300
        ${scrollY > 10 ? "shadow-lg bg-[#171d32]/95" : "bg-[#171d32]/80"}`}
    >
      <span
        className="text-xl md:text-2xl font-bold tracking-wide cursor-pointer
        transition-all duration-300 hover:text-[#60a5fa]"
      >
        Aditya | Frontend Developer
      </span>
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full md:static md:flex md:w-auto
        mx-0 md:mx-0 p-6 md:p-0 bg-black/50 md:bg-transparent rounded-xl md:rounded-none
        text-center md:gap-6 transition-all duration-300`}
      >
        {[
          { name: "About", href: "#About" },
          { name: "Experience", href: "#Experience" },
          { name: "Projects", href: "#Projects" },
          { name: "Contact", href: "#Footer" },
        ].map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            <li
              className={`py-2 md:py-0 text-md md:text-lg font-semibold
              cursor-pointer transition-all duration-300 hover:text-[#60a5fa]
              ${
                activeSection === link.href
                  ? "text-[#60a5fa] border-b-2 border-[#60a5fa] md:border-b-0 md:underline md:decoration-[#60a5fa]"
                  : ""
              }`}
            >
              {link.name}
            </li>
          </a>
        ))}
      </ul>

      <div className="md:hidden">
        {menuOpen ? (
          <RiCloseLine
            size={30}
            className="cursor-pointer transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="cursor-pointer transition-all duration-300"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
