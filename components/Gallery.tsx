import { NextPage } from "next";
import { useEffect, useState } from "react";
import Image from "./Image";

interface ImageType {
  download_url: string;
}

const Gallery: NextPage = ({}) => {
  const [imageURLs, setImageURLs] = useState<string[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      const request = await fetch(
        "https://api.github.com/repos/eesazahed/album/contents/public/assets/images/uploads"
      );

      if (request.ok) {
        const data = await request.json();

        if (data) {
          const URLs = data.map((image: ImageType) => image.download_url);
          setImageURLs(URLs);
        }
      }

      setLoading(false);
    };

    fetchImages();
  }, []);

  return (
    <div className="my-16">
      {loading ? (
        <p>Loading...</p>
      ) : imageURLs && imageURLs.length > 0 ? (
        <div className="flex flex-wrap m-[-1rem]">
          {imageURLs.map((imageURL) => (
            <div className="p-4" key={imageURL}>
              <Image imageURL={imageURL} />
            </div>
          ))}
        </div>
      ) : (
        <p>No images could be loaded.</p>
      )}
    </div>
  );
};

export default Gallery;
