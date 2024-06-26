import React from "react";
import PageHeader from "../page-header/PageHeader";
import { Flex } from "../flex";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ActionButton from "../action-button/ActionButton";
interface PageSectionProps {
  linkText?: string;
  linkUrl?: string;
  noPadding?: boolean;
  subtitle?: string;
  title: string;
}

const PageSection = (props: PageSectionProps) => {
  const { linkText, linkUrl, noPadding, title, subtitle } = props;

  const navigate = useNavigate();

  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleLinkClick = () => {
    navigate(linkUrl ?? "/");
  };

  return (
    <Flex
      padding={noPadding ? 0 : isMobile ? "40px" : "60px"}
      flexDirection="column"
      gap="20px"
    >
      <PageHeader title={title} subtitle={subtitle} noPadding={noPadding} />
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
