import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const MainPage = () => {
  return (
    <>
      <div>
        <div className="overflow-hidden w-full">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-slide1 bg-center bg-no-repeat w-full h-full text-white text-start">
                <div className="w-full h-full  backdrop-brightness-50 pt-24 pl-56 pr-[430px]">
                  <h1 className="text-6xl">
                    HomeKit texnalogilaridan foydalanish qulayligi:
                  </h1>
                  <p className="my-10 text-2xl">
                    Agar siz texnologiyani yaxshi bilmaydigan odam bo'lsangiz
                    ham, qo'llanmalarni kuzatib, bu narsalar qanday ishlashini
                    tushunishingiz mumkin. Aqlli uy texnologiyalari yordamida
                    siz uyda bo'lmasangiz ham, 24/7 uy bilan bog'langaningizni
                    his qilishingiz mumkin.
                  </p>
                  <a href="#contact" className="bg-[#B50A3F] rounded-3xl px-3 py-1">
                    Bog'lanish
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slide2 bg-center bg-no-repeat bg-cover w-full h-full text-white text-start">
                <div className="w-full h-full  backdrop-brightness-50 pt-24 pl-56 pr-[630px]">
                  <h1 className="text-6xl">
                    Eshiklarni qulflash va ochish HomeKit bilan osonroq.
                  </h1>
                  <p className="my-10 text-2xl">
                    Xavfsiz uylar har qanday uyning eng muhim jihati
                    hisoblanadi. Uyingiz uchun qancha qulfdan foydalansangiz
                    ham, uyingizga o'g'rilar va o'g'rilar kirishi xavfi doimo
                    mavjud. HomeKit aqlli texnologiyalari bilan uyingizni aqlli
                    himoya qiling.
                  </p>
                  <a href="#contact" className="bg-[#B50A3F] mt-10 rounded-3xl px-3 py-1">
                    Bog'lanish
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slide3 bg-center bg-no-repeat bg-cover w-full h-full text-white text-start">
                <div className="w-full h-full  backdrop-brightness-50 pt-24 pl-56 pr-[630px]">
                  <h1 className="text-6xl">
                    HomeKit bilan uyingizni boshqaring:
                  </h1>
                  <p className="my-10 text-2xl">
                    Agar siz isitish tizimining haroratini oshirmoqchi
                    bo'lsangiz yoki konditsioneringizdagi haroratni
                    pasaytirmoqchi bo'lsangiz yoki uyingizdan uzoqda suv
                    isitgichni yoqmoqchi bo'lsangiz yoki yotoqda yotganingizda
                    hamma narsani o'chirmoqchi bo'lsangiz, ularni HomeKit orqali
                    mobil telefoningizga bir marta bosish bilan bajaring.
                  </p>
                  <a href="#contact" className="bg-[#B50A3F] mt-10 rounded-3xl px-3 py-1">
                    Bog'lanish
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slide4 bg-center bg-no-repeat bg-cover w-full h-full text-white text-start">
                <div className="w-full h-full backdrop-brightness-50 pt-24 pl-56 pr-[630px]">
                  <h1 className="text-6xl">HomeKit bilan energiyani tejash:</h1>
                  <p className="my-10 text-2xl">
                    Aqlli uy mahsulotlari bilan siz energiya sarfini isrof
                    qilmasligiga ishonch hosil qilishingiz mumkin. Mashinalar,
                    qurilmalar va jihozlar aqlli uy mahsulotiga ega bo'lganda,
                    ulardan foydalanishdan so'ng darhol boshqarilishi va
                    o'chirilishi mumkin.
                  </p>
                  <a href="#contact" className="bg-[#B50A3F] mt-10 rounded-3xl px-3 py-1">
                    Bog'lanish
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MainPage;
