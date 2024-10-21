import { Dispatch } from "react";
import TabItem from "../reusables/TabItem";
import TabContainer from "../reusables/TabContainer";
import SearchIcon from "../../assets/icons/searchIcon.svg";
import { UpperNavItemsProps } from "../../constants/uppernav";

interface UpperNavigationProps {
  activeTab: string;
  tabItems: UpperNavItemsProps[];
  setActiveTab: Dispatch<React.SetStateAction<string>>;
  toggleSearch: () => void;
  showSearch?: boolean;
}

const UpperNavigation = ({
  activeTab,
  tabItems,
  setActiveTab,
  toggleSearch,
  showSearch,
}: UpperNavigationProps) => {
  const handleSearchClick = () => {
    toggleSearch();
    if (!showSearch) {
      setActiveTab("");
    }
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    if (showSearch) {
      toggleSearch();
    }
  };

  return (
    <TabContainer>
      <button
        onClick={handleSearchClick}
        className={`flex flex-col justify-center
       items-center hover:scale-110 duration-500 ease-out w-fit p-2
       ${showSearch ? "border-b-primary border-b-4" : null}
       `}
      >
        <SearchIcon
          className={`${showSearch ? "text-primary" : "text-secondary"}`}
        />
        <p
          className={`uppercase ${
            showSearch ? "text-primary" : "text-secondary"
          }`}
        >
          Search
        </p>
      </button>
      <hr className="w-0 h-8 border  border-secondary/50" />
      {tabItems.slice(1, tabItems.length).map((nav) => (
        <TabItem
          key={nav.id}
          activeTab={activeTab}
          label={nav.name}
          icon={nav.icon}
          onClick={() => handleTabClick(nav.name)}
        />
      ))}
    </TabContainer>
  );
};

export default UpperNavigation;
