import React from "react";
import { Flex } from "../flex";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { shades } from "../../theme";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}
const PageHeader = (props: PageHeaderProps) => {
  const { title, subtitle } = props;
  const isDesktop = useMediaQuery("(min-width:900px");
  const isTablet = useMediaQuery("(min-width:600px");

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      marginBottom="20px"
      marginTop="60px"
    >
      <Box
        flex="grow"
        sx={{ whiteSpace: isDesktop ? "nowrap" : undefined }}
        paddingRight="20px"
      >
        <Typography variant={isTablet ? "h1" : "h2"}>{title}</Typography>
      </Box>
      {isDesktop && (
        <Box
          sx={{
            height: "4px",
            background: shades.primary[500],
            width: "100%",
            borderRadius: "4px",
          }}
        ></Box>
      )}
    </Flex>
  );
};

export default PageHeader;
