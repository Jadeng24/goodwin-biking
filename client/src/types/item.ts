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

export enum BagTypes { // Directly from Strapi bagType enumeration types
  topTube = "topTube",
  frame = "frame",
  handlebar = "handlebar",
  seatPack = "seatPack",
  rearRack = "rearRack",
}

export enum BagTypeLabels {
  topTube = "Top Tube",
  frame = "Frame",
  handlebar = "Handlebar",
  seatPack = "Seat Pack",
  rearRack = "Rear Rack",
}
