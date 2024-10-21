import { useState } from "react";
import {
  Container,
  Navbar,
  Hero,
  AppMainSection,
  Drawer,
} from "./components/main";

const App = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

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
      <Drawer isOpen={openDrawer} onCloseDrawer={onCloseDrawer} />
    </Container>
  );
};

export default App;
