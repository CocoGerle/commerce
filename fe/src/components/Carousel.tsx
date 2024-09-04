"use client";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { CarouselCard } from "./CarouselCard";

export function CarouselDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="relative">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <CarouselItem key={index}>
              <div>
                <CarouselCard />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-12 left-2/4 transform -translate-x-2/4 flex gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rotate-45 ${
              activeIndex === index ? "bg-[#FB2E86]" : "border border-[#FB2E86]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
