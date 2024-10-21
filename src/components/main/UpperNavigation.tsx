import TabItem from "../reusables/TabItem";
import TabContainer from "../reusables/TabContainer";
import SearchIcon from "../../assets/icons/searchIcon.svg";
import upperNavTabItems from "../../constants/uppernav";

const UpperNavigation = () => {
  return (
    <TabContainer>
      <TabItem label="Search" icon={SearchIcon} />
      <hr className="w-0 h-8 border  border-secondary/50" />
      {upperNavTabItems.slice(1, upperNavTabItems.length).map((nav) => (
        <TabItem key={nav.id} label={nav.name} icon={nav.icon} />
      ))}
    </TabContainer>
  );
};

export default UpperNavigation;
