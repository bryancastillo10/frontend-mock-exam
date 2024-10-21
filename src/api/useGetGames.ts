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
        }, 3000);
      });

      setGames(gameData);
      setLoading(false);
    };
    fetchGames();
  }, []);

  return { loading, games };
};

export default useGetGames;
