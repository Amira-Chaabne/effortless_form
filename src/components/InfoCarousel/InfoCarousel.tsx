import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import road from "../../../public/assets/images/calm_peaceful_road.jpg";
import stars from "../../../public/assets/images/stars_cold_night.jpg";
import wave from "../../../public/assets/images/wave_in_rocks.jpg";

const images = [
  { src: road, alt: "calm_peaceful_road" },
  { src: stars, alt: "stars_cols_night" },
  { src: wave, alt: "wave_in_rocks" },
];

export default function InfoCarousel() {
  const slides = images.map((image) => (
    <Carousel.Slide key={image.alt} className="relative w-full h-[96vh]">
      <Image
        src={image.src}
        alt={image.alt}
        layout="fill"
        objectFit="cover"
        className="border rounded-md"
      />
    </Carousel.Slide>
  ));

  return (
    <div className="hidden md:block col-span-1 bg-white rounded-md">
      <Carousel mx="auto" withIndicators withControls={false} loop>
        {slides}
      </Carousel>
    </div>
  );
}
