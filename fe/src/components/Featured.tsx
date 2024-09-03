"use client";
import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useHover } from "usehooks-ts";
import { MdOutlineShoppingCart, MdOutlineSearch } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { LiaSearchPlusSolid } from "react-icons/lia";

const data = [
  { title: "Dan pidjak", img: "./7.png", price: 750000 },
  { title: "Shireenii chiiden", img: "./chiiden.png", price: 750000 },
  { title: "Hurem", img: "./3.png", price: 750000 },
  { title: "Chihevch", img: "./Armchair.png", price: 750000 },
  { title: "hfhf", img: "./5.png", price: 750000 },
  { title: "Shireenii chiiden", img: "./chiiden.png", price: 750000 },
  { title: "Hurem", img: "./3.png", price: 750000 },
  { title: "Chihevch", img: "./Armchair.png", price: 750000 },
];
export function CarouselSpacing() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="max-w-screen-md m-auto flex flex-col items-center  mt-[129px] "
    >
      <h1 className="text-[#1A0B5B] text-[32px] font-extrabold mb-[39px]">
        Featured Products
      </h1>
      <CarouselContent className="-ml-1 ">
        {data.map((item, index) => {
          const Ref = React.useRef(null);
          const isHover = useHover(Ref);
          return (
            <CarouselItem key={index} className="pl-1 m-auto md:basis-1/5 ">
              <div
                className=" m-10 flex flex-col  justify-center items-center shadow-lg shadow-slate-400 overflow-hidden group"
                key={index}
                ref={Ref}
              >
                <div className="flex flex-col items-center relative w-full m-5">
                  <img className="h-[191px] w-[176px]  m-5 " src={item.img} />
                  <div
                    className={`absolute left-3 top-0 flex gap-[10px] text-[#1389FF] ${
                      isHover ? "-translate-y-2" : "-translate-y-12"
                    } duration-500 `}
                  >
                    <div className="hover:bg-[#EEEFFB] rounded-full p-2 hover:text-[#2F1AC4]">
                      <MdOutlineShoppingCart />
                    </div>
                    <div className="hover:bg-[#EEEFFB] rounded-full p-2 hover:text-[#2F1AC4]">
                      <FaRegHeart />
                    </div>
                    <div className="hover:bg-[#EEEFFB] rounded-full p-2 hover:text-[#2F1AC4]">
                      <LiaSearchPlusSolid />
                    </div>
                  </div>
                  <div className="flex flex-col items-center z-10 ">
                    <h1 className="text-[#FB2E86] mb-[12px] group-hover:text-white duration-500">
                      {item.title}
                    </h1>
                    <p className="group-hover:text-white">
                      ₮{item.price.toLocaleString()}
                    </p>
                  </div>
                  <div
                    className={`bg-[#08D15F] rounded w-[94px] text-[12px] flex items-center justify-center text-white h-[30px] absolute bottom-0 ${
                      isHover ? "-translate-y-24" : "translate-y-36"
                    } duration-500`}
                  >
                    See more...
                  </div>
                  <div
                    className={`w-full h-[100px] bg-blue-700 absolute bottom-0 ${
                      isHover ? "translate-y-5 " : "translate-y-36"
                    } duration-500`}
                  ></div>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
