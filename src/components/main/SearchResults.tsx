import { gameDataProps } from "../../api/useGetGames";
import Cards from "../reusables/Cards";

interface SearchResultsProps {
  results: gameDataProps[];
  toggleFavorite: (id: number) => void;
}

const SearchResults = ({ results, toggleFavorite }: SearchResultsProps) => {
  return (
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
  );
};

export default SearchResults;
