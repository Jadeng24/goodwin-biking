import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Divider,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import PageHeader from "../../components/page-header/PageHeader";
import { Flex } from "../../components";
import { ExpandMore } from "@mui/icons-material";
import { shades } from "../../theme";

const FrequentlyAskedQuestions = () => {
  const isMobile = useMediaQuery("(max-width:600px");
  const faqs = [
    {
      question: "What types of bikepacking bags do you offer?",
      answer:
        "We offer a variety of bikepacking bags, including frame bags, handlebar bags, saddle bags, and top tube bags. Each type is designed to fit specific parts of your bike and cater to different storage needs.",
    },
    {
      question: "How do I choose the right bikepacking bag for my needs?",
      answer:
        "Selecting the right bag depends on the type of trip, the amount of gear you plan to carry, and your bike's setup. Our guide can help you decide which bags are best for your adventure.",
    },
    {
      question: "Are your bags waterproof?",
      answer:
        "Yes, most of our bags are made with waterproof materials and zippers to ensure your gear stays dry in all weather conditions. Check the product description for specific details on each bag.",
    },
    {
      question: "How do I install the bikepacking bags on my bike?",
      answer:
        "Each bag comes with detailed installation instructions. We also have video tutorials that walk you through the process step-by-step.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy on all our products. If you're not satisfied with your purchase, you can return it for a full refund or exchange. Please see our return policy page for more details.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship our products worldwide. Shipping rates and times vary depending on your location. Visit our shipping information page for more details.",
    },
    {
      question: "How do I care for and clean my bikepacking bags?",
      answer:
        "Our bags are designed to be durable and easy to maintain. For cleaning, we recommend hand washing with mild soap and water. Avoid using harsh chemicals or machine washing to prolong the life of your bags.",
    },
    {
      question: "Can I use your bikepacking bags for other activities?",
      answer:
        "Absolutely! While our bags are designed for bikepacking, they are versatile enough to be used for other outdoor activities such as hiking, camping, and commuting.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including major credit cards, and other secure payment options. Check our payment information page for a full list of accepted methods.",
    },
    {
      question: "Do you offer discounts for bulk orders or group purchases?",
      answer:
        "Yes, we do offer discounts for bulk orders and group purchases. Please contact our team for more information on pricing and availability.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order has been shipped, you will receive a tracking number via email. You can use this number to track your order on our website or the carrier's website.",
    },
    {
      question: "What materials are used in your bikepacking bags?",
      answer:
        "Our bags are made from high-quality, durable materials such as ripstop nylon, polyester, and waterproof fabrics to withstand tough conditions and heavy use.",
    },
  ];

  return (
    <Box padding={isMobile ? "30px" : "60px"} fontSize="16px">
      <Box marginBottom="40px">
        <PageHeader title="Frequently Asked Questions" />

        <Typography variant="h3" fontSize="18px">
          Welcome to the Goodwin Biking Frequently Asked Questions (FAQ) page!
          Here, you'll find answers to the most common questions about our
          bikepacking gear and bags. <br /> <br /> Whether you're a seasoned
          bikepacker or just starting out, we've got the information you need to
          make the most of your journey. If you don't find what you're looking
          for, feel free to contact us directly for further assistance.
        </Typography>
      </Box>

      <Paper elevation={4} sx={{ padding: "40px 0px" }}>
        <Box marginLeft="22px">
          <Typography variant="h2">Questions</Typography>
        </Box>

        <Flex flexDirection="column" marginTop="20px">
          {faqs &&
            faqs.map((faq) => (
              <Accordion sx={{ paddingLeft: "6px" }}>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    variant="h2"
                    fontSize={isMobile ? "22px" : "26px"}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h3" color={shades.neutral[700]}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          <Box marginTop="40px" paddingX="22px">
            <Typography variant="h3" color={shades.neutral[700]}>
              Not seeing what you are looking for? Feel free to contact us
              directly and we will be happy to help answer any of your
              questions.
            </Typography>
          </Box>
        </Flex>
      </Paper>
    </Box>
  );
};

export default FrequentlyAskedQuestions;
