import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  Box,
  Breadcrumbs,
  Button,
  Divider,
  IconButton,
  Rating,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Add, Remove, Share } from "@mui/icons-material";

import Item from "../../components/item/Item";
import { shades } from "../../theme";
import { addToCart } from "../../redux-store";
import { Flex } from "../../components";
import { API_URL, BASE_URL } from "../../environment";
import ItemFeatures from "./item-features/ItemFeatures";
import ItemSpecs from "./item-specs/ItemSpecs";
import ToasterMessage, {
  MessageType,
} from "../../components/toaster-message/ToasterMessage";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [ratingValue, setRatingValue] = useState<number | null>();
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

  const handleAddToCart = () => {
    setShowSuccessMessage(true);
    dispatch(addToCart({ item: { ...item, count } }));
  };

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
              src={`${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
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
                  <Remove />
                </IconButton>
                <Typography sx={{ p: "0 5px" }}>{count}</Typography>
                <IconButton onClick={() => setCount(count + 1)}>
                  <Add />
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
                onClick={handleAddToCart}
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
      <ToasterMessage
        message="Your item has been successfully added to the cart!"
        onClose={setShowSuccessMessage}
        showMessage={showSuccessMessage}
        type={MessageType.success}
      />
    </Box>
  );
};

export default ItemDetails;
