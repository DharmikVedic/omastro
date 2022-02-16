import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/router";

export default function SwiperComponent(props) {
  const router = useRouter();
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={4}
      navigation
      draggable
      pagination={{ clickable: true }}
      className="max-w-7xl mx-auto w-full "
      breakpoints={{
        450: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      {props.data.map((item, i) => (
        <SwiperSlide className="w-full py-5">
          <div
            onClick={() =>
              router.push(
                `/talktoastrologer/${item.name
                  .split(" ")
                  .join("")
                  .toLowerCase()}`
              )
            }
            key={i}
            className="flex shadow-md shadow-red-300/40  relative w-full  flex-col hover:shadow-xl cursor-pointer hover:shadow-rose-200/40 gap-6 pt-10 pb-8 px-7 border border-rose-200 bg-white rounded-xl"
          >
            <span className="animate-ping absolute  bg-green-500 right-7  w-4 h-4 rounded-full top-7"></span>
            <span className="absolute inline-flex right-7 top-7 rounded-full h-3.5 w-3.5 bg-green-500"></span>
            <div className="flex  gap-6 flex-col items-center">
              <div className="relative bg-red-100 w-[100px] h-[100px]">
                <img
                  src="/imgs/avatar-2.jpeg"
                  className=" w-full h-full     rounded-full"
                  alt="user"
                />
              </div>
              <h5 className="capitalize">{item.name}</h5>
            </div>
            <div className="capitalize border-t border-red-200 pt-6 text-center">
              {item.expert.toString().split(",")[0]}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
