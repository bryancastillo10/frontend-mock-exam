import { bannerDataProps } from "../api/useGetBanner";
import { gameDataProps } from "../api/useGetGames";

export type gameArrayType = {
  games: gameDataProps[];
};

export type bannerArrayType = {
  banners: bannerDataProps[];
};
