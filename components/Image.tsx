import { NextPage } from "next";

interface Props {
  imageURL: string;
}

const Image: NextPage<Props> = ({ imageURL }) => {
  return (
    <a
      className="duration-200 hover:drop-shadow-[0_0_10px_#00ffd9cc]"
      rel="noreferrer"
      target="_blank"
      href={imageURL}
    >
      <img src={imageURL} className="max-h-96 rounded-3xl" />
    </a>
  );
};

export default Image;
