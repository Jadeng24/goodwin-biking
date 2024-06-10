import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

import { Flex } from "../../../components";

interface ItemFeaturesProps {
  features: { text: string; icon: string }[];
}

const MUIcon: {
  [key: string]: SvgIconComponent;
} = require("@mui/icons-material");

const ItemFeatures = (props: ItemFeaturesProps) => {
  const { features = [] } = props;

  const renderItems = features?.map((feature) => {
    const Icon = MUIcon[feature.icon];

    return (
      <Box marginBottom="5px">
        <Flex
          padding="8px 10px"
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
        <AccordionDetails>
          {features?.length ? renderItems : <Typography>-</Typography>}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ItemFeatures;

// example JSON data for BE
// {
//     "features": [
//       {
//         "text": "Fits most bike frames",
//         "icon": "Straighten"
//       },
//       {
//         "text": "Water-resistant shell",
//         "icon": "WaterDrop"
//       },
//       {
//         "text": "Center compartment divider",
//         "icon": "VerticalAlignCenter"
//       },
//       {
//         "text": "Wallet pocket",
//         "icon": "Wallet"
//       },
//       {
//         "text": "Hydration-pack compatible",
//         "icon": "LocalDrink"
//       },
//       {
//         "text": "Double-seamed zippers",
//         "icon": "Compress"
//       },
//       {
//         "text": "Reflective stripping",
//         "icon": "Fluorescent"
//       }
//     ]
//   }
