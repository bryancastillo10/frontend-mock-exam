import SearchIcon from "../../assets/icons/searchIcon.svg";
import { MdManageSearch } from "react-icons/md";
import { ChangeEvent, FormEvent } from "react";

interface SearchInputProps {
  search: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const SearchInput = ({
  search,
  handleSearch,
  handleSearchSubmit,
}: SearchInputProps) => {
  return (
    <section className="w-full  my-4">
      <form
        className="relative px-8 flex justify-evenly gap-2 items-center "
        onSubmit={handleSearchSubmit}
      >
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
        <button className="hover:text-primary">
          <MdManageSearch size="28" />
        </button>
      </form>
    </section>
  );
};

export default SearchInput;
