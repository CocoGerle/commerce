import { Button } from "./ui/button";

export const CarouselCard = () => {
  return (
    <div className="bg-[#F2EFFF] w-full h-[764px] flex ">
      <div className="flex flex-1  flex-col justify-center pl-[375px] ">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <h1 className="text-[53px] font-extrabold mb-[24px]">
          Lorem ipsum dolor sit amet.
        </h1>
        <p className="mb-[27px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, iste!
        </p>
        <Button>See more...</Button>
      </div>
      <div className="flex flex-1  items-center ">
        <div className="relative w-[706px] h-[689px]  ">
          <img
            className="absolute w-[706px] h-[689px]"
            src="./pink-backround.png"
          />
          <img
            className="absolute top-12 left-5 w-[629px] h--[629px]"
            src="./Armchair.png"
          />
          <div>
            <img
              className="w-[136.56px] h-[138.49px] absolute right-0"
              src="./blue-backround.png"
            />
            <p className="absolute right-6 top-12 text-[35px] font-bold text-white">
              50%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
