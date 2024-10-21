import {
  Container,
  Navbar,
  Hero,
  NavigationTabs,
  GameSection,
} from "./components/main";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <NavigationTabs />
      <GameSection />
      <NavigationTabs />
    </Container>
  );
};

export default App;
