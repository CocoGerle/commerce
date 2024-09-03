import { CarouselDemo } from "@/components/Carousel";
import { CarouselSpacing } from "@/components/Featured";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <CarouselDemo />
      <CarouselSpacing />
    </div>
  );
}
