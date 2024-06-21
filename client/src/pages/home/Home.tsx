import { useDispatch, useSelector } from "react-redux";
import { MainCarousel } from "./main-carousel/MainCarousel";

import { setBanners } from "../../redux-store/bannerReducer";
import { useEffect } from "react";
import { API_URL } from "../../environment";
import ShoppingList from "../../components/shopping-list/ShoppingList";
import { RootState, setCategoryImages } from "../../redux-store";
import CategoryImages from "../../components/category-images/CategoryImages";
import { BagTypes } from "../../types/item";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Flex } from "../../components";
import PageHeader from "../../components/page-header/PageHeader";
import PageSection from "../../components/page-section/PageSection";

const Home = () => {
  const dispatch = useDispatch();
  const categoryImages: any[] = useSelector(
    (state: RootState) => state.products.categoryImages
  );

  async function getBanners() {
    const banners = await fetch(`${API_URL}/banners?populate=*`, {
      method: "GET",
    });
    const bannersJson = await banners.json();

    dispatch(setBanners(bannersJson.data));
  }

  async function getCategoryImages() {
    const categoryImages = await fetch(
      `${API_URL}/category-images?populate=*`,
      {
        method: "GET",
      }
    );
    const categoryImagesJson = await categoryImages.json();
    dispatch(setCategoryImages(categoryImagesJson.data));
  }

  useEffect(() => {
    getBanners();
    getCategoryImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const frameBagImages = categoryImages
    ?.filter((images) => {
      return images.attributes.bagType === BagTypes.frame;
    })
    .flatMap((images) => {
      return images?.attributes?.images?.data;
    });
  const TopTubeBags = categoryImages
    ?.filter((images) => {
      return images.attributes.bagType === BagTypes.topTube;
    })
    .flatMap((images) => {
      return images?.attributes?.images?.data;
    });

  return (
    <>
      <MainCarousel />

      <PageSection
        title="Welcome to Goodwin Biking!"
        subtitle="Your source for authentic, pragmatic bikepacking gear catered to
    beginner and professional bikepackers alike."
      />
      <ShoppingList />
      <CategoryImages
        actionUrl={"/bikepacking-bags"}
        images={frameBagImages}
        fullWidth={true}
        linkText="Shop Frame Bags"
      />
      <CategoryImages
        actionUrl={"/bikepacking-bags"}
        images={TopTubeBags}
        fullWidth={true}
        linkText="Shop Top Tube Bags"
      />
      {/* TODO: add a #id to url for scrolling to ref of top tubes on page  */}

      {/* To add subscribe to newsletter section, see 2:14:20  */}
    </>
  );
};

export default Home;
