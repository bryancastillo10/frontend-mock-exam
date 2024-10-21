import {
  Container,
  Navbar,
  Hero,
  UpperNavigation,
  GameSection,
  LowerNavigation,
} from "./components/main";

const App = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <UpperNavigation />
      <GameSection />
      <LowerNavigation />
    </Container>
  );
};

export default App;
