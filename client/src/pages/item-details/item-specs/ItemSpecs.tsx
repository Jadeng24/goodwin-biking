import { ChevronRight, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

import { Flex } from "../../../components";

// SPECS
// color1
// weight1
// volume1
// material1
// length / width / height1
// max load capacity1
// type (top tube bag) */}

interface ItemSpecsProps {
  bagType: string;
  dimensions: string;
  material: string;
  maxCapacity: number;
  volume: number;
  weight: number;
}

const MUIcon: {
  [key: string]: SvgIconComponent;
} = require("@mui/icons-material");

const ItemSpecs = (props: ItemSpecsProps) => {
  const { bagType, dimensions, material, maxCapacity, volume, weight } = props;

  // TODO: create enum conversion for bagType to label
  const specs = [
    { label: "Bag Type", text: `${bagType} bag`, icon: "Category" },
    { label: "Dimensions", text: `${dimensions} inches`, icon: "Straighten" },
    { label: "Weight", text: `${weight} lbs`, icon: "Scale" },
    { label: "Material", text: material, icon: "Grid4x4" },
    { label: "Volume", text: `${volume} cubic inches`, icon: "Margin" },
    {
      label: "Max Capacity",
      text: `${maxCapacity} lbs`,
      icon: "ArrowCircleUp",
    },
  ];
  return (
    <Box marginBottom="10px">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h4">SPECS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box marginBottom="5px">
            {specs.map((spec) => {
              const Icon = MUIcon[spec.icon];

              return (
                <Flex
                  padding="8px 10px"
                  borderRadius="8px"
                  alignItems="center"
                  gap="15px"
                  width="100%"
                  sx={{ opacity: ".65" }}
                >
                  <Icon />
                  <Typography variant="h4" fontWeight="bold" width="90px">
                    {spec.label}:
                  </Typography>
                  <Typography variant="h4">{spec.text}</Typography>
                </Flex>
              );
            })}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ItemSpecs;
