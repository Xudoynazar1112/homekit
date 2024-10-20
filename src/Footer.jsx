import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t, i18n} = useTranslation();
  return (
    <div id="footer" className="w-full bg-[#9A304C] text-white px-24 md:px-56 py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 pb-7">
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
              <p>{t('footer.kompaniyaHaqida')}</p>
            </li>
            <li>
              <a href="/">{t('footer.bosh')}</a>
            </li>
            <li><a href="#">{t('haqida')}</a></li>
            <li><a href="#">{t('aloqa')}</a></li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-8">
            <li>
              <p>{t('xizmat')}</p>
            </li>
            <li>
              <a href="/">{t('footer.afvzallik')}</a>
            </li>
            <li><a href="#">{t('footer.bizXizmat')}</a></li>
            <li><a href="#">{t('footer.xizmatHaqida')}</a></li>
          </ul>
        </div>
      </div> <hr />
      <div className="flex justify-between pt-7">
        <p className="hidden md:inline">{t('footer.huquqHimoya')}</p>
        <p>{t('footer.huquqHimoya')}: <a href="https://t.me/it_time_admin" className="underline">IT-TIME</a></p>
      </div>
    </div>
  );
};

export default Footer;
