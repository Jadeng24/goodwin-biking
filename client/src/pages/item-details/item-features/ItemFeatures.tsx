import { ExpandMore, WaterDrop } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { Flex } from "../../../components";
import { shades } from "../../../theme";

//           {/* FEATURES
// Lighweight
// Water-resistant
// double seam ?
// waterproof zippers
// multi-pocket design

interface ItemFeaturesProps {
  features: { text: string; icon: string }[];
}

const MUIcon: {
  [key: string]: SvgIconComponent;
} = require("@mui/icons-material");

const ItemFeatures = (props: ItemFeaturesProps) => {
  const { features = [] } = props;

  const featureItems = features?.map((feature) => {
    const Icon = MUIcon[feature.icon];

    return (
      <Box marginBottom="5px">
        <Flex
          padding="8px 10px"
          //   border={`solid 1px ${shades.neutral[200]}`}
          borderRadius="8px"
          alignItems="center"
          gap="15px"
          width="100%"
          sx={{ opacity: ".65" }}
        >
          <Icon />
          <Typography variant="h4">{feature?.text}</Typography>
        </Flex>
      </Box>
    );
  });

  return (
    <Box marginBottom="10px">
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h4">FEATURES</Typography>
        </AccordionSummary>
        <AccordionDetails>{featureItems}</AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ItemFeatures;
