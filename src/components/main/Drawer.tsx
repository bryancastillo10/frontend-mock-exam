import { MdManageSearch } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import { bannerDataProps } from "../../api/useGetBanner";
import BigSpinner from "../reusables/BigSpinner";
import GameBanner from "../reusables/GameBanner";

interface DrawerProps {
  loading: boolean;
  banners: bannerDataProps[];
  isOpen: boolean;
  onCloseDrawer: () => void;
}

const Drawer = ({ isOpen, onCloseDrawer, banners, loading }: DrawerProps) => {
  const totalQuantity = banners.reduce(
    (sum, banner) => sum + banner.quantity,
    0
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <BigSpinner />
      </div>
    );
  }

  return (
    <section
      className={`${
        isOpen
          ? "opacity-1 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } duration-300 ease-out fixed inset-0 bg-[rgba(0,0,0,0.6)] justify-center items-center z-10`}
    >
      <div onClick={onCloseDrawer} className="fixed inset-0 bg-transparent" />
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
            <p className="rounded-xl border border-white px-4 ">
              {totalQuantity}
            </p>
          </div>
          <IoClose
            className="cursor-pointer hover:text-secondary"
            size="28"
            onClick={onCloseDrawer}
          />
        </div>
        {/* Drawer Body */}
        <div className="grid grid-cols-2 w-[90%] mx-auto items-center overflow-y-scroll gap-4  h-[calc(100%-3rem)]">
          {banners.map((ban) => (
            <GameBanner key={ban.id} image={ban.img} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Drawer;
