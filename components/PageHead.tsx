import { NextPage } from "next";
import Head from "next/head";

interface Props {
  title: string;
}

const PageHead: NextPage<Props> = ({ title }) => {
  return (
    <Head>
      <title>Photo Album | {title}</title>
      <meta name="description" content="Photo Album. Made by Eesa Zahed" />
      <link rel="icon" href="/assets/images/favicon.ico" />
    </Head>
  );
};

export default PageHead;
