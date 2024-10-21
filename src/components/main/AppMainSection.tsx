import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import upperNavTabItems from "../../constants/uppernav";
import LowerNavigation from "./LowerNavigation";
import UpperNavigation from "./UpperNavigation";
import SearchInput from "../reusables/SearchInput";
import GameGallery from "./GameGallery";
import SearchResults from "./SearchResults";
import useGetGames, { gameDataProps } from "../../api/useGetGames";
import { bannerDataProps } from "../../api/useGetBanner";

interface AppMainSectionProps {
  bannerLoading: boolean;
  banners: bannerDataProps[];
}

const AppMainSection = ({ banners, bannerLoading }: AppMainSectionProps) => {
  const { loading, games, toggleFavorite } = useGetGames();
  const [filteredGames, setFilteredGames] = useState<gameDataProps[]>(games);
  const [searchResults, setSearchResults] = useState<gameDataProps[]>([]);

  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Start");
  const [showSearch, setShowSearch] = useState(false);

  const toggleShowSearch = () => {
    setShowSearch(!showSearch);
    setSearch("");
    setSearchResults([]);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const results = games.filter((game) =>
      game.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
  };

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
        <>
          <SearchInput
            search={search}
            handleSearch={handleSearch}
            handleSearchSubmit={handleSearchSubmit}
          />
          <SearchResults
            banners={banners!}
            bannerLoading={bannerLoading}
            results={searchResults}
            toggleFavorite={toggleFavorite}
          />
        </>
      )}
      {!showSearch && (
        <GameGallery
          loading={loading}
          games={filteredGames}
          toggleFavorite={toggleFavorite}
        />
      )}
      <LowerNavigation />
    </main>
  );
};

export default AppMainSection;
