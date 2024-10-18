import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/effect-coverflow";
import { EffectCards } from "swiper/modules";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import axios from "axios";

const Afzalliklar = ({ p1, p2, p3 }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center w-full mt-10">
      <div className="flex flex-col items-center justify-center w-3/4 bg-[#fdeaea] rounded-lg pt-10">
        <h1 className="text-4xl md:text-6xl">{t("service.afvzal")}</h1>
        <ul>
          <li className="m-10 p-5 rounded-xl bg-[#bdbdbd44] flex gap-8">
            <img src="/images/icon1.png" alt="photo" className="w-14 h-14" />
            <p className="w-56">{p1}</p>
          </li>
          <li className="m-10 p-5 rounded-xl bg-[#bdbdbd44] flex gap-8">
            <img src="/images/icon2.png" alt="icon" className="w-14 h-14" />
            <p className="w-56">{p2}</p>
          </li>
          <li className="m-10 p-5 rounded-xl bg-[#bdbdbd44] flex gap-8">
            <img src="/images/icon3.png" alt="icon" className="w-16 h-16" />
            <p className="w-56">{p3}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

const FormBtns = ({ img, des }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col items-center w-full">
      <img src={img} alt="photo" className="w-10" />
      <p>{des}</p>
    </div>
  );
};

