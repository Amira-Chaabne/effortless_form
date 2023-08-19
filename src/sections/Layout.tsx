import InfoCarousel from "@/components/InfoCarousel/InfoCarousel";
import Forms from "@/sections/Forms/Forms";

export default function Layout() {
  return (
    <section className="p-4 h-screen grid grid-cols-4 gap-4 lg:container mx-auto">
      <InfoCarousel />
      <Forms />
    </section>
  );
}
