import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  Divider,
  IconButton,
  Rating,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Share } from "@mui/icons-material";

import Item from "../../components/item/Item";
import { Flex } from "../../components";
import { API_URL } from "../../environment";
import ItemFeatures from "./item-features/ItemFeatures";
import ItemSpecs from "./item-specs/ItemSpecs";
import ItemActionButtons from "./item-action-buttons/ItemActionButtons";
import ItemShippingAndReturns from "./item-shipping-and-returns/ItemShippingAndReturns";
import ItemBreadcrumbs from "./item-breadcrumbs/ItemBreadcrumbs";

const ItemDetails = () => {
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [ratingValue, setRatingValue] = useState<number | null>();
  const [item, setItem] = useState<any>(null);
  const [relatedItems, setRelatedItems] = useState<any>([]);

  const isMobile = useMediaQuery("(max-width:600px)");

  const { category, name, price, shortDescription, longDescription } =
    item?.attributes || {};

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

  return (
    <Box padding={isMobile ? "60px 30px 30px" : "60px"} fontSize="16px">
      <Flex flexDirection="column" rowGap="40px" marginTop="10px">
        <ItemBreadcrumbs name={name} />

        <Flex
          marginBottom="40px"
          flexDirection={isMobile ? "column" : "row"}
          gap={isMobile ? "20px" : "40px"}
        >
          {item ? (
            <img
              alt={name}
              src={`${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
              style={{
                minWidth: "44%",
                maxWidth: "100%",
                objectFit: "contain",
                borderRadius: "4px",
              }}
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
              <Flex justifyContent="space-between" width="100%">
                <Typography variant="h4" fontSize="20px">
                  ${price}
                </Typography>
                {/* TODO: make this share button functional  */}
                <IconButton>
                  <Share />
                </IconButton>
              </Flex>

              <Box marginY="20px">
                <Divider />
              </Box>

              <Typography variant="h4" sx={{ marginTop: "20px" }}>
                {summary}
              </Typography>
            </Box>

            <ItemShippingAndReturns />

            <ItemActionButtons item={item} />
            <ItemFeatures />
            <ItemSpecs />
          </Box>
        </Flex>
      </Flex>

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