const Services = () => {
  const { t, i18n } = useTranslation();
  const SendMessage = (event) => {
    event.preventDefault();
    const token = "1361985908:AAHThjmeSwnG-9iBNmVqjBpv4X2B2bwh66M";
    const chat_id = 843414567;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    const message = `Ism: ${name}. \nTelefon raqam: ${phone}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: message,
      },
    })
      .then((res) => {
        document.getElementById("contact").reset();
        console.log("Muvaffaqiyatli jo'natildi!");
        toast.success("Muvaffaqiyatli jo'natildi!");
      })
      .catch((error) => {
        toast.error("Xatolik yuz berdi, iltimos qayta urinib ko'ring!");
        console.log("Xatolik yuz berdi: ", error);
      });
  };
  return (
    <div
      id="service"
      className="bg-fon bg-no-repeat bg-cover w-[100vw] h-full py-10 flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center text-white py-14">
        <h1 className="text-4xl md:text-6xl mb-3">{t("footer.bizXizmat")}</h1>
        <p className="text-md md:text-lg w-2/3 text-center mb-3">
          {t("serviceBody")}
        </p>
        <div className="flex flex-col gap-10 w-2/3 my-10">
          <div className="bg-[#d6d6d639] p-5 md:p-20 md:flex items-center gap-10 w-full rounded-2xl">
            <img
              src="/images/t7.088bfdb5c8b1977c8892.jpg"
              alt="photo"
              className="w-[375px] h-[280px] rounded-2xl"
            />
            <div className="text-wrap pl-5 flex flex-col gap-10">
              <h1 className="text-3xl md:text-5xl">
                {t("service.kontent1head")}
              </h1>
              <p>{t("service.kontent1body")}</p>
            </div>
          </div>
          <div className="md:flex gap-10 w-full">
            <div className="bg-[#d6d6d639] p-5 md:p-14 flex flex-col items-center gap-10 rounded-2xl mb-10">
              <img
                src="images/newkalit.cfb0145959340fb61282.jpeg"
                alt="photo"
                className="w-[360px] h-[250px] rounded-2xl"
              />
              <div className="text-wrap pl-5 flex flex-col gap-10">
                <h1 className="text-3xl md:text-5xl">
                  {t("service.kontent2head")}
                </h1>
                <p>{t("service.kontent2body")}</p>
              </div>
            </div>
            <div className="bg-[#d6d6d639] p-5 md:p-14 flex flex-col items-center gap-10 rounded-2xl">
              <img
                src="images/newr.a27de1cd6fa5b7be2207.jpg"
                alt="photo"
                className="w-[360px] h-[250px] rounded-2xl"
              />
              <div className="text-wrap pl-5 flex flex-col gap-10">
                <h1 className="text-3xl md:text-5xl">
                  {t("service.kontent3head")}
                </h1>
                <p>{t("service.kontent3body")}</p>
              </div>
            </div>
          </div>
          <div className="bg-[#d6d6d639] p-5 md:p-20 md:flex items-center gap-10 rounded-2xl">
            <img
              src="images\w2.ec6ec951e9bd7d1ab91e.jpg"
              alt="photo"
              className="w-[375px] h-[280px] rounded-2xl"
            />
            <div className="text-wrap pl-5 flex flex-col gap-10">
              <h1 className="text-3xl md:text-5xl">
                {t("service.kontent4head")}
              </h1>
              <p>{t("service.kontent4body")}</p>
            </div>
          </div>
          <div className="bg-[#d6d6d639] p-5 md:p-20 md:flex items-center gap-10 rounded-2xl">
            <img
              src="\images\w9.48ccdfc9745d9175da5d.jpg"
              alt="photo"
              className="w-[375px] h-[280px] rounded-2xl"
            />
            <div className="text-wrap pl-5 flex flex-col gap-10">
              <h1 className="text-3xl md:text-5xl">
                {t("service.kontent5head")}
              </h1>
              <p>{t("service.kontent5body")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:flex-col md:items-center md:w-full md:h-[40rem] md:relative">
        <div className="bg-[#fdeaea] rounded-2xl w-2/3 h-[70%] pt-16 pl-10 pr-[35%] absolute bottom-0">
          <h1>{t("haqida")}</h1>
          <p>{t("service.haqidaBody")}</p>
        </div>
        <div className="absolute bg-white w-[30%] h-full right-56 bottom-5 p-10 pl-16 rounded-lg special">
          <div className="flex items-center justify-evenly  w-[60%]">
            <img src="images/logo.png" alt="photo" className="w-[80px]" />
            <div className="flex flex-col justify-start">
              <h3 className="text-3xl">homekit.uz</h3>
              <span>O'zbekiston</span>
            </div>
          </div>
          <p className="pt-5 w-[90%] text-xl">{t("service.country")}</p>
          <p className="mt-5 w-[85%]">
            <FontAwesomeIcon icon={faLocationDot} size="xl" />{" "}
            {t("service.toshkent")}
          </p>
          <iframe
            width="90%"
            height="250"
            src="https://www.youtube.com/embed/tDetkOezsVk"
            title="HomeKit"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-lg mt-5"
          ></iframe>
        </div>
      </div>
      <div className="my-10 w-full">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwip"
        >
          <SwiperSlide>
            <div className="bg-[#B50A3F] w-full h-full flex flex-col items-center justify-center gap-7 p-8 text-white">
              <img
                src="images\11q.549c15abadecf3d977cc.png"
                className="w-1/2"
                alt="photo"
              />
              <h1 className="text-3xl md:text-5xl">
                {t("serviceSlider.iqlim")}
              </h1>
              <p>{t("serviceSlider.iqlimBody")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#B50A3F] w-full h-full flex flex-col items-center justify-center gap-7 p-8 text-white">
              <img
                src="images\w8.b73f007ee540b46cba9c.png"
                className="w-1/2"
                alt="photo"
              />
              <h1 className="text-3xl md:text-5xl">
                {t("serviceSlider.oqish")}
              </h1>
              <p>{t("serviceSlider.oqishBody")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#B50A3F] w-full h-full flex flex-col items-center justify-center gap-7 p-8 text-white">
              <img
                src="images\s44.abb85cf28e387add145f.png"
                className="w-1/2"
                alt="photo"
              />
              <h1 className="text-3xl md:text-5xl">
                {t("serviceSlider.video")}
              </h1>
              <p>{t("serviceSlider.videoBody")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#B50A3F] w-full h-full flex flex-col items-center justify-center gap-7 p-8 text-white">
              <img
                src="\images\s55.e110011aab5fee4bf4e3.png"
                className="w-1/2"
                alt="photo"
              />
              <h1 className="text-3xl md:text-5xl">
                {t("serviceSlider.media")}
              </h1>
              <p>{t("serviceSlider.mediaBody")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#B50A3F] w-full h-full flex flex-col items-center justify-center gap-7 p-8 text-white">
              <img
                src="images\s666.a576f591b4b019ab2869.png"
                className="w-1/2"
                alt="photo"
              />
              <h1 className="text-3xl md:text-5xl">
                {t("serviceSlider.xavfsizlik")}
              </h1>
              <p>{t("serviceSlider.xavfsizlikBody")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#B50A3F] w-full h-full flex flex-col items-center justify-center gap-7 p-8 text-white">
              <img
                src="\images\w7.d19e1e5af45b62e8766b.png"
                className="w-1/2"
                alt="photo"
              />
              <h1 className="text-3xl md:text-5xl">
                {t("serviceSlider.interkom")}
              </h1>
              <p>{t("serviceSlider.interkomBody")}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#B50A3F] w-full h-full flex flex-col items-center justify-center gap-7 p-8 text-white">
              <img
                src="\images\c33.d0a47ca326a8a467a5d7.png"
                className="w-1/2"
                alt="photo"
              />
              <h1 className="text-3xl md:text-5xl">
                {t("serviceSlider.parda")}
              </h1>
              <p className="w-2/3">{t("serviceSlider.pardaBody")}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="bg-white w-full flex flex-col items-center justify-center py-5">
        <h1>{t("serviceType.turlari")}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10">
          <div className="flex flex-col items-center justify-center gap-10">
            <a
              href="/"
              className="bg-slate-900 w-3/4 p-5 flex gap-5 rounded-xl"
            >
              <img
                src="\images\x1.6687653127d7f28897a6.png"
                alt="photo"
                className="w-7 h-7"
              />
              <p className="text-wrap">{t("serviceType.tur1")}</p>
            </a>
            <a
              href="/"
              className="bg-slate-900 w-3/4 p-5 flex gap-5 rounded-xl"
            >
              <img
                src="\images\x2.ab0a47740e12915c7b72.png"
                alt="photo"
                className="w-7 h-7"
              />
              <p className="text-wrap">{t("serviceType.tur2")}</p>
            </a>
            <a
              href="/"
              className="bg-slate-900 w-3/4 p-5 flex gap-5 rounded-xl"
            >
              <img
                src="\images\x5.9cf718cc0d3278122841.png"
                alt="photo"
                className="w-7 h-7"
              />
              <p className="text-wrap">{t("serviceType.tur3")}</p>
            </a>
          </div>
          <div className="flex flex-col items-center justify-center gap-10">
            <a
              href="/"
              className="bg-slate-900 w-3/4 p-5 flex gap-5 rounded-xl"
            >
              <img
                src="\images\data_image.png"
                alt="photo"
                className="w-7 h-7"
              />
              <p className="text-wrap">{t("serviceType.tur4")}</p>
            </a>
            <a
              href="/"
              className="bg-slate-900 w-3/4 p-5 flex gap-5 rounded-xl"
            >
              <img
                src="\images\x4.a9d7051534f6e2b269df.png"
                alt="photo"
                className="w-7 h-7"
              />
              <p className="text-wrap">{t("serviceType.tur5")}</p>
            </a>
            <a
              href="/"
              className="bg-slate-900 w-3/4 p-5 flex gap-5 rounded-xl"
            >
              <img
                src="\images\x6.0c54bbe96029d9a5e9a4.png"
                alt="photo"
                className="w-7 h-7"
              />
              <p className="text-wrap">{t("serviceType.tur6")}</p>
            </a>
          </div>
        </div>
      </div>
      <div className="block md:flex">
        <Afzalliklar
          p1={t("avfzalCard.p1")}
          p2={t("avfzalCard.p2")}
          p3={t("avfzalCard.p3")}
        />
        <Afzalliklar
          p1={t("avfzalCard.p1")}
          p2={t("avfzalCard.p2")}
          p3={t("avfzalCard.p3")}
        />
        <Afzalliklar
          p1={t("avfzalCard.p1")}
          p2={t("avfzalCard.p2")}
          p3={t("avfzalCard.p3")}
        />
      </div>
      <div className="bg-[#ffffff1a] w-full p-10 text-white flex flex-col items-center justify-center mt-5">
        <div className="">
          <p>{t("operator")}</p>
          <h1 className="text-4xl">{t("tel")}</h1>
        </div>
        <form
          id="contact"
          onSubmit={SendMessage}
          className="flex flex-col w-full md:w-[80%] gap-10 p-10 border rounded-[30px] mt-10"
        >
          <input
            required
            name="name"
            id="name"
            type="text"
            placeholder="Ism"
            className="w-full bg-[#ffffff00] p-1 border-b focus:outline-none"
          />
          <input
            required
            name="phone"
            id="phone"
            type="number"
            placeholder="Telefon raqam"
            className="w-full bg-[#ffffff00] p-1 border-b focus:outline-none"
          />
          <div className="w-full grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
            <FormBtns
              img={"/images/p1.e5f07d45f7f01971496975e833095a37.svg"}
              des={"Аудиосистемы"}
            />
            <FormBtns
              img={"/images/p2.586a2451850e1b73a7d314d7c8ccbba2.svg"}
              des={"Вентиляторы"}
            />
            <FormBtns
              img={"/images/p3.fadddc4dc40799e809399e92492eff91.svg"}
              des={"Выключатели "}
            />
            <FormBtns
              img={"/images/p4.e226b3029cb56d3eb559d0f4bc92e78e.svg"}
              des={"Датчики"}
            />
            <FormBtns
              img={"/images/p5.edcc7c03d27d7ec1ec7f218441c4fc9b.svg"}
              des={"Двери гаража"}
            />
            <FormBtns
              img={"/images/p6.d1357bdaad10e2e86f91ddc72cc2f469.svg"}
              des={"Дверные звонки "}
            />
            <FormBtns
              img={"/images/p7.985ea36bc737fa4497a1dea03cdce62d.svg"}
              des={"Замки "}
            />
            <FormBtns
              img={"/images/p8.31e1bfbeb00308ceea0367124c582704.svg"}
              des={"Камеры "}
            />
            <FormBtns
              img={"/images/p9.8810458de3604199b1834cf27aa32bc3.svg"}
              des={"Кондиционеры "}
            />
            <FormBtns
              img={"/images/p10.646359c7f876cf110337591830a0a4e3.svg"}
              des={"Маршрутизаторы "}
            />
            <FormBtns
              img={"/images/p11.249dddfdb7721e4c26a4bbc4e4c8146c.svg"}
              des={"Окна "}
            />
            <FormBtns
              img={"/images/p12.9991b7081c3989329a33b97e0b1f48fe.svg"}
              des={"Освещение "}
            />
            <FormBtns
              img={"/images/p13.67aa91e0566f03a0756d0f9ceb5f2451.svg"}
              des={"Охранные Системы "}
            />
            <FormBtns
              img={"/images/p14.7478dc12e7fbde582abcc186e4df6748.svg"}
              des={"Очистители воздуха "}
            />
            <FormBtns
              img={"/images/p15.e8628e0cf1bd02b4142f84b7a76de50d.svg"}
              des={"Ресиверы "}
            />
            <FormBtns
              img={"/images/p16.95beddcb645fbb2565af84503d770144.svg"}
              des={"Розетки "}
            />
            <FormBtns
              img={"/images/p17.5653407f0466a749dfd2d01d9f85c20d.svg"}
              des={"Сетевые мосты "}
            />
            <FormBtns
              img={"/images/p18.0aad9e3e1a5cfb5abe8b4d5a32934b6b.svg"}
              des={"Системы Полива "}
            />
            <FormBtns
              img={"/images/p19.625f9f311af10b2d6b490d2506342e66.svg"}
              des={"Смесители "}
            />
            <FormBtns
              img={"/images/p20.9832c5a7d63875aad7833f60e597b2f2.svg"}
              des={"Телевизоры "}
            />
            <FormBtns
              img={"/images/p21.c3ea7c808ad1028f20f457bfb31a46dd.svg"}
              des={"Термостаты "}
            />
            <FormBtns
              img={"/images/p22.b94ffbb5acca03e697d8eedd118c4039.svg"}
              des={"Увлажнители воздуха "}
            />
          </div>
          <button type="submit" className="bg-[#e1053f]">
            {t("yuborish")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Services;
