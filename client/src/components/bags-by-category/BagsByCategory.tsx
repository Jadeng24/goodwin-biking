import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Box } from "@mui/material";

import { API_URL } from "../../environment";
import { RootState, setItems, setCategoryImages } from "../../redux-store";
import { BagTypes } from "../../types/item";
import BagCategorySection from "./bag-category-section/BagCategorySection";

const BagsByCategory = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState<string>("all");
  const items: any[] = useSelector((state: RootState) => state.products.items);
  const categoryImages: any[] = useSelector(
    (state: RootState) => state.products.categoryImages
  );

  async function getItems() {
    const items = await fetch(`${API_URL}/items?populate=*`, { method: "GET" });
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
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
    getItems();
    getCategoryImages();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const frameBags = items?.filter((item) => {
    return item.attributes.bagType === BagTypes.frame;
  });

  const frameBagImages = categoryImages
    ?.filter((images) => {
      return images.attributes.bagType === BagTypes.frame;
    })
    .flatMap((images) => {
      return images?.attributes?.images?.data;
    });

  const topTubeBags = items?.filter((item) => {
    return item.attributes.bagType === BagTypes.topTube;
  });
  const topTubeBagImages = categoryImages
    ?.filter((images) => {
      return images.attributes.bagType === BagTypes.topTube;
    })
    .flatMap((images) => {
      return images?.attributes?.images?.data;
    });

  const handlebarBags = items?.filter((item) => {
    return item.attributes.bagType === BagTypes.handlebar;
  });
  const handlebarBagImages = categoryImages
    ?.filter((images) => {
      return images.attributes.bagType === BagTypes.handlebar;
    })
    .flatMap((images) => {
      return images?.attributes?.images?.data;
    });

  const rearBags = items?.filter((item) => {
    return (
      item.attributes.bagType === BagTypes.seatPack ||
      item.attributes.bagType === BagTypes.rearRack
    );
  });
  const rearBagImages = categoryImages
    ?.filter((images) => {
      return (
        images.attributes.bagType === BagTypes.seatPack ||
        images.attributes.bagType === BagTypes.rearRack
      );
    })
    .flatMap((images) => {
      return images?.attributes?.images?.data;
    });

  return (
    <Box>
      <BagCategorySection
        title="Frame Bags"
        bags={frameBags}
        categoryImages={frameBagImages}
      />
      {/* sectionImage={} */}
      <BagCategorySection
        title="Top Tube Bags"
        bags={topTubeBags}
        categoryImages={topTubeBagImages}
      />
      <BagCategorySection
        title="Handlebar Bags"
        bags={handlebarBags}
        categoryImages={handlebarBagImages}
      />
      <BagCategorySection
        title="Seat Pack & Rear Rack Bags"
        bags={rearBags}
        categoryImages={rearBagImages}
      />
    </Box>
  );
};

export default BagsByCategory;
