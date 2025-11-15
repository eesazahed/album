import type { NextPage } from "next";
import Link from "../components/Link";
import PageHead from "../components/PageHead";
import Title from "../components/Title";
import Gallery from "../components/Gallery";

const Home: NextPage = () => {
  return (
    <div className="mx-8 text-center">
      <PageHead title="eesa zahed" />

      <main className="p-4 md:p-16 leading-8 text-base md:text-xl min-h-screen">
        <Title text="my photos" />
        <p>
          all photographs are original works created by{" "}
          <Link text="eesa zahed" href="https://eesa.zahed.ca" />
        </p>
        <Gallery />
      </main>
    </div>
  );
};

export default Home;
