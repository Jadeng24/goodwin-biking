export interface ItemContract {
  name: string;
  category: string;
  image: string;
  price: number;
  shortDescription: string;
  longDescription: string;
}

export type BagType =
  | "topTube"
  | "frame"
  | "handlebar"
  | "seatPack"
  | "rearRack";

export enum BagTypes {
  topTube = "Top Tube",
  frame = "Frame",
  handlebar = "Handlebar",
  seatPack = "Seat pack",
  rearRack = "Rear rack",
}
