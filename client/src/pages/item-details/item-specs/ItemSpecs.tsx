import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

import { Flex } from "../../../components";
import { BagType, BagTypeLabels } from "../../../types/item";

// SPECS
// color1
// weight1
// volume1
// material1
// length / width / height1
// max load capacity1
// type (top tube bag) */}

interface ItemSpecsProps {
  bagType: BagType;
  color: string;
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
  const { bagType, color, dimensions, material, maxCapacity, volume, weight } =
    props;

  const isMobile = useMediaQuery("(max-width:600px");

  // TODO: create enum conversion for bagType to label
  const specs = [
    {
      label: "Bag Type",
      text: `${BagTypeLabels[bagType]} bag`,
      icon: "Category",
      value: bagType,
    },
    {
      label: "Dimensions",
      text: `${dimensions} inches`,
      icon: "Straighten",
      value: dimensions,
    },
    {
      label: "Color",
      text: `${color}`,
      icon: "Palette",
      value: color,
    },
    { label: "Weight", text: `${weight} lbs`, icon: "Scale", value: weight },
    { label: "Material", text: material, icon: "Grid4x4", value: material },
    {
      label: "Volume",
      text: `${volume} cubic inches`,
      icon: "Margin",
      value: volume,
    },
    {
      label: "Max Capacity",
      text: `${maxCapacity} lbs`,
      icon: "ArrowCircleUp",
      value: maxCapacity,
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

                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    width={isMobile ? "60%" : "90px"}
                  >
                    {spec.label}:
                  </Typography>

                  <Flex
                    width={isMobile ? "100%" : "auto"}
                    justifyContent={isMobile ? "flex-end" : undefined}
                    sx={{ textAlign: isMobile ? "right" : "left" }}
                  >
                    {spec.value ? (
                      <Typography variant="h4">{spec.text}</Typography>
                    ) : (
                      <Typography>-</Typography>
                    )}
                  </Flex>
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
