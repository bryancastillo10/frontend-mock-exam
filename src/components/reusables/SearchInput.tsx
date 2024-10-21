import SearchIcon from "../../assets/icons/searchIcon.svg";
import { MdManageSearch } from "react-icons/md";
import { ChangeEvent } from "react";

interface SearchInputProps {
  search: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ search, handleSearch }: SearchInputProps) => {
  return (
    <section className="w-full relative px-8 my-4 flex justify-evenly gap-2 items-center">
      <div className="absolute left-10  text-secondary">
        <SearchIcon width="18" height="18" />
      </div>
      <input
        type="search"
        value={search}
        placeholder="Search for the game"
        className="w-full border border-secondary focus:border-transparent
        pl-8 py-1 w-50 rounded-lg shadow-sm border-blue1 focus:outline-none focus:ring-1 focus:ring-primary"
        onChange={handleSearch}
      />
      <button>
        <MdManageSearch size="28" />
      </button>
    </section>
  );
};

export default SearchInput;
