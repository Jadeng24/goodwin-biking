import { Typography, useMediaQuery } from "@mui/material";

import { Flex } from "../flex";

const Copywrite = () => {
  const isMobile = useMediaQuery("(max-width:600px");

  return (
    <Flex width="100%" sx={{ opacity: ".65" }}>
      {isMobile ? (
        <Flex
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          gap="5px"
          width="100%"
        >
          <Typography variant="h4" fontWeight="600">
            © Copyright 2024 Goodwin Biking LLC
          </Typography>
          <Typography variant="h4">
            All products listed are property of Goodwinbiking.com - All Rights
            Reserved.
          </Typography>
        </Flex>
      ) : (
        <Typography variant="h4">
          © Copyright 2024 Goodwin Biking LLC - All products listed are property
          of Goodwinbiking.com - All Rights Reserved.
        </Typography>
      )}
    </Flex>
  );
};

export default Copywrite;
