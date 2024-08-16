import { NextPage } from "next";
import Gradient from "./Gradient";

interface Props {
  text: string;
}

const Title: NextPage<Props> = ({ text }) => {
  return (
    <h1 className="my-8 text-6xl md:text-8xl font-bold">
      <Gradient text={text} />
    </h1>
  );
};

export default Title;
