import React from "react";

const Navbar = () => {
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector("#navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
  });
  return (
    <div
      id="navbar"
      className="sticky top-0 w-full flex justify-between items-center py-12 px-28 bg-black h-20 text-white z-50"
    >
      <a href="/">
        <img src="/images/logo.png" className="w-20" alt="logo" />
      </a>
      <ul className="flex items-center gap-24 text-lg">
        <li>
          <a href="#" className="hover:text-white">Xizmatlarimiz</a>
        </li>
        <li>
          <a href="#" className="hover:text-white">Biz Haqimizda</a>
        </li>
        <li>
          <a href="#" className="hover:text-white">Aloqa</a>
        </li>
        <li>
          <select name="lang" id="lang" className="px-3 text-white bg-gray-500 shadow-inner rounded-lg focus:outline-none">
            <option value="uz">O'Z</option>
            <option value="ru">RU</option>
          </select>
        </li>
        <li>
          <a
            href="tel:+998977772929"
            className="bg-[#B50A3F] text-white hover:text-white text-lg hover:nonne cursor-pointer flex flex-col items-center p-2 px-7 rounded-xl"
          >
            +998 97 777 29 29 <span className="text-sm leading-[0] pb-3">Aloqa</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
