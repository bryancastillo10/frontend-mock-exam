import { useState } from "react";

const useDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return { openDrawer, toggleDrawer, onCloseDrawer };
};

export default useDrawer;
