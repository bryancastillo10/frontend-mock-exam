import { useState, useEffect } from "react";
import { gameArrayType } from "./type";
import { gameDataProps } from "../api/useGetGames";

const useTabFilter = ({ games = [] }: gameArrayType) => {
  const [filteredGames, setFilteredGames] = useState<gameDataProps[]>(games);
  const [activeTab, setActiveTab] = useState("Start");

  useEffect(() => {
    let filtered = games;

    if (activeTab !== "Start") {
      filtered = filtered.filter((game) =>
        game.category.some(
          (cat) => cat.toLowerCase() === activeTab.toLowerCase()
        )
      );
    }

    setFilteredGames(filtered);
  }, [activeTab, games]);

  return { filteredGames, activeTab, setActiveTab };
};

export default useTabFilter;
