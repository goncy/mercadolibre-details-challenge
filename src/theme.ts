import {extendTheme, theme} from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: {
      50: "#FFF9BD",
      100: "#FFF693",
      200: "#FFF693",
      300: "#FFF583",
      400: "#FFF372",
      500: "#fff159",
      600: "#E6D950",
      700: "#CCC147",
      800: "#BFB543",
      900: "#BFB543",
    },
    secondary: theme.colors.messenger,
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
  components: {
    Button: {
      sizes: {
        lg: {
          fontSize: "md",
        },
      },
    },
    Input: {
      parts: ["field"],
      defaultProps: {
        focusBorderColor: "none",
      },
      variants: {
        filled: {
          field: {
            borderRadius: "sm",
            color: "blackAlpha.800",
            backgroundColor: "white",
            ":hover, :focus": {
              backgroundColor: "white",
            },
          },
        },
      },
    },
  },
});
