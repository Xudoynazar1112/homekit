import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector("#navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
  });
  const language = localStorage.getItem("i18nextLng");
  const { t, i18n } = useTranslation();
  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      id="navbar"
      className="sticky top-0 w-full flex justify-between items-center md:py-12 md:px-28 bg-black h-20 text-white z-50"
    >
      <a href="/">
        <img src="/images/logo.png" className="w-14 md:w-20" alt="logo" />
      </a>
      <ul className="hidden md:flex md:items-center gap-24 text-lg">
        <li>
          <a href="#service" className="hover:text-white">
            {t("xizmat")}
          </a>
        </li>
        <li>
          <a href="#footer" className="hover:text-white">
            {t("haqida")}
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-white">
            {t("aloqa")}
          </a>
        </li>
        <li>
          <select
            name="Lang"
            id="lang"
            value={language}
            onChange={handleChange}
            className="px-3 text-white bg-gray-500 shadow-inner rounded-lg focus:outline-none"
          >
            <option value="uz">O'Z</option>
            <option value="ru">RU</option>
          </select>
        </li>
        <li>
          <a
            href="tel:+998977772929"
            className="bg-[#B50A3F] text-white hover:text-white text-lg hover:nonne cursor-pointer flex flex-col items-center p-2 px-7 rounded-xl"
          >
            +998 97 777 29 29{" "}
            <span className="text-sm leading-[0] pb-3">{t("aloqa")}</span>
          </a>
        </li>
      </ul>
      <div className="md:hidden">
        <button className="text-4xl transition-colors duration-300 bg-black text-white" onClick={toggleNavbar}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <ul className="flex flex-col basis-full items-center gap-10 fixed top-14 right-0 pt-[20%] w-80 h-full bg-black z-20 md:hidden">
          <li onClick={toggleNavbar}>
            <a href="#service" className="hover:text-white">
              {t("xizmat")}
            </a>
          </li>
          <li onClick={toggleNavbar}>
            <a href="#footer" className="hover:text-white">
              {t("haqida")}
            </a>
          </li>
          <li onClick={toggleNavbar}>
            <a href="#contact" className="hover:text-white">
              {t("aloqa")}
            </a>
          </li>
          <li>
            <select
              name="Lang"
              id="lang"
              value={language}
              onChange={handleChange}
              className="px-3 text-white bg-gray-500 shadow-inner rounded-lg focus:outline-none"
            >
              <option value="uz">O'Z</option>
              <option value="ru">RU</option>
            </select>
          </li>
          <li onClick={toggleNavbar}>
            <a
              href="tel:+998977772929"
              className="bg-[#B50A3F] text-white hover:text-white text-lg hover:nonne cursor-pointer flex flex-col items-center p-2 px-7 rounded-xl"
            >
              +998 97 777 29 29{" "}
              <span className="text-sm leading-[0] pb-3">{t("aloqa")}</span>
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
