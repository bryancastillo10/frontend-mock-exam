import { Dispatch } from "react";
import TabItem from "../reusables/TabItem";
import TabContainer from "../reusables/TabContainer";
import SearchIcon from "../../assets/icons/searchIcon.svg";
import { UpperNavItemsProps } from "../../constants/uppernav";

interface UpperNavigationProps {
  tabItems: UpperNavItemsProps[];
  setActiveTab: Dispatch<React.SetStateAction<string>>;
}

const UpperNavigation = ({ tabItems, setActiveTab }: UpperNavigationProps) => {
  return (
    <TabContainer>
      <TabItem label="Search" icon={SearchIcon} />
      <hr className="w-0 h-8 border  border-secondary/50" />
      {tabItems.slice(1, tabItems.length).map((nav) => (
        <TabItem
          key={nav.id}
          label={nav.name}
          icon={nav.icon}
          onClick={() => setActiveTab(nav.name)}
        />
      ))}
    </TabContainer>
  );
};

export default UpperNavigation;
