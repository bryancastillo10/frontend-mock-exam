import soccerIcon from "../assets/icons/soccerIcon.svg";
import favoriteIcon from "../assets/icons/starIcon.svg";
import inviteIcon from "../assets/icons/userAddIcon.svg";
import casinoIcon from "../assets/icons/casinoIcon.svg";
import walletIcon from "../assets/icons/walletIcon.svg";

interface LowerNavItemsProps {
  id: number;
  name: string;
  icon: string;
}

const lowerNavTabItems: LowerNavItemsProps[] = [
  {
    id: 1,
    name: "Sports",
    icon: soccerIcon,
  },
  {
    id: 2,
    name: "Favorites",
    icon: favoriteIcon,
  },
  {
    id: 3,
    name: "Invites",
    icon: inviteIcon,
  },
  {
    id: 4,
    name: "Casino Live",
    icon: casinoIcon,
  },
  {
    id: 5,
    name: "Cashier",
    icon: walletIcon,
  },
];

export default lowerNavTabItems;
