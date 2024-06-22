import { Typography, useMediaQuery } from "@mui/material";

import { shades } from "../../theme";
import { isExternalUrl } from "../../isExternalUrl";

interface ActionButtonProps {
  linkUrl?: string;
  linkText: string;
}
const ActionButton = (props: ActionButtonProps) => {
  const { linkUrl, linkText } = props;
  const isGreaterThanMobile = useMediaQuery("(min-width:600px");
  const defaultLinkText = "Shop Now";

  const isExternal = isExternalUrl(linkUrl || "");

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
          borderColor: isExternal ? shades.secondary[500] : shades.primary[500],
        },
      }}
    >
      {linkText ?? defaultLinkText}
    </Typography>
  );
};

export default ActionButton;
