const data = [
  {
    img: "./free-delivery.png",
    title: "Free Delivery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    img: "./cashback.png",
    title: "Cashback",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    img: "./premium-quality.png",
    title: "Premium Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    img: "./24-hours-support.png",
    title: "24 hours support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];
export const Service = () => {
  return (
    <div className=" max-w-screen-2xl m-auto flex flex-col items-center mt-[120px] mb-[65px]">
      <h1 className="text-[#1A0B5B] text-[32px] font-extrabold mb-[39px] ">
        Үйлчилгээний тухай
      </h1>
      <div className="flex w-full items-center justify-center gap-24">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="h-[320px] w-[287px] py-[45px] px-[28px] flex flex-col items-center shadow-md shadow-slate-200"
            >
              <img className="h-[65px] w-[69px]" src={item.img} />
              <h1 className="text-[22px] text-[#151875] font-extrabold mt-[27px]">
                {item.title}
              </h1>
              <p className="text-[#1A0B5B4D] text-center mt-[15px]">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
