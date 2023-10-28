import { React } from "./React";
import { TailwindCSS } from "./TailwindCSS";
export const RoadmapList = [
  { id: "01", language: "React Js" },
  { id: "02", language: "TailwindCSS" },
];

const linkItem = {
  "01": React,
  "02": TailwindCSS,
};

export const selectItem = (item) => linkItem[item];
