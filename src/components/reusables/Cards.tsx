import FavoriteButton from "./FavoriteButton";

interface CardsProps {
  image: string;
  gameId: number;
  toggleFavorite: (id: number) => void;
  hasFavorited: boolean;
}

const Cards = ({ gameId, toggleFavorite, hasFavorited, image }: CardsProps) => {
  return (
    <article className="relative size-[115px]">
      <img className="object-fit w-full" src={image} alt={image} />
      <div className="absolute top-1 right-1">
        <FavoriteButton
          gameId={gameId}
          toggleFavorite={toggleFavorite}
          hasFavorited={hasFavorited}
        />
      </div>
    </article>
  );
};

export default Cards;
