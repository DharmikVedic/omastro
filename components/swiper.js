import { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabase } from "./supabase/supaclient";

export default function SwiperComponent(props) {
  const router = useRouter();

  const [state1, setstate1] = useState([]);

  const fetchAstrologer = async () => {
    const { data, error } = await supabase
      .from("astrologerProfile")
      .select("*");
    return data;
  };

  useEffect(async () => {
    const d = await fetchAstrologer();
    setstate1(d);
  }, []);

  useEffect(async () => {
    const mySubscription = supabase
      .from("astrologerProfile")
      .on("*", (payload) => {
        // router.reload();
        alert("Change received!", payload);
        if (payload.new) {
          const data = state1.slice().map((item) => {
            return item.id === payload.new.id ? payload.new : item;
          });
          setstate1(data);
        }
      })
      .subscribe();
    return () => supabase.removeSubscription(mySubscription);
  }, [state1]);

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={30}
      slidesPerView={1}
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
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
    >
      {state1.map((item, i) => (
        <SwiperSlide key={i} className="w-full py-5">
          <div
            onClick={() =>
              router.push(`/talktoastrologer/${item.astrologerId}`)
            }
            key={i}
            className="flex shadow-md group shadow-red-300/40  relative w-full  flex-col hover:shadow-xl cursor-pointer hover:shadow-rose-200/40 gap-6 pt-10 pb-8 px-7 border border-rose-200 bg-white rounded-xl"
          >
            {item.isActive && (
              <>
                <span className="animate-ping absolute  bg-green-500 right-7  w-4 h-4 rounded-full top-7"></span>
                <span className="absolute inline-flex right-7 top-7 rounded-full h-3.5 w-3.5 bg-green-500"></span>
              </>
            )}
            <div className="flex  gap-6 flex-col items-center">
              <div className="relative ring-8 ring-red-50  group-hover:ring-red-100 group-hover:shadow-xl group-hover:shadow-red-300/70 rounded-full w-[100px] h-[100px]">
                <img
                  src="/imgs/avatar-2.jpeg"
                  className=" w-full h-full     rounded-full"
                  alt="user"
                />
              </div>
              <h5 className="capitalize">{item.name}</h5>
            </div>
            <div className="capitalize flex justify-center gap-2 border-t border-red-200 pt-6 text-center">
              {item.expert
                .toString()
                .split(",")
                .slice(0, 1)
                .map((item, i) => (
                  <span
                    key={i}
                    className="px-3  py-1 text-sm bg-red-400 text-white rounded-md"
                  >
                    {item}
                  </span>
                ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
