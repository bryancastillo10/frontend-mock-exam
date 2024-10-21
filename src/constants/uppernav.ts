import searchIcon from "../assets/icons/searchIcon.svg";
import fireIcon from "../assets/icons/fireIcon.svg";
import slotIcon from "../assets/icons/slotIcon.svg";
import newIcon from "../assets/icons/newIcon.svg";
import liveIcon from "../assets/icons/liveIcon.svg";
import jackpotIcon from "../assets/icons/jackpotIcon.svg";
import gameIcon from "../assets/icons/playingCardIcon.svg";
import bingoIcon from "../assets/icons/bingotIcon.svg";
import othersIcon from "../assets/icons/othersIcon.svg";

interface UpperNavItemsProps {
  id: number;
  name: string;
  icon: string;
}

const upperNavTabItems: UpperNavItemsProps[] = [
  {
    id: 1,
    name: "Search",
    icon: searchIcon,
  },
  {
    id: 2,
    name: "Start",
    icon: fireIcon,
  },
  {
    id: 3,
    name: "New",
    icon: newIcon,
  },
  {
    id: 4,
    name: "Slots",
    icon: slotIcon,
  },
  {
    id: 5,
    name: "Live",
    icon: liveIcon,
  },
  {
    id: 6,
    name: "Jackpots",
    icon: jackpotIcon,
  },
  {
    id: 7,
    name: "Table Games",
    icon: gameIcon,
  },
  {
    id: 8,
    name: "Bingo",
    icon: bingoIcon,
  },
  {
    id: 9,
    name: "Others",
    icon: othersIcon,
  },
];

export default upperNavTabItems;
