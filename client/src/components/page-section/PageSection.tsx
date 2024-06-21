import React from "react";
import PageHeader from "../page-header/PageHeader";
import { Flex } from "../flex";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ActionButton from "../action-button/ActionButton";
interface PageSectionProps {
  linkText?: string;
  linkUrl?: string;
  title: string;
  subtitle?: string;
}

const PageSection = (props: PageSectionProps) => {
  const { linkText, linkUrl, title, subtitle } = props;

  const navigate = useNavigate();

  const isMobile = useMediaQuery("max-width: 600px");

  const handleLinkClick = () => {
    navigate(linkUrl ?? "/");
  };

  return (
    <Flex
      padding={isMobile ? "30px" : "60px"}
      flexDirection="column"
      sx={{ textAlign: isMobile ? "center" : "left" }}
      gap="20px"
    >
      <PageHeader title={title} subtitle={subtitle} />
      {linkText && (
        <Flex
          onClick={handleLinkClick}
          sx={{ cursor: "pointer" }}
          marginTop="10px"
        >
          <ActionButton linkText={linkText} />
        </Flex>
      )}
    </Flex>
  );
};

export default PageSection;
