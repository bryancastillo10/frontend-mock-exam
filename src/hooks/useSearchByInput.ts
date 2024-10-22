import { useState, ChangeEvent, FormEvent } from "react";
import { gameDataProps } from "../api/useGetGames";
import { gameArrayType } from "./type";

const useSearchByInput = ({ games = [] }: gameArrayType) => {
  const [search, setSearch] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<gameDataProps[]>([]);

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
    const results = games.filter(
      (game) =>
        game.name.toLowerCase().includes(search.toLowerCase()) ||
        game.gameProvider.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(results);
  };

  return {
    search,
    showSearch,
    searchResults,
    toggleShowSearch,
    handleSearch,
    handleSearchSubmit,
  };
};

export default useSearchByInput;
