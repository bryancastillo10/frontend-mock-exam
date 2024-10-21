import SoccerIcon from "../assets/icons/soccerIcon.svg";
import FavoriteIcon from "../assets/icons/starIcon.svg";
import InviteIcon from "../assets/icons/userAddIcon.svg";
import CasinoIcon from "../assets/icons/casinoIcon.svg";
import WalletIcon from "../assets/icons/walletIcon.svg";

interface LowerNavItemsProps {
  id: number;
  name: string;
  icon: React.ElementType;
}

const lowerNavTabItems: LowerNavItemsProps[] = [
  {
    id: 1,
    name: "Sports",
    icon: SoccerIcon,
  },
  {
    id: 2,
    name: "Favorites",
    icon: FavoriteIcon,
  },
  {
    id: 3,
    name: "Invites",
    icon: InviteIcon,
  },
  {
    id: 4,
    name: "Casino Live",
    icon: CasinoIcon,
  },
  {
    id: 5,
    name: "Cashier",
    icon: WalletIcon,
  },
];

export default lowerNavTabItems;
