import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Divider,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Add, Close, Remove } from "@mui/icons-material";

import {
  RootState,
  decreaseCount,
  increaseCount,
  removeFromCart,
} from "../../../../../redux-store";
import { shades } from "../../../../../theme";
import { Flex } from "../../../../../components";

export const CartItems = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.cartItems);

  const isGreaterThanMobile = useMediaQuery("(min-width:600px)");

  return products ? (
    <>
      {products.map((item: any) => {
        const { name, price, shortDescription, image, longDescription } =
          item?.attributes || {};

        const url: string = image?.data?.attributes?.formats?.medium?.url;

        return (
          <Flex key={`${name}-${item?.id}`} flexDirection="column">
            {/* TODO: key doesn't seem to be working  */}
            <Flex
              padding="15px 0"
              width="100%"
              justifyContent="space-between"
              marginBottom="10px"
              sx={{ borderBottom: `solid 1px ${shades.neutral[500]}` }}
            >
              <Box flex="1 1 40%">
                {/* TODO: make separate component for each item alone */}
                <img
                  alt={name}
                  width="123px"
                  height="164px"
                  src={`http://localhost:1337${url}`} // TODO: don't hardcode localhost with port here
                />
              </Box>

              <Box flex="1 1 60%">
                {/* TODO: make separate component for this */}
                <Flex marginBottom="5px" justifyContent="space-between">
                  <Typography
                    variant={isGreaterThanMobile ? "h3" : "h4"}
                    fontWeight="bold"
                  >
                    {name}
                  </Typography>
                  <IconButton
                    onClick={() => dispatch(removeFromCart({ id: item?.id }))}
                  >
                    <Close />
                  </IconButton>
                </Flex>

                {/* <Typography>{shortDescription}</Typography> */}

                {/* TODO: make component */}
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  margin="15px 0"
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    border={`1.5px solid ${shades.neutral[500]}`}
                  >
                    <IconButton
                      onClick={() => dispatch(decreaseCount({ id: item?.id }))}
                    >
                      <Remove />
                    </IconButton>
                    <Typography>{item?.count}</Typography>
                    <IconButton
                      onClick={() => dispatch(increaseCount({ id: item?.id }))}
                    >
                      <Add />
                    </IconButton>
                  </Box>

                  <Typography fontWeight="bold">${price}</Typography>
                </Flex>
              </Box>
            </Flex>
            <Divider />
          </Flex>
        );
      })}
    </>
  ) : (
    <></>
  );
};
