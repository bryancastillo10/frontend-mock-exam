import { useState } from "react";
import {
  Container,
  Navbar,
  Hero,
  AppMainSection,
  Drawer,
} from "./components/main";
import useGetBanner from "./api/useGetBanner";

const App = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const { loading, banners } = useGetBanner();

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };

  return (
    <Container>
      <Navbar toggleDrawer={toggleDrawer} />
      <Hero />
      <AppMainSection />
      <Drawer
        banners={banners}
        loading={loading}
        isOpen={openDrawer}
        onCloseDrawer={onCloseDrawer}
      />
    </Container>
  );
};

export default App;
