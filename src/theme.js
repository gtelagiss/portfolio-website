import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
  fonts: {
    body: "Courier New, monospace", // Add "monospace" to the font-family
  },
});

export default theme;
