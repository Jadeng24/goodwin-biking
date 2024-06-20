import React from "react";
import PageHeader from "../page-header/PageHeader";
import { Flex } from "../flex";
import { useMediaQuery } from "@mui/material";
interface PageSectionProps {
  title: string;
  subtitle?: string;
}

const PageSection = (props: PageSectionProps) => {
  const { title, subtitle } = props;

  const isMobile = useMediaQuery("max-width: 600px");

  return (
    <Flex
      padding={isMobile ? "30px" : "60px"}
      flexDirection="column"
      sx={{ textAlign: isMobile ? "center" : "left" }}
      gap="20px"
    >
      <PageHeader title={title} subtitle={subtitle} />
    </Flex>
  );
};

export default PageSection;
