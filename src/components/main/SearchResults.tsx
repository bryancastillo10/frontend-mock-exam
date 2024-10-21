import { useState } from "react";
import { bannerDataProps } from "../../api/useGetBanner";
import { gameDataProps } from "../../api/useGetGames";
import Cards from "../reusables/Cards";
import BigSpinner from "../reusables/BigSpinner";

import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

interface SearchResultsProps {
  bannerLoading: boolean;
  results: gameDataProps[];
  banners: bannerDataProps[];
  toggleFavorite: (id: number) => void;
}

const SearchResults = ({
  results,
  toggleFavorite,
  banners,
  bannerLoading,
}: SearchResultsProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage = 3;

  const visibleBanners = banners.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const handleNext = () => {
    if (currentIndex + itemsPerPage < banners.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  if (bannerLoading) {
    return (
      <div className="flex justify-center items-center">
        <BigSpinner />
      </div>
    );
  }

  return (
    <>
      <section className="grid grid-cols-3 gap-y-3 px-8 xl:px-2 justify-center">
        {results.map((res) => (
          <Cards
            key={res.id}
            gameId={res.id}
            hasFavorited={res.hasFavorited}
            image={res.img}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </section>
      <section>
        <div className="mt-8 px-4 flex justify-between items-center">
          <p>Proveedores de juego</p>
          <div className="flex gap-8 items-center">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`${
                currentIndex === 0 ? "opacity-50" : ""
              } focus:outline-none`}
            >
              <IoChevronBackOutline size="24" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + itemsPerPage >= banners.length}
              className={`${
                currentIndex + itemsPerPage >= banners.length
                  ? "opacity-50"
                  : ""
              } focus:outline-none`}
            >
              <IoChevronForward size="24" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-10 gap-4">
          {visibleBanners.map((banner) => (
            <article key={banner.id} className="text-center">
              <div className="bg-secondary/20 h-14 flex items-center p-4">
                <img src={banner.img} alt={banner.name} className="w-full" />
              </div>
              <div className="flex flex-col items-center bg-light p-2">
                <h1 className="text-base text-[#444444]">{banner.name}</h1>
                <p className="text-sm text-secondary">
                  {banner.quantity} juegos
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default SearchResults;
