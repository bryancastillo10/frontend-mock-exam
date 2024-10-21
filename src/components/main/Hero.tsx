import HeroBanner from "../../assets/HeroMainBg.png";
import { TbBellFilled } from "react-icons/tb";
const Hero = () => {
  return (
    <section className="py-3">
      <div className="flex justify-center items-center">
        <img src={HeroBanner} alt="hero-banner" className="w-[90%] mx-auto" />
      </div>
      <div className="my-2 flex items-center gap-2 px-4">
        <TbBellFilled className="text-accent" />
        <p className="text-primary">
          ¡FELICIDADES artxxxxipa! GANADOR DESTACADO{" "}
        </p>
      </div>
    </section>
  );
};

export default Hero;
