import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TextTruncate from "react-text-truncate"; // recommend

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <div>
        <div className="overflow-hidden w-full">
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            loop:true
          >
            <SwiperSlide>
              <div className="bg-slide1 bg-center bg-no-repeat w-full h-full text-white text-start">
                <div className="w-full h-full backdrop-brightness-50 md:pt-24 md:pl-56 md:pr-[430px] p-10">
                  <h1 className="text-4xl md:text-6xl">
                    {t("mainSlider1header")}
                  </h1>
                  <div className="my-10 text-lg md:text-2xl">
                    <TextTruncate
                      line={3}
                      element="p"
                      truncateText="…"
                      text={t("mainSlider1body")}
                    />
                  </div>
                  <a
                    href="#contact"
                    className="bg-[#B50A3F] rounded-3xl px-5 py-3"
                  >
                    {t("boglanish")}
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slide2 bg-center bg-no-repeat bg-cover w-full h-full text-white text-start">
                <div className="w-full h-full backdrop-brightness-50 md:pt-24 md:pl-56 md:pr-[630px] p-10">
                  <h1 className="text-4xl md:text-6xl">
                    {t("mainSlider2header")}
                  </h1>
                  <div className="my-10 text-lg md:text-2xl">
                    <TextTruncate
                      line={3}
                      element="p"
                      truncateText="…"
                      text={t("mainSlider2body")}
                    />
                  </div>
                  <a
                    href="#contact"
                    className="bg-[#B50A3F] mt-10 rounded-3xl px-5 py-3"
                  >
                    {t("boglanish")}
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slide3 bg-center bg-no-repeat bg-cover w-full h-full text-white text-start">
                <div className="w-full h-full  backdrop-brightness-50 md:pt-24 md:pl-56 md:pr-[630px] p-10">
                  <h1 className="text-4xl md:text-6xl">
                    {t("mainSlider3header")}
                  </h1>
                  <div className="my-10 text-lg md:text-2xl">
                    <TextTruncate
                      line={3}
                      element="p"
                      truncateText="…"
                      text={t("mainSlider3body")}
                    />
                  </div>
                  <a
                    href="#contact"
                    className="bg-[#B50A3F] mt-10 rounded-3xl px-5 py-3"
                  >
                    {t("boglanish")}
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-slide4 bg-center bg-no-repeat bg-cover w-full h-full text-white text-start">
                <div className="w-full h-full backdrop-brightness-50 md:pt-24 md:pl-56 md:pr-[630px] p-10">
                  <h1 className="text-4xl md:text-6xl">
                    {t("mainSlider4header")}
                  </h1>
                  <div className="my-10 text-lg md:text-2xl">
                    <TextTruncate
                      line={3}
                      element="p"
                      truncateText="…"
                      text={t("mainSlider4body")}
                    />
                  </div>
                  <a
                    href="#contact"
                    className="bg-[#B50A3F] mt-10 rounded-3xl px-5 py-3"
                  >
                    {t("boglanish")}
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

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// // import required modules
// import { Pagination, Navigation, Autoplay } from "swiper/modules";
// import { useTranslation } from "react-i18next";

// const MainPage = () => {
//   const { t } = useTranslation();

//   return (
//     <div className="overflow-hidden w-full">
//       <Swiper
//         pagination={{ type: "fraction" }}
//         navigation
//         modules={[Pagination, Navigation, Autoplay]}
//         className="mySwiper"
//         autoplay={{ delay: 7000, disableOnInteraction: false }}
//         loop={true}
//       >
//         {/* Slide 1 */}
//         <SwiperSlide>
//           <div className="bg-slide1 bg-center bg-no-repeat bg-cover w-full h-screen text-white">
//             <div className="w-full h-full backdrop-brightness-50 flex flex-col justify-center items-start p-6 md:pl-24 lg:pl-56">
//               <h1 className=" lg:text-6xl">
//                 {t("mainSlider1header")}
//               </h1>
//               <p className="mt-6 text-lg md:text-xl lg:text-2xl">
//                 {t("mainSlider1body")}
//               </p>
//               <a
//                 href="#contact"
//                 className="mt-6 bg-[#B50A3F] rounded-3xl px-5 py-3 text-lg"
//               >
//                 {t("boglanish")}
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Slide 2 */}
//         <SwiperSlide>
//           <div className="bg-slide2 bg-center bg-no-repeat bg-cover w-full h-screen text-white">
//             <div className="w-full h-full backdrop-brightness-50 flex flex-col justify-center items-start p-6 md:pl-24 lg:pl-56">
//               <h1 className="text-3xl md:text-5xl lg:text-6xl">
//                 {t("mainSlider2header")}
//               </h1>
//               <p className="mt-6 text-lg md:text-xl lg:text-2xl">
//                 {t("mainSlider2body")}
//               </p>
//               <a
//                 href="#contact"
//                 className="mt-6 bg-[#B50A3F] rounded-3xl px-5 py-3 text-lg"
//               >
//                 {t("boglanish")}
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Slide 3 */}
//         <SwiperSlide>
//           <div className="bg-slide3 bg-center bg-no-repeat bg-cover w-full h-screen text-white">
//             <div className="w-full h-full backdrop-brightness-50 flex flex-col justify-center items-start p-6 md:pl-24 lg:pl-56">
//               <h1 className="text-3xl md:text-5xl lg:text-6xl">
//                 {t("mainSlider3header")}
//               </h1>
//               <p className="mt-6 text-lg md:text-xl lg:text-2xl">
//                 {t("mainSlider3body")}
//               </p>
//               <a
//                 href="#contact"
//                 className="mt-6 bg-[#B50A3F] rounded-3xl px-5 py-3 text-lg"
//               >
//                 {t("boglanish")}
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Slide 4 */}
//         <SwiperSlide>
//           <div className="bg-slide4 bg-center bg-no-repeat bg-cover w-full h-screen text-white">
//             <div className="w-full h-full backdrop-brightness-50 flex flex-col justify-center items-start p-6 md:pl-24 lg:pl-56">
//               <h1 className="text-3xl md:text-5xl lg:text-6xl">
//                 {t("mainSlider4header")}
//               </h1>
//               <p className="mt-6 text-lg md:text-xl lg:text-2xl">
//                 {t("mainSlider4body")}
//               </p>
//               <a
//                 href="#contact"
//                 className="mt-6 bg-[#B50A3F] rounded-3xl px-5 py-3 text-lg"
//               >
//                 {t("boglanish")}
//               </a>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default MainPage;
