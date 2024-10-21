import gameData from "./data/games";
import { useState, useEffect } from "react";

interface gameProps {
  id: number;
  name: string;
  img: string;
  hasFavorited: boolean;
  category: string[];
  gameProvider: string[];
}

const useGetGames = () => {
  const [games, setGames] = useState<gameProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const fetchGames = async () => {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(gameData);
        }, 2000);
      });

      setGames(gameData);
      setLoading(false);
    };
    fetchGames();
  }, []);

  const toggleFavorite = (id: number) => {
    setGames((prevGames) =>
      prevGames.map((game) =>
        game.id === id ? { ...game, hasFavorited: !game.hasFavorited } : game
      )
    );
  };

  return { loading, games, toggleFavorite };
};

export default useGetGames;
