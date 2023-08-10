import InfoCarousel from "@/components/InfoCarousel/InfoCarousel";
import SignUpForm from "@/components/SignUpForm/SignUpForm";

export default function SignUp() {
  return (
    <section className="p-4 grid grid-cols-4 gap-4">
      <InfoCarousel />
      <SignUpForm />
    </section>
  );
}
