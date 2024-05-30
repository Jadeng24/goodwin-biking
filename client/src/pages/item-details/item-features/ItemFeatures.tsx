import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

//           {/* FEATURES
// Lighweight
// Water-resistant
// double seam ?
// waterproof zippers
// multi-pocket design

const ItemFeatures = () => {
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
          {/* TODO: list out features here from props  */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ItemFeatures;
