import type { NextPage } from "next";
import Link from "../components/Link";
import PageHead from "../components/PageHead";
import Title from "../components/Title";
import Gallery from "../components/Gallery";

const Home: NextPage = () => {
  return (
    <div className="mx-8 text-center">
      <PageHead title="Home" />

      <main className="p-16 leading-8 text-xl min-h-screen">
        <Title text="My Photos" emoji="&#128247;" />
        <p>
          All photographs are original works created by{" "}
          <Link text="Eesa Zahed" href="https://eesa.zahed.ca" />.
        </p>
        <Gallery />
      </main>

      <footer className="py-16">
        <p>
          Designed and developed by{" "}
          <Link text="Eesa Zahed" href="https://eesa.zahed.ca" />
        </p>
      </footer>
    </div>
  );
};

export default Home;
