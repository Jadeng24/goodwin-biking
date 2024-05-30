import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  Box,
  Breadcrumbs,
  Button,
  Divider,
  IconButton,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import Item from "../../components/item/Item";
import { shades } from "../../theme";
import { addToCart } from "../../redux-store";
import { Flex } from "../../components";
import { API_URL, BASE_URL } from "../../environment";
import ItemFeatures from "./item-features/ItemFeatures";
import ItemSpecs from "./item-specs/ItemSpecs";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
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
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            Home
          </Link>
          <Link color="inherit" to="/bikepacking-bags">
            Bikepacking Bags
          </Link>
          <Typography color="text.primary">{name}</Typography>
        </Breadcrumbs>
        {/* Item image */}
        <Flex
          marginBottom="40px"
          flexDirection={isMobile ? "column" : "row"}
          gap={isMobile ? "20px" : "40px"}
        >
          {item ? (
            <img
              alt={name}
              src={`${BASE_URL}${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
              style={{
                minWidth: "44%",
                maxWidth: "100%",
                objectFit: "contain",
                borderRadius: "4px",
              }}
            />
          ) : (
            <Skeleton variant="rectangular" width="400px" height="300px" />
          )}

          {/* // right half  */}
          <Box>
            <Box marginBottom="20px">
              <Flex alignItems="center" justifyContent="space-between">
                <Typography variant="h3">{name}</Typography>
              </Flex>
              <Typography variant="h4" fontSize="20px">
                ${price}
              </Typography>

              <Box marginY="20px">
                <Divider />
              </Box>

              <Typography variant="h4" sx={{ marginTop: "20px" }}>
                {summary}
              </Typography>
            </Box>

            <Box marginBottom="20px">
              <Typography variant="h4">SHIPPING & RETURNS</Typography>
              <Typography fontWeight="600">
                Free shipping on orders over $100!
              </Typography>
              <Typography>
                For questions about our 30-day return policy, please visit the
                <Link to="/returns"> Returns </Link>page.
              </Typography>
            </Box>

            {/* US & international delivery usually within 5-7 days of shipment. Courier will vary by shipping destination.


See our 30-day return policy here. */}
            <Flex alignItems="center" gap="20px" marginBottom="40px">
              <Flex
                alignItems="center"
                borderRadius="4px"
                border={`1.5px solid ${shades.neutral[300]}`}
                padding="2px 5px"
              >
                <IconButton
                  disabled={Boolean(count === 1)}
                  onClick={() => setCount(Math.max(count - 1, 0))}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ p: "0 5px" }}>{count}</Typography>
                <IconButton onClick={() => setCount(count + 1)}>
                  <AddIcon />
                </IconButton>
              </Flex>
              <Button
                sx={{
                  minWidth: "150px",
                  padding: "11px 40px",
                  background: shades.primary[500],
                  color: "#fff",
                  transition: ".3s",
                  textWrap: "nowrap",
                  "&:hover": {
                    background: shades.primary[300],
                    transform: "scale(1.02)",
                  },
                }}
                onClick={() =>
                  dispatch(addToCart({ item: { ...item, count } }))
                }
              >
                <Typography variant="h4">ADD TO CART</Typography>
              </Button>
            </Flex>
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
        {value === "reviews" && <div>Reviews coming soon...</div>}
        {/* TODO: add reviews section  */}
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
