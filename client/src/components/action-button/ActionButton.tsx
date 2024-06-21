import { Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { shades } from "../../theme";
interface ActionButtonProps {
  linkText: string;
  externalUrl?: string;
}
const ActionButton = (props: ActionButtonProps) => {
  const { linkText, externalUrl } = props;
  const isGreaterThanMobile = useMediaQuery("(min-width:600px");
  const defaultLinkText = "Shop Now";

  return (
    <Typography
      variant="h4"
      fontWeight="bold"
      fontSize={isGreaterThanMobile ? "18px" : "14px"}
      color="#222"
      sx={{
        background: shades.neutral[300],
        padding: isGreaterThanMobile ? "9px 22px" : "8px 20px",
        borderRadius: "30px",
        transition: ".3s",
        border: "solid 3px transparent",
        "&:hover": {
          borderColor: externalUrl
            ? shades.secondary[500]
            : shades.primary[500],
        },
      }}
    >
      {linkText ?? defaultLinkText}
    </Typography>
  );
};

export default ActionButton;
