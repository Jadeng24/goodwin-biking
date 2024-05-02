import { createTheme } from "@mui/material/styles";

export const myPalette = {
  pumpkin: {
    100: "#ffe1cc",
    200: "#ffc399",
    300: "#ffa666",
    400: "#ff8833",
    500: "#ff6a00",
    600: "#cc5500",
    700: "#994000",
    800: "#662a00",
    900: "#331500",
  },
  antiflashWhite: {
    100: "#fbfbfb",
    200: "#f7f7f7",
    300: "#f3f3f3",
    400: "#efefef",
    500: "#ebebeb",
    600: "#bcbcbc",
    700: "#8d8d8d",
    800: "#5e5e5e",
    900: "#2f2f2f",
  },
  sliver: {
    100: "#f2f2f2",
    200: "#e6e6e6",
    300: "#d9d9d9",
    400: "#cdcdcd",
    500: "#c0c0c0",
    600: "#9a9a9a",
    700: "#737373",
    800: "#4d4d4d",
    900: "#262626",
  },
  biceBlue: {
    100: "#d8e2ed",
    200: "#b0c5db",
    300: "#89a8c9",
    400: "#618bb7",
    500: "#3a6ea5",
    600: "#2e5884",
    700: "#234263",
    800: "#172c42",
    900: "#0c1621",
  },
  polynesianBlue: {
    100: "#ccdcea",
    200: "#99b8d6",
    300: "#6695c1",
    400: "#3371ad",
    500: "#004e98",
    600: "#003e7a",
    700: "#002f5b",
    800: "#001f3d",
    900: "#00101e",
  },
};

// #ff6a00;
// #ebebeb;
// #c0c0c0;
// #3a6ea5;
// #004e98;
export const shades = {
  // To change these values, type a #222222 then cmd K + cmd G to generate - from tailwind shades plugin
  primary: myPalette.biceBlue,
  secondary: myPalette.pumpkin,
  neutral: myPalette.sliver,
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    info: {
      // neutral replaced with info
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ["Fauna One", "sans-serif"].join(","),
    fontSize: 11,
    h1: { fontFamily: ["Cinzel", "sans-serif"].join(","), fontSize: 48 },
    h2: { fontFamily: ["Cinzel", "sans-serif"].join(","), fontSize: 36 },
    h3: { fontFamily: ["Cinzel", "sans-serif"].join(","), fontSize: 20 },
    h4: { fontFamily: ["Cinzel", "sans-serif"].join(","), fontSize: 14 },
  },
});
