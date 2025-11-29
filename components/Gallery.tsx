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

      if (!request.ok) {
        setLoading(false);
        return;
      }

      const data = await request.json();

      const withDates = await Promise.all(
        data.map(async (item: any) => {
          const commitsReq = await fetch(
            `https://api.github.com/repos/eesazahed/photography/commits?path=${item.path}`
          );
          const commits = commitsReq.ok ? await commitsReq.json() : [];
          const latest = commits[0]?.commit?.author?.date || "1970-01-01";
          return { ...item, latest };
        })
      );

      const sorted = withDates.sort(
        (a, b) => new Date(b.latest).getTime() - new Date(a.latest).getTime()
      );

      const URLs = sorted.map((image: any) => image.download_url);
      setImageURLs(URLs);

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
              className="text-xl mt-16 bg-green-600 px-12 py-4 text-white rounded-2xl border-none duration-200 hover:bg-green-700"
            >
              show more
            </button>
          ) : (
            <p className="text-2xl mt-16">you&apos;ve reached the end!</p>
          )}
        </div>
      ) : (
        <p>no images could be loaded</p>
      )}
    </div>
  );
};

export default Gallery;
