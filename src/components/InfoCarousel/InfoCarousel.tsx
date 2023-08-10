import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1560759226-14da22a643ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=800",
  "https://images.unsplash.com/photo-1551509134-eb7c5ea9ad2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1529651121800-01d45d421ec9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
];

export default function InfoCarousel() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image
        src={image}
        alt={image}
        height={650}
        width={600}
      />
      {/* <Image
        src={image}
        alt={image}
        height={650}
        width={600}
        className="rounded-full"
        objectFit="cover"
        placeholder="blur"
      /> */}
 
    </Carousel.Slide>
  ));

  return (
    <div className="col-span-1 bg-white">
      <Carousel
        mx="auto"
        withIndicators
        withControls={false}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {slides}
      </Carousel>
    </div>
  );
}
