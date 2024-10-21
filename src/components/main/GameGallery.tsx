import { gameDataProps } from "../../api/useGetGames";
import BigSpinner from "../reusables/BigSpinner";
import Cards from "../reusables/Cards";

interface GameGalleryProps {
  loading: boolean;
  games: gameDataProps[];
  toggleFavorite: (id: number) => void;
}

const GameGallery = ({ loading, games, toggleFavorite }: GameGalleryProps) => {
  if (loading) {
    return (
      <div className="flex justify-center">
        <BigSpinner />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-y-3 px-8 xl:px-2 justify-center">
      {games.map((game) => (
        <Cards
          key={game.id}
          gameId={game.id}
          hasFavorited={game.hasFavorited}
          image={game.img}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default GameGallery;
