import gameData from "./data/games";
import { useState, useEffect } from "react";

export interface gameDataProps {
  id: number;
  name: string;
  img: string;
  hasFavorited: boolean;
  category: string[];
  gameProvider: string;
}

const useGetGames = () => {
  const [games, setGames] = useState<gameDataProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(gameData);
          }, 1000);
        });

        setGames(gameData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to get the games data", error);
      }
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
