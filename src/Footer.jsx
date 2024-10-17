import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full bg-[#9A304C] text-white px-56 py-14">
      <div className="grid grid-cols-3 gap-16 pb-7">
        <div>
          <a href="/">
            <img src="/images/logo.png" alt="logo" className="w-24 mb-8" />
          </a>
          <div>
            <a href="tel:+998977772929">
              <FontAwesomeIcon icon={faPhone} size="xl" />
            </a>
            <a href="#" className="px-5">
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTelegram} size="2xl" />
            </a>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-8">
            <li>
              <p>Kompaniya haqida</p>
            </li>
            <li>
              <a href="/">Bosh sahifa</a>
            </li>
            <li><a href="#">Biz haqimizda</a></li>
            <li><a href="#">Aloqa</a></li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-8">
            <li>
              <p>Xizmatlarimiz</p>
            </li>
            <li>
              <a href="/">Bizning afzalliklarimiz</a>
            </li>
            <li><a href="#">Bizning xizmatlarimiz</a></li>
            <li><a href="#">Xizmatlarimiz haqida</a></li>
          </ul>
        </div>
      </div> <hr />
      <div className="flex justify-between pt-7">
        <p>Barcha huquqlar himoyalangan</p>
        <p>Barcha huquqlar himoyalangan: <a href="https://t.me/it_time_admin" className="underline">IT-TIME</a></p>
      </div>
    </div>
  );
};

export default Footer;
