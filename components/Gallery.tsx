import { NextPage } from "next";
import { useEffect, useState } from "react";
import Image from "./Image";
import ImageList from "./ImageList";

interface ImageType {
  download_url: string;
}

const Gallery: NextPage = ({}) => {
  const [imageURLs, setImageURLs] = useState<string[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const imageCount = 10;
  const [visibleCount, setVisibleCount] = useState<number>(imageCount);

  useEffect(() => {
    const fetchImages = async () => {
      const request = await fetch(
        "https://api.github.com/repos/eesazahed/photography/contents/"
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

  const handleShowMore = () =>
    setVisibleCount((prevCount) => prevCount + imageCount);

  return (
    <div className="my-16">
      {loading ? (
        <p>Loading...</p>
      ) : imageURLs && imageURLs.length > 0 ? (
        <div className="flex flex-col">
          <div className="flex flex-wrap justify-center">
            <ImageList imageURLs={imageURLs.slice(0, visibleCount)} />
          </div>
          {visibleCount < imageURLs.length && (
            <button
              onClick={handleShowMore}
              className="text-2xl mt-32 border-none hover:text-[#09c489]"
            >
              Show More
            </button>
          )}
        </div>
      ) : (
        <p>No images could be loaded.</p>
      )}
    </div>
  );
};

export default Gallery;
