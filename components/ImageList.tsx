import { NextPage } from "next";
import Image from "./Image";

interface Props {
  imageURLs: string[];
}

const ImageList: NextPage<Props> = ({ imageURLs }) => {
  return (
    <>
      {imageURLs.map((imageURL) => (
        <div className="p-4" key={imageURL}>
          <Image imageURL={imageURL} />
        </div>
      ))}
    </>
  );
};

export default ImageList;
