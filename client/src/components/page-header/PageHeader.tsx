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
    <Flex flexDirection="column" width="100%">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        marginBottom="20px"
        marginTop="100px"
        width="100%"
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
      <Flex>
        <Typography variant={"h3"} fontSize={isDesktop ? "26px" : "22px"}>
          {subtitle}
        </Typography>
      </Flex>
    </Flex>
  );
};

export default PageHeader;
