import { useTheme } from "@emotion/react";

import FooterInfo from "./footer-info/FooterInfo";
import FooterLinkSections from "./footer-link-sections/FooterLinkSections";

import { Flex } from "../../../components";
import PaymentTypes from "../../../components/payment-types/PaymentTypes";
import SocialLinks from "../../../components/social-links/SocialLinks";
import { shades } from "../../../theme";

function Footer() {
  const {
    palette: { info },
  } = useTheme() as any;

  return (
    <Flex
      marginTop="70px"
      paddingBottom="40px"
      background={info.light}
      flexDirection="column"
    >
      <Flex
        width="80%"
        margin="auto"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Flex
          width="100%"
          paddingY="4px"
          borderRadius="8px"
          background="#fff"
          marginTop="40px"
        >
          <SocialLinks />
        </Flex>
        <Flex width="100%">
          <PaymentTypes />
        </Flex>

        <Flex
          width="100%"
          borderBottom={`solid 1px ${shades.neutral[300]} `}
          marginBottom="20px"
        />
        <FooterInfo />

        <FooterLinkSections />
      </Flex>
    </Flex>
  );
}

export default Footer;
