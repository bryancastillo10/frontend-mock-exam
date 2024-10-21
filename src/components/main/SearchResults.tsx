import { gameDataProps } from "../../api/useGetGames";
import Cards from "../reusables/Cards";

import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";

interface SearchResultsProps {
  results: gameDataProps[];
  toggleFavorite: (id: number) => void;
}

const SearchResults = ({ results, toggleFavorite }: SearchResultsProps) => {
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
      <div className="mt-2 px-4 flex justify-between">
        <p>Proveedores de juego</p>
        <div className="flex gap-8 items-center mr-4">
          <IoChevronBackOutline size="24" />
          <IoChevronForward size="24" />
        </div>
      </div>
    </>
  );
};

export default SearchResults;
