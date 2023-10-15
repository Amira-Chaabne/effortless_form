import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import road from "../../../public/assets/images/calm_peaceful_road.jpg";
import stars from "../../../public/assets/images/stars_cold_night.jpg";
import wave from "../../../public/assets/images/wave_in_rocks.jpg";
import { useTranslation } from "next-i18next";

export default function InfoCarousel() {
  const { t } = useTranslation();

  const images = [
    {
      src: road,
      alt: "calm_peaceful_road",
      title: t("slides.road.title"),
      description: t("slides.road.desc"),
    },
    {
      src: stars,
      alt: "stars_cols_night",
      title: t("slides.stars.title"),
      description: t("slides.stars.desc"),
    },
    {
      src: wave,
      alt: "wave_in_rocks",
      title: t("slides.wave.title"),
      description: t("slides.wave.desc"),
    },
  ];

  const slides = images.map((image) => (
    <Carousel.Slide key={image.alt} className="relative w-full h-[96vh]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        objectFit="cover"
        className="border rounded-md"
      />
      <div className="absolute bottom-0 left-0 right-0 py-12 px-4 text-white">
        <h2 className="text-xl font-bold">{image.title}</h2>
        <p className="text-sm">{image.description}</p>
      </div>
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
