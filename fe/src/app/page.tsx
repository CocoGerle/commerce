import { CarouselDemo } from "@/components/Carousel";
import { CarouselSpacing } from "@/components/Featured";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { New } from "@/components/New";

export default function Home() {
  return (
    <div>
      <Header />
      <CarouselDemo />
      <CarouselSpacing />
      <New />
      <Footer />
    </div>
  );
}
