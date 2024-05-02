import { Typography, useMediaQuery } from "@mui/material";
import { Flex } from "../../../../../components";
import { useNavigate } from "react-router-dom";
import { shades } from "../../../../../theme";

export enum SectionTypes {
  AboutUs = "aboutUs",
  customerCare = "customerCare",
  contactUs = "contactUs",
}
interface FooterSectionProps {
  section: SectionTypes;
}

const FooterSection = (props: FooterSectionProps) => {
  const { section } = props;
  const isMobile = useMediaQuery("(max-width:600px");
  const navigate = useNavigate();

  const sectionLabelsDictionary = {
    [SectionTypes.AboutUs]: {
      title: "About Us",
      links: [
        { label: "Terms & Conditions", navUrl: "/terms" },
        { label: "Privacy Policy", navUrl: "/policy" },
      ],
    },
    [SectionTypes.customerCare]: {
      title: "Customer Care",
      links: [
        { label: "Track Your Order", navUrl: "/orders" },
        { label: "Returns & Refunds", navUrl: "/returns" },
      ],
    },
    [SectionTypes.contactUs]: {
      title: "Contact Us",
      links: [
        { label: "Utah County, Utah, USA", navUrl: undefined },
        { label: "Email: goodwinbiking@gmail.com", navUrl: undefined },
        { label: "(801) 884-3549", navUrl: undefined },
      ],
    },
  };

  const handleOnClick = (navUrl: string | undefined) => {
    if (navUrl) {
      navigate(navUrl);
    }
  };

  return (
    <Flex flexDirection="column" minWidth={isMobile ? "100%" : undefined}>
      <Typography variant="h4" fontWeight="bold" marginBottom="30px">
        <>{sectionLabelsDictionary[section].title}</>
      </Typography>

      <>
        {sectionLabelsDictionary[section] &&
          sectionLabelsDictionary[section].links.map((link) => (
            <Typography
              style={{ cursor: link.navUrl ? "pointer" : "auto" }}
              color={link.navUrl ? shades.primary[500] : "neutral"}
              onClick={() => handleOnClick(link.navUrl)}
              marginBottom="30px"
            >
              {link.label}
            </Typography>
          ))}
      </>
    </Flex>
  );
};

export default FooterSection;
