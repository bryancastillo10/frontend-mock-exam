interface GameBannerProps {
  image: string;
}

const GameBanner = ({ image }: GameBannerProps) => {
  return (
    <div className="bg-light w-fit p-2 h-12 flex flex-wrap shadow-md m-4">
      <img src={image} alt={image} className="w-[120px] h-7 object-fit" />
    </div>
  );
};

export default GameBanner;
