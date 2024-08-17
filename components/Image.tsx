import { NextPage } from "next";

interface Props {
  imageURL: string;
}

const Image: NextPage<Props> = ({ imageURL }) => {
  return (
    <a rel="noreferrer" target="_blank" href={imageURL}>
      <img
        src={imageURL}
        className="p-2 h-96 w-96 object-cover rounded-[5rem] hover:rounded-[2rem] duration-200 hover:scale-105 drop-shadow-[5px_5px_5px_gray] dark:drop-shadow-none"
      />
    </a>
  );
};

export default Image;
