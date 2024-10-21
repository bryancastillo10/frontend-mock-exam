import sugarRush from "../../assets/gamecards/game1.png";
import shaolinCrew from "../../assets/gamecards/game2.png";
import bigWolf from "../../assets/gamecards/game3.png";
import bookEgypt from "../../assets/gamecards/game4.png";
import piratesPower from "../../assets/gamecards/game5.png";

const gameData = [
  {
    id: 1,
    name: "Sugar Rush",
    img: sugarRush,
    hasFavorited: false,
    category: ["new", "jackpots"],
    gameProvider: ["PragmaticPlay"],
  },
  {
    id: 2,
    name: "Shaolin Crew",
    img: shaolinCrew,
    hasFavorited: false,
    category: ["others"],
    gameProvider: ["XPans"],
  },
  {
    id: 3,
    name: "Big Bad Wolf",
    img: bigWolf,
    hasFavorited: false,
    category: ["live", "new"],
    gameProvider: ["PlayTech"],
  },
  {
    id: 4,
    name: "Book of Egypt",
    img: bookEgypt,
    hasFavorited: false,
    category: ["live", "table"],
    gameProvider: ["XPans"],
  },
  {
    id: 5,
    name: "Pirates Power",
    img: piratesPower,
    hasFavorited: false,
    category: ["jackpots", "others"],
    gameProvider: ["XPans"],
  },
];

export default gameData;
