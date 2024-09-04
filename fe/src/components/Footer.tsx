"use client";

import { Facebook } from "./assets/icons/Facebook";
import { Instagram } from "./assets/icons/Instagram";
import { Twitter } from "./assets/icons/Twitter";

// import { Instagram } from "@/assets/Instagram";

// import { Twitter } from "@/assets/Twitter";

export const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-[#EEEFFB] h-[480px] flex justify-center">
        <div className="flex w-[1200px] items-center justify-center">
          <div className="flex-[2]  flex flex-col gap-[24px]">
            <div className="font-extrabold text-[38px]">eCommerce</div>
            <div className="flex bg-white h-[44px] w-[377px] rounded-[12px]">
              <input
                className="text-[#8A8FB9] pl-[20px] w-[242px] rounded"
                placeholder="Имэйл хаяг"
              ></input>
              <div className="bg-[#FB2E86] w-[135px] text-[#EEEFFB] font-medium rounded flex justify-center items-center">
                Бүртгүүлэх
              </div>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="text-[#8A8FB9]">Хаяг</div>
              <div className="text-[#8A8FB9] w-[488px]">
                Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот,
                Гурван гол - 401 тоот
              </div>
            </div>
          </div>
          <div className="flex-[1] flex flex-col gap-[36px]">
            <div className="font-extrabold text-[22px]">Ангилал</div>
            <div className="flex flex-col gap-[20px] text-[#8A8FB9]">
              <div>Хувцас</div>
              <div>Камер, хэрэгсэл</div>
              <div>Ухаалаг утас, таблет</div>
              <div>Чихэвч</div>
              <div>Гэр ахуйн бараа</div>
            </div>
          </div>
          <div className="flex-[1] flex flex-col gap-[36px]">
            <div className="font-extrabold text-[22px]">Бусад</div>
            <div className="flex flex-col gap-[20px] text-[#8A8FB9]">
              <div>Бидний тухай</div>
              <div>Холбоо барих</div>
              <div>Түгээмэл асуулт хариулт</div>
              <div className="text-[#EEEFFB]"> -</div>
              <div className="text-[#EEEFFB]"> -</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-[#E7E4F8] h-[53px] justify-center items-center">
        <div className="flex w-[1200px] pl-[20px] pr-[20px] justify-between">
          <div className="text-[#9DA0AE] font-semibold">©ecommerce</div>
          <div className="flex gap-[12px]">
            <div className="w-[20px] h-[20px] bg-[#151875] rounded-[50%] flex justify-center items-center">
              <Facebook />
            </div>
            <div className="w-[20px] h-[20px] bg-[#151875] rounded-[50%] flex justify-center items-center">
              <Instagram />
            </div>
            <div className="w-[20px] h-[20px] bg-[#151875] rounded-[50%] flex justify-center items-center">
              <Twitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
