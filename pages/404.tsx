import type { NextPage } from "next";
import Link from "../components/Link";
import PageHead from "../components/PageHead";
import Title from "../components/Title";

const Custom404: NextPage = () => {
  return (
    <div className="mx-8 text-center">
      <PageHead title="404" />

      <main className="py-16 leading-8 text-xl grid min-h-screen place-items-center">
        <Title text="Page not found" emoji="&#128557;" />
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

export default Custom404;
