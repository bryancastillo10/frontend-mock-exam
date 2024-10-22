import bannerData from "./data/banner";
import { useState, useEffect } from "react";

export interface bannerDataProps {
  id: number;
  name: string;
  img: string;
  quantity: number;
}

const useGetBanner = () => {
  const [banners, setBanners] = useState<bannerDataProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(bannerData);
          }, 1000);
        });

        setBanners(bannerData);
        setLoading(false);
      } catch (error) {
        console.error("Failed to get the game banner data", error);
      }
    };
    fetchBanners();
  }, []);

  return { loading, banners };
};

export default useGetBanner;
