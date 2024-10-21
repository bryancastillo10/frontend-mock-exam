import { BiMenuAltLeft } from "react-icons/bi";
import { IoWallet } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import NavLogo from "../../assets/F1M5_Logo.png";

interface NavbarProps {
  toggleDrawer: () => void;
}

const Navbar = ({ toggleDrawer }: NavbarProps) => {
  return (
    <nav className="px-3 py-4 border shadow-md flex justify-between">
      <div className="flex gap-3 items-center">
        <BiMenuAltLeft
          onClick={toggleDrawer}
          size="24"
          className="text-primary cursor-pointer hover:text-secondary"
        />
        <img src={NavLogo} alt="fun88-logo" className="h-5 max-w-sm" />
      </div>
      <div className="flex gap-2 items-center">
        <IoWallet size="24" className="text-secondary" />
        <h1 className="font-semibold text-primary">$ 1990.6</h1>
        <hr className="h-full border border-primary" />
        <FaUser size="24" className="text-primary" />
      </div>
    </nav>
  );
};
export default Navbar;
