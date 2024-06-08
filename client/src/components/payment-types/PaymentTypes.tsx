import { Flex } from "../flex";
import { useMediaQuery } from "@mui/material";

import Visa from "../../assets/payment-types/visa.png";
import Mastercard from "../../assets/payment-types/mastercard.png";
import Discover from "../../assets/payment-types/discover.png";
import Amex from "../../assets/payment-types/amex.png";
import Ucb from "../../assets/payment-types/ucb.png";
import Union from "../../assets/payment-types/union.png";

const PaymentTypes = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  const paymentTypeImages1 = [
    { url: Visa, alt: "Visa" },
    { url: Mastercard, alt: "Mastercard" },
    { url: Amex, alt: "American Express" },
  ];
  const paymentTypeImages2 = [
    { url: Discover, alt: "Discover" },
    { url: Ucb, alt: "UCB" },
    { url: Union, alt: "Union Pay" },
  ];

  return paymentTypeImages1 ? (
    <Flex
      width="100%"
      justifyContent="space-between"
      flexDirection={isMobile ? "column" : "row"}
      sx={{ pointerEvents: "none", userSelect: "none" }}
    >
      <Flex
        gap="10px"
        width="100%"
        justifyContent="space-around"
        marginBottom={isMobile ? "20px" : 0}
      >
        {paymentTypeImages1.map((img) => (
          <img src={img.url} alt={img.alt} width="50px" />
        ))}
      </Flex>
      <Flex
        gap="10px"
        width="100%"
        justifyContent="space-around"
        marginBottom={isMobile ? "20px" : 0}
      >
        {paymentTypeImages2.map((img) => (
          <img src={img.url} alt={img.alt} width="50px" />
        ))}
      </Flex>
    </Flex>
  ) : (
    <></>
  );
};

export default PaymentTypes;
