import useDrawer from "./hooks/useDrawer";
import {
  Container,
  Navbar,
  Hero,
  AppMainSection,
  Drawer,
} from "./components/main";
import useGetBanner from "./api/useGetBanner";

const App = () => {
  const { openDrawer, toggleDrawer, onCloseDrawer } = useDrawer();
  const { loading, banners } = useGetBanner();

  return (
    <Container>
      <Navbar toggleDrawer={toggleDrawer} />
      <Hero />
      <AppMainSection bannerLoading={loading} banners={banners} />
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
