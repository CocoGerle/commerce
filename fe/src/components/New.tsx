"use client";
import * as React from "react";
import { useRef, useState } from "react";
import { useHover } from "usehooks-ts";
import { MdOutlineShoppingCart, MdOutlineSearch } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { LiaSearchPlusSolid } from "react-icons/lia";

const data = [
  {
    img: ["./aa.png", "./Armchair.png", "./chiiden.png"],
    name: "Canon camera",
    colors: ["#DE9034", "#EC42A2", "#8568FF"],
    price: 750000,
  },
  {
    img: ["./aa.png", "./Armchair.png", "./chiiden.png"],
    name: "Canon aaera",
    colors: ["#DE9034", "#EC42A2", "#8568FF"],
    price: 750000,
  },
  {
    img: ["./aa.png", "./Armchair.png", "./chiiden.png"],
    name: "Canon aaera",
    colors: ["#DE9034", "#EC42A2", "#8568FF"],
    price: 750000,
  },
  {
    img: ["./aa.png", "./Armchair.png", "./chiiden.png"],
    name: "Canon aaera",
    colors: ["#DE9034", "#EC42A2", "#8568FF"],
    price: 750000,
  },
  {
    img: ["./aa.png", "./Armchair.png", "./chiiden.png"],
    name: "Canon aaera",
    colors: ["#DE9034", "#EC42A2", "#8568FF"],
    price: 750000,
  },
  {
    img: ["./aa.png", "./Armchair.png", "./chiiden.png"],
    name: "Canon aaera",
    colors: ["#DE9034", "#EC42A2", "#8568FF"],
    price: 750000,
  },
  {
    img: ["./aa.png", "./Armchair.png", "./chiiden.png"],
    name: "Canon aaera",
    colors: ["#DE9034", "#EC42A2", "#8568FF"],
    price: 750000,
  },
  {
    img: ["./aa.png", "./Armchair.png", "./chiiden.png"],
    name: "Canon aaera",
    colors: ["#DE9034", "#EC42A2", "#8568FF"],
    price: 750000,
  },
];
export const New = () => {
  return (
    <div className="max-w-screen-2xl m-auto flex flex-col items-center mt-[71px] ">
      <h1 className="text-[#1A0B5B] text-[32px] font-extrabold mb-[39px]">
        New Products
      </h1>
      <div className="grid grid-cols-4 gap-7 w-full ">
        {data.map((item, index) => {
          const Ref = useRef(null);
          const isHover = useHover(Ref);
          const [selectedColorIndex, setSelectedColorIndex] = useState(0);
          return (
            <div
              key={index}
              className="h-[363px] w-[270px] flex flex-col items-center ml-16 text-[#151875] overflow-hidden"
              ref={Ref}
            >
              <div
                className={`bg-[#F6F7FB] w-full h-[280px] relative ${
                  isHover ? "bg-[#EBF4F3]" : ""
                }  `}
              >
                <img
                  className="absolute top-9 right-10 w-[70%] h-[70%] object-cover"
                  src={item.img[selectedColorIndex]}
                />
                <div
                  className={`absolute left-1 top-40  flex flex-col gap-[4px] text-[#151875] ${
                    isHover ? "translate-x-2" : "-translate-x-20"
                  } duration-500 `}
                >
                  <div className="hover:bg-white rounded-full p-2 hover:text-[#2F1AC4]">
                    <MdOutlineShoppingCart />
                  </div>
                  <div className="hover:bg-white rounded-full p-2 hover:text-[#2F1AC4]">
                    <FaRegHeart />
                  </div>
                  <div className="hover:bg-white rounded-full p-2 hover:text-[#2F1AC4]">
                    <LiaSearchPlusSolid />
                  </div>
                </div>
              </div>
              <p className="text-[18px] font-bold mb-[8px]">{item.name}</p>
              <div className="flex gap-1">
                {item.colors.map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className={`w-2 h-2 rounded-full cursor-pointer ${
                      selectedColorIndex === colorIndex
                        ? ` ring-1 ring-inherit`
                        : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColorIndex(colorIndex)}
                  ></div>
                ))}
              </div>
              <p className="text-[21px] mt-[15px]">
                ₮{item.price.toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
