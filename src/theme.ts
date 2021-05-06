import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: theme.colors.yellow,
    secondary: theme.colors.twitter,
  },
  sizes: {
    container: {
      xl: "1265px",
    },
  },
  fonts: {
    body: "Proxima Nova",
    heading: "Proxima Nova",
  },
});
