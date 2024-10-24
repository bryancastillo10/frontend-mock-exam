import { FaRegStar, FaStar } from "react-icons/fa";

interface FavoriteButtonProps {
  gameId: number;
  toggleFavorite: (id: number) => void;
  hasFavorited: boolean;
}

const FavoriteButton = ({
  gameId,
  toggleFavorite,
  hasFavorited,
}: FavoriteButtonProps) => {
  return (
    <div
      onClick={() => toggleFavorite(gameId!)}
      className="relative cursor-pointer"
    >
      <FaRegStar
        className="absolute -top-[2px] -right-[2px] fill-white"
        size="20"
      />
      <FaStar
        size="16"
        className={hasFavorited ? "fill-accent" : "fill-transparent"}
      />
    </div>
  );
};

export default FavoriteButton;
