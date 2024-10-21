import SearchIcon from "../assets/icons/searchIcon.svg";
import FireIcon from "../assets/icons/fireIcon.svg";
import SlotIcon from "../assets/icons/slotIcon.svg";
import NewIcon from "../assets/icons/newIcon.svg";
import LiveIcon from "../assets/icons/liveIcon.svg";
import JackpotIcon from "../assets/icons/jackpotIcon.svg";
import GameIcon from "../assets/icons/playingCardIcon.svg";
import BingoIcon from "../assets/icons/bingoIcon.svg";
import OthersIcon from "../assets/icons/othersIcon.svg";

interface UpperNavItemsProps {
  id: number;
  name: string;
  icon: React.ElementType;
}

const upperNavTabItems: UpperNavItemsProps[] = [
  {
    id: 1,
    name: "Search",
    icon: SearchIcon,
  },
  {
    id: 2,
    name: "Start",
    icon: FireIcon,
  },
  {
    id: 3,
    name: "New",
    icon: NewIcon,
  },
  {
    id: 4,
    name: "Slots",
    icon: SlotIcon,
  },
  {
    id: 5,
    name: "Live",
    icon: LiveIcon,
  },
  {
    id: 6,
    name: "Jackpots",
    icon: JackpotIcon,
  },
  {
    id: 7,
    name: "Table Games",
    icon: GameIcon,
  },
  {
    id: 8,
    name: "Bingo",
    icon: BingoIcon,
  },
  {
    id: 9,
    name: "Others",
    icon: OthersIcon,
  },
];

export default upperNavTabItems;
