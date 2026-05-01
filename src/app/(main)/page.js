import Brands from "@/components/homepage/Brands";
import CareTips from "@/components/homepage/CareTips";
import Hero from "@/components/homepage/Hero";
import PopularProducts from "@/components/homepage/products/PopularProducts";
import HighlightsMarquee from "@/components/shared/HighlightsMarquee";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <HighlightsMarquee />
      <PopularProducts />
      <CareTips />
      <Brands />
    </div>
  );
}
