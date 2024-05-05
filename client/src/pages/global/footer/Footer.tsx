import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";

import { Flex } from "../../../components";
import FooterInfo from "./footer-info/FooterInfo";
import FooterLinkSections from "./footer-link-sections/FooterLinkSections";

function Footer() {
  const {
    palette: { info },
  } = useTheme() as any;

  return (
    <Flex marginTop="70px" padding="40px 0" background={info.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <FooterInfo />

        <FooterLinkSections />
      </Box>
    </Flex>
  );
}

export default Footer;
