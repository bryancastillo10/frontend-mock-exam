import { useState } from "react";
import LowerNavigation from "./LowerNavigation";
import UpperNavigation from "./UpperNavigation";
import GameGallery from "./GameGallery";

import useGetGames from "../../api/useGetGames";
import upperNavTabItems from "../../constants/uppernav";

const GameSection = () => {
  const { loading, games, toggleFavorite } = useGetGames();
  const [activeTab, setActiveTab] = useState<string>("Start");

  const filteredGames =
    activeTab === "Start"
      ? games
      : games.filter((game) =>
          game.category.some((cat) => cat === activeTab.toLowerCase())
        );

  console.log(activeTab);

  return (
    <main>
      <UpperNavigation
        activeTab={activeTab}
        tabItems={upperNavTabItems}
        setActiveTab={setActiveTab}
      />
      <GameGallery
        loading={loading}
        games={filteredGames}
        toggleFavorite={toggleFavorite}
      />
      <LowerNavigation />
    </main>
  );
};

export default GameSection;
