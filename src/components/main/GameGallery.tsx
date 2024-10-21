import useGetGames from "../../api/useGetGames";
import Cards from "../reusables/Cards";

const GameGallery = () => {
  const { games, loading, toggleFavorite } = useGetGames();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-y-3 px-8 justify-center">
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
