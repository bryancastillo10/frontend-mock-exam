import { useState } from "react";
import { bannerArrayType } from "./type";

const useBannerCarousel = ({ banners }: bannerArrayType) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage = 3;

  const visibleBanners = banners.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const handleNext = () => {
    if (currentIndex + itemsPerPage < banners.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return {
    currentIndex,
    itemsPerPage,
    visibleBanners,
    handlePrevious,
    handleNext,
  };
};

export default useBannerCarousel;
