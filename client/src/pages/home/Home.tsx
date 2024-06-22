import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MainCarousel } from "./main-carousel/MainCarousel";
import { setBanners } from "../../redux-store/bannerReducer";
import { API_URL } from "../../environment";
import ShoppingList from "../../components/shopping-list/ShoppingList";
import { RootState, setCategoryImages } from "../../redux-store";
import CategoryImages from "../../components/category-images/CategoryImages";
import { BagTypes } from "../../types/item";
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
  const topTubeBags = categoryImages
    ?.filter((images) => {
      return images.attributes.bagType === BagTypes.topTube;
    })
    .flatMap((images) => {
      return images?.attributes?.images?.data;
    });
  const rearBags = categoryImages
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
        linkUrl={"/bikepacking-bags"}
        images={frameBagImages}
        fullWidth={true}
        linkText="Shop Frame Bags"
      />
      <CategoryImages
        linkUrl={"/bikepacking-bags"}
        images={topTubeBags}
        fullWidth={true}
        linkText="Shop Top Tube Bags"
      />

      <PageSection
        title="Accessories and Apparel"
        subtitle="Explore essential gear and stylish merchandise for your bikepacking adventures. Discover ultra-light gear, comfy t-shirts, fun stickers, and more! Perfect for enthusiasts and Goodwin Biking supporters alike."
        linkUrl="/accessories-apparel"
        linkText="Shop Now"
      />
      <CategoryImages images={rearBags} fullWidth={true} />
      <PageSection
        title="Have Questions?"
        subtitle="Need information about our products or ordering process? Explore answers to common inquiries about bikepacking gear, apparel sizing, shipping details, and more. If you don't find what you're looking for, feel free to reach out to our team for assistance."
        linkUrl="/faq"
        linkText="Visit FAQ"
      />

      {/* TODO: add a #id to url for scrolling to ref of top tubes on page  */}

      {/* To add subscribe to newsletter section, see 2:14:20  */}
    </>
  );
};

export default Home;
