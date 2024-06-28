import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  Divider,
  Rating,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Item from "../../components/item/Item";
import { Flex } from "../../components";
import { API_URL } from "../../environment";
import ItemFeatures from "./item-features/ItemFeatures";
import ItemSpecs from "./item-specs/ItemSpecs";
import ItemActionButtons from "./item-action-buttons/ItemActionButtons";
import ItemShippingAndReturns from "./item-shipping-and-returns/ItemShippingAndReturns";
import ItemBreadcrumbs from "./item-breadcrumbs/ItemBreadcrumbs";
import ItemImageViewer from "./item-image-viewer/ItemImageViewer";
import ItemPrice from "../../components/item-price/ItemPrice";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [ratingValue, setRatingValue] = useState<number | null>();
  const [item, setItem] = useState<any>(null);
  const [relatedItems, setRelatedItems] = useState<any>([]);

  const isMobile = useMediaQuery("(max-width:600px)");

  const {
    category,
    features,
    name,
    price,
    shortDescription,
    longDescription,
    color,
    bagType,
    dimensions,
    discountPercent,
    discountPrice,
    material,
    maxCapacity,
    volume,
    weight,
  } = item?.attributes || {};

  async function getItem() {
    const item = await fetch(`${API_URL}/items/${itemId}?populate=*`, {
      method: "GET",
    });
    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  async function getRelatedItems() {
    const items = await fetch(`${API_URL}/items?populate=*`, {
      method: "GET",
    });
    const itemsJson = await items.json();
    setRelatedItems(itemsJson.data);
  }

  useEffect(() => {
    getItem();
    getRelatedItems();
  }, [itemId]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: string
  ) => {
    setValue(newValue);
  };

  const fullDescription = longDescription?.[0].children[0].text;
  const summary = shortDescription?.[0].children[0].text;

  const imageFormats = item?.attributes?.image?.data?.attributes?.formats;
  const mainImage = imageFormats?.medium?.url || imageFormats?.small?.url || "";
  const images = item?.attributes?.images?.data || [];

  return (
    <Box padding={isMobile ? "90px 30px 30px" : "90px"} fontSize="16px">
      <Flex flexDirection="column" rowGap="40px" marginTop="40px">
        <ItemBreadcrumbs name={name} />

        <Flex
          marginBottom="40px"
          flexDirection={isMobile ? "column" : "row"}
          gap={isMobile ? "20px" : "5%"}
        >
          {item ? (
            <ItemImageViewer
              name={name}
              mainImage={mainImage}
              images={images}
            />
          ) : (
            <Skeleton variant="rectangular" width="300px" height="450px" />
          )}

          {/* Item Information  */}
          <Box>
            <Box marginBottom="20px">
              <Flex alignItems="center" justifyContent="space-between">
                <Typography variant="h3">{name}</Typography>
              </Flex>
              <ItemPrice
                price={price}
                discountPercent={discountPercent}
                discountPrice={discountPrice}
              />

              <Box marginY="20px">
                <Divider />
              </Box>

              <Typography variant="h4" sx={{ marginTop: "20px" }}>
                {summary}
              </Typography>
            </Box>

            <ItemShippingAndReturns />

            <ItemActionButtons item={item} />

            <ItemFeatures features={features?.features} />
            <ItemSpecs
              bagType={bagType}
              color={color}
              dimensions={dimensions}
              material={material}
              maxCapacity={maxCapacity}
              volume={volume}
              weight={weight}
            />
          </Box>
        </Flex>
      </Flex>

      {/* Tab sections  */}
      <Box marginBottom="20px">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="reviews" />
        </Tabs>
      </Box>
      <Box display="flex" flexWrap="wrap" gap="15px">
        {value === "description" && (
          <Typography variant="h4">{fullDescription}</Typography>
        )}
        {value === "reviews" && (
          <Flex flexDirection="column" gap="10px">
            <Typography>Reviews feature coming soon...</Typography>
            <Rating
              name="review-rating"
              value={ratingValue}
              onChange={(event, newValue: number | null) => {
                setRatingValue(newValue);
              }}
            />
          </Flex>
        )}
      </Box>
      <Box marginY="40px">
        <Divider />
      </Box>

      {/* RELATED ITEMS */}
      <Box>
        <Typography variant="h3" fontWeight="bold">
          Related Products
        </Typography>
        <Flex
          flexWrap="wrap"
          alignItems="center"
          width="100%"
          justifyContent="space-around"
          rowGap="20px"
          marginTop="30px"
        >
          {relatedItems.slice(0, 4).map((item: any, index: number) => (
            <Item key={`${item.name}-${index}`} item={item} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default ItemDetails;
