"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselCard } from "./CarouselCard";
import { useState } from "react";

export function CarouselDemo() {
  const [active, setActive] = useState(false);
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div>
                <CarouselCard />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
type IndicatorProps = {
  active: boolean;
  onClick: () => void;
};

const Indicator = ({ active, onClick }) => {
  return (
    <div
      className={`w-6 h-6 rounded-md bg-red-400 ${active ? "bg-red-200" : ""}`}
      onClick={onClick}
    ></div>
  );
};
