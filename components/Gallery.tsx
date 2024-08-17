import { NextPage } from "next";
import { useEffect, useState } from "react";
import ImageList from "./ImageList";

interface ImageType {
  download_url: string;
}

const Gallery: NextPage = ({}) => {
  const [imageURLs, setImageURLs] = useState<string[]>();
  const [loading, setLoading] = useState<boolean>(true);

  const imageCount = 8;
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
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center">
            <ImageList imageURLs={imageURLs.slice(0, visibleCount)} />
          </div>
          {visibleCount < imageURLs.length ? (
            <button
              onClick={handleShowMore}
              className="text-2xl mt-16 bg-blue-500 px-8 py-4 text-white rounded-3xl border-none duration-200 hover:bg-blue-600"
            >
              Show More
            </button>
          ) : (
            <p className="text-2xl mt-16">You&apos;ve reached the bottom!</p>
          )}
        </div>
      ) : (
        <p>No images could be loaded.</p>
      )}
    </div>
  );
};

export default Gallery;
