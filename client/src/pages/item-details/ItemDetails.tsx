import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Box, Button, IconButton, Typography } from "@mui/material";
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
    <Box width="80%" margin="80px auto">
      <Box
        display="flex"
        alignItems="flex-start"
        flexWrap="wrap"
        columnGap="40px"
      >
        {/* Item image */}
        <Box flex="1 1 40%" marginBottom="40px">
          <img
            alt={item?.name}
            width="100%"
            height="100%"
            src={`${BASE_URL}${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            style={{ objectFit: "contain" }}
          />
        </Box>
        {/* TODO: add extra images below main image to view  */}

        <Box flex="1 1 50%" marginBottom="40px">
          <Box m="65px 0 25px 0">
            <Flex alignItems="center" justifyContent="space-between">
              <Typography variant="h3">{name}</Typography>
            </Flex>
            <Typography fontSize="20px">${price}</Typography>
            <Typography variant="h4" sx={{ marginTop: "20px" }}>
              {summary}
            </Typography>
          </Box>
          {/* TODO: Add expandable boxes showing categories of information */}
          {/* FEATURES
Lighweight
Water-resistant
double seam ?
waterproof zippers
multi-pocket design



SPECS 
color1
weight1
volume1
material1
length / width / height1
max load capacity1
type (top tube bag) */}
          <Box marginBottom="20px">
            <Typography variant="h4">SHIPPING & RETURNS</Typography>
            <Typography> Free shipping on orders over $100</Typography>
            <Typography>
              For return policy, <Link to="/returns">go here</Link>
            </Typography>
          </Box>

          {/* US & international delivery usually within 5-7 days of shipment. Courier will vary by shipping destination.

For additional information regarding shipping and delivery, click here.

See our 30-day return policy here. */}
          <Box
            display="flex"
            alignItems="center"
            minHeight="50px"
            marginBottom="40px"
          >
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[300]}`}
              marginRight="20px"
              padding="2px 5px"
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: "0 5px" }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              sx={{
                background: shades.primary[500],
                color: "white",
                borderRadius: 0,
                minWidth: "150px",
                padding: "10px 40px",
                transition: ".3s",
                "&:hover": {
                  background: shades.primary[300],
                  transform: "scale(1.02)",
                },
              }}
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            >
              ADD TO CART
            </Button>
          </Box>
          <ItemFeatures />
          <ItemSpecs />
        </Box>
      </Box>

      <Box margin="20px 0">
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

      {/* RELATED ITEMS */}
      <Box mt="50px" width="100%">
        <Typography variant="h3" fontWeight="bold">
          Related Products
        </Typography>
        <Box
          mt="20px"
          display="flex"
          flexWrap="wrap"
          columnGap="1.33%"
          justifyContent="space-between"
        >
          {relatedItems.slice(0, 4).map((item: any, index: number) => (
            <Item key={`${item.name}-${index}`} item={item} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;
