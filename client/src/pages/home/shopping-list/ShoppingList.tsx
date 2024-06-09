import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import { RootState, setItems } from "../../../redux-store";
import Item from "../../../components/item/Item";
import { API_URL } from "../../../environment";
import { Flex } from "../../../components";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");
  const items: any[] = useSelector((state: RootState) => state.cart.items);
  const breakPoint = useMediaQuery("(min-width:600px)");

  async function getItems() {
    const items = await fetch(`${API_URL}/items?populate=*`, { method: "GET" });
    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const topRatedItems = items?.filter(
    (item: { attributes: { category: string } }) =>
      item.attributes.category === "topRated"
  );
  const newArrivalsItems = items?.filter(
    (item: { attributes: { category: string } }) =>
      item.attributes.category === "newArrivals"
  );
  const bestSellersItems = items?.filter(
    (item: { attributes: { category: string } }) =>
      item.attributes.category === "bestSellers"
  );

  const handleFilterChange = (
    event: any,
    newFilter: React.SetStateAction<string>
  ) => {
    setFilter(newFilter);
  };

  return (
    <Box width="80%" margin="80px auto">
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={filter}
        onChange={handleFilterChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="newArrivals" />
        <Tab label="BEST SELLERS" value="bestSellers" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>
      <Flex gap="20px" flexWrap="wrap" justifyContent="space-around">
        {filter === "all" &&
          items?.map((item: { name: any; id: any }) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {filter === "newArrivals" &&
          newArrivalsItems?.map((item: { name: any; id: any }) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {filter === "bestSellers" &&
          bestSellersItems?.map((item: { name: any; id: any }) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
        {filter === "topRated" &&
          topRatedItems?.map((item: { name: any; id: any }) => (
            <Item item={item} key={`${item.name}-${item.id}`} />
          ))}
      </Flex>
    </Box>
  );
};

export default ShoppingList;
