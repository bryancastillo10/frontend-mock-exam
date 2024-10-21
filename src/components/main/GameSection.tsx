import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import LowerNavigation from "./LowerNavigation";
import UpperNavigation from "./UpperNavigation";
import SearchInput from "../reusables/SearchInput";
import GameGallery from "./GameGallery";

import useGetGames from "../../api/useGetGames";
import upperNavTabItems from "../../constants/uppernav";

const GameSection = () => {
  const { loading, games, toggleFavorite } = useGetGames();
  const [filteredGames, setFilteredGames] = useState(games);

  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<string>("Start");
  const [showSearch, setShowSearch] = useState<boolean>(false);

  // Toggle Search UI
  const toggleShowSearch = () => {
    setShowSearch(!showSearch);
    setSearch("");
  };

  // Handle Search Input
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    let filtered = games;

    // Filter by Search
    if (search) {
      filtered = filtered.filter((game) =>
        game.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by Tab
    if (activeTab !== "Start") {
      filtered = filtered.filter((game) =>
        game.category.some(
          (cat) => cat.toLowerCase() === activeTab.toLowerCase()
        )
      );
    }

    setFilteredGames(filtered);
  }, [search, activeTab, games]);

  return (
    <main className="h-screen">
      <UpperNavigation
        activeTab={activeTab}
        tabItems={upperNavTabItems}
        setActiveTab={setActiveTab}
        showSearch={showSearch}
        toggleSearch={toggleShowSearch}
      />
      {showSearch && (
        <SearchInput
          search={search}
          handleSearch={handleSearch}
          handleSearchSubmit={handleSearchSubmit}
        />
      )}
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
