import Layout from "@/sections/Layout";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

const getStaticProps = makeStaticProps(["common", "footer"]);
export { getStaticPaths, getStaticProps };

export default function Home() {
  return (
    <div className="bg-gray-200">
      <Layout />
    </div>
  );
}
