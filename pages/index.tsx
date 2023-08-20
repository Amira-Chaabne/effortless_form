import Layout from "@/sections/Layout";
import withCustomTranslations from "../utils/withCustomTranslations";

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Layout />
    </div>
  );
}

export const getStaticProps = withCustomTranslations();
