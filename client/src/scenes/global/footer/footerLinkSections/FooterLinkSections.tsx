import { Typography, useMediaQuery } from "@mui/material";
import { Flex } from "../../../../components";
import FooterSection, { SectionTypes } from "./footerSection/FooterSection";

const FooterLinks = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <>
      <FooterSection section={SectionTypes.AboutUs} />
      <FooterSection section={SectionTypes.customerCare} />
      <FooterSection section={SectionTypes.contactUs} />

      {/* <Flex
        flexDirection="column"
        width="clamp(20%, 25%, 30%)"
        minWidth={isMobile ? "100%" : undefined}
      >
        <Typography variant="h4" fontWeight="bold" marginBottom="30px">
          Contact Us
        </Typography>
        <Typography marginBottom="30px">Utah County, Utah, USA</Typography>
        <Typography marginBottom="30px" sx={{ wordWrap: "break-word" }}>
          Email: goodwinbiking@gmail.com
        </Typography>
        <Typography marginBottom="30px">(801) 884-3549</Typography>
      </Flex> */}
    </>
  );
};

export default FooterLinks;
