// Data
import upperNavTabItems from "../../constants/uppernav";

// UI Components
import SearchInput from "../reusables/SearchInput";
import SearchResults from "./SearchResults";
import GameGallery from "./GameGallery";
import UpperNavigation from "./UpperNavigation";
import LowerNavigation from "./LowerNavigation";

// API and Hooks
import useGetGames from "../../api/useGetGames";
import { bannerDataProps } from "../../api/useGetBanner";
import useSearchByInput from "../../hooks/useSearchByInput";
import useTabFilter from "../../hooks/useTabFilter";

interface AppMainSectionProps {
  bannerLoading: boolean;
  banners: bannerDataProps[];
}

const AppMainSection = ({ banners, bannerLoading }: AppMainSectionProps) => {
  const { loading, games, toggleFavorite } = useGetGames();
  const {
    search,
    showSearch,
    searchResults,
    toggleShowSearch,
    handleSearch,
    handleSearchSubmit,
  } = useSearchByInput({ games });

  const { filteredGames, activeTab, setActiveTab } = useTabFilter({ games });

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
