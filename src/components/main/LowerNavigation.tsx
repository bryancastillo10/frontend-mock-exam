import lowerNavTabItems from "../../constants/lowernav";
import TabContainer from "../reusables/TabContainer";
import TabItem from "../reusables/TabItem";

const LowerNavigation = () => {
  return (
    <TabContainer position="bottom">
      {lowerNavTabItems.map((nav) => (
        <TabItem key={nav.id} label={nav.name} icon={nav.icon} />
      ))}
    </TabContainer>
  );
};

export default LowerNavigation;
