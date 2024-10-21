import { MdManageSearch } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import Evo from "../../assets/banners/EVO.png";

interface DrawerProps {
  isOpen: boolean;
  onCloseDrawer: () => void;
}

const Drawer = ({ isOpen, onCloseDrawer }: DrawerProps) => {
  return (
    <section
      onClick={onCloseDrawer}
      className={`${
        isOpen
          ? "opacity-1 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } duration-300 ease-out fixed inset-0 bg-[rgba(0,0,0,0.6)] justify-center items-center z-10`}
    >
      <div
        className={`absolute top-[50%]  bg-white w-full xl:w-[50%] xl:left-[30%] h-1/2 z-50 transition-transform duration-300 ease-out ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ transform: isOpen ? "translateY(0)" : "translateY(100%)" }}
      >
        {/* Drawer Navbar */}
        <div className="bg-primary text-white flex justify-between py-3 px-2">
          <div className="flex items-center gap-2">
            <MdManageSearch size="28" />
            <h1 className="font-regular">Game Provider</h1>
            <p className="rounded-xl border border-white px-4 ">119</p>
          </div>
          <IoClose
            className="cursor-pointer hover:text-secondary"
            size="28"
            onClick={onCloseDrawer}
          />
        </div>
        {/* Drawer Body */}
        <div className="bg-light w-[175px] h-9 flex justify-center shadow-md m-4">
          <img src={Evo} className="object-fit" />
        </div>
      </div>
    </section>
  );
};

export default Drawer;
