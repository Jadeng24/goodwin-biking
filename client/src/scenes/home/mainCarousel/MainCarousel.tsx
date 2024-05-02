import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const importAllImagesFromAssets = (images: any) => {
  images.keys().reduce((acc: { [x: string]: any }, item: string) => {
    acc[item.replace("./", "")] = images(item);
    return acc;
  }, {});
};

export const heroTextureImports = importAllImagesFromAssets(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

export const MainCarousel = () => {
  return <></>;
};
