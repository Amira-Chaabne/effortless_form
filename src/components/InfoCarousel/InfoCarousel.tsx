import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import road from "../../../public/assets/images/calm_peaceful_road.jpg";
import stars from "../../../public/assets/images/stars_cold_night.jpg";
import wave from "../../../public/assets/images/wave_in_rocks.jpg";

const images = [
  {
    src: road,
    alt: "calm_peaceful_road",
    title: "Carbon Emissions Surge",
    description:
      "Each year, human activities release over 40 billion tons of carbon dioxide into the atmosphere, exacerbating global warming and causing extreme weather events.",
  },
  {
    src: stars,
    alt: "stars_cols_night",
    title: "Biodiversity Loss Accelerates",
    description:
      "Due to habitat destruction and climate change, species are going extinct at a rate 1,000 times faster than the natural background rate, jeopardizing ecosystems and food security.",
  },
  {
    src: wave,
    alt: "wave_in_rocks",
    title: "Melting Polar Ice",
    description:
      "Polar ice is disappearing at an alarming rate, with the Arctic losing 12.8% of its ice cover each decade. This contributes to rising sea levels and threatens coastal communities.",
  },
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
