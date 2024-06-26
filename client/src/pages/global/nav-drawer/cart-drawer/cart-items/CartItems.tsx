import { useDispatch, useSelector } from "react-redux";

import { Box, Divider, IconButton, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

import {
  RootState,
  decreaseCount,
  increaseCount,
  removeFromCart,
} from "../../../../../redux-store";
import { shades } from "../../../../../theme";
import { Flex } from "../../../../../components";
import { useNavigate } from "react-router-dom";
import { closeNavMenus } from "../../../../../redux-store/navReducer";

export const CartItems = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state: RootState) => state.cart.cartItems);

  return products ? (
    <Box
      sx={{
        borderTop: `solid 1px ${shades.neutral[500]}`,
        minHeight: "calc(66% - 44px)",
      }}
    >
      {products.map((item: any) => {
        const { name, price, shortDescription, image, longDescription } =
          item?.attributes || {};

        const url: string = image?.data?.attributes?.formats?.medium?.url || "";

        const handleCartItemClick = () => {
          navigate(`/item/${item.id}`);
          dispatch(closeNavMenus({}));
        };

        return (
          <Flex key={`${name}-${item?.id}`} flexDirection="column">
            <Flex
              paddingY="15px"
              width="100%"
              justifyContent="space-between"
              marginY="10px"
              sx={{ borderBottom: `solid 1px ${shades.neutral[500]}` }}
            >
              {/* Left side  */}
              <Flex gap="20px" width="70%">
                <img
                  alt={name}
                  onClick={handleCartItemClick}
                  src={`${url}`}
                  style={{
                    cursor: "pointer",
                    maxWidth: "120px",
                    maxHeight: "150px",
                  }}
                />

                <Flex flexDirection="column" gap="10px">
                  <Typography variant="h3" fontSize="16px" fontWeight="bold">
                    {name}
                    {/* TODO: add - size / capacity etc here */}
                  </Typography>

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
                </Flex>
              </Flex>

              {/* Right Side  */}
              <Flex
                flexDirection="column"
                justifyContent="space-between"
                alignItems="flex-end"
                width="25%"
                gap="6px"
              >
                <Typography variant="h3" fontSize="14px" fontWeight="bold">
                  ${price}
                </Typography>

                <Flex
                  paddingY="4px"
                  onClick={() => dispatch(removeFromCart({ id: item?.id }))}
                  sx={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  <Typography
                    variant="h4"
                    fontSize="13px"
                    fontWeight="semibold"
                  >
                    REMOVE
                  </Typography>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        );
      })}
    </Box>
  ) : (
    <></>
  );
};
