import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        color: "grey.900",
        fontFamily: `'Noto Sans KR', sans-serif`,
      },
    },
  },
  textStyles: {
    headline1: {
      fontSize: { lg: "24px", base: "20px", sm: "20px" },
      fontWeight: "bold",
      lineHeight: "32px",
      letterSpacing: "0",
    },
    headline2: {
      fontSize: { lg: "16px", base: "14px", sm: "14px", md: "13px" },
      fontWeight: "semibold",
      lineHeight: "20px",
      letterSpacing: "0",
    },
    subtitle1: {
      fontSize: { lg: "16px", base: "14px", sm: "14px" },
      fontWeight: "normal",
      lineHeight: "24px",
      letterSpacing: "0",
    },
    subtitle2: {
      fontSize: "16px",
      fontWeight: "normal",
      lineHeight: "20px",
      letterSpacing: "0",
    },
    body1: {
      fontSize: { lg: "16px", base: "14px", sm: "14px" },
      fontWeight: "normal",
      lineHeight: "20px",
      letterSpacing: "0",
    },
    body2: {
      fontSize: { lg: "14px", base: "14px", sm: "14px" },
      fontWeight: "normal",
      lineHeight: "20px",
      letterSpacing: "0",
    },
    caption1: {
      fontSize: "12px",
      fontWeight: "semibold",
      lineHeight: "14px",
      letterSpacing: "0",
    },
    profileName: {
      fontSize: "24px",
      fontWeight: "600",
      lineHeight: "32px",
      color: "#252D38",
    },
    primary: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "20px",
      color: "#252D38",
    },
    modalSubTitle: {
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "20px",
      color: "#252D38",
    },
    smallText: {
      color: "grey.300",
      fontSize: { lg: "13px", base: "11px", sm: "11px" },
    },
    profileText: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "24px",
      color: "#252D38",
    },
    profileTextBold: {
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "24px",
      color: "#252D38",
    },
  },
  colors: {
    primary: {
      50: "#EBEFF2",
      200: "#3182F6",
      normal: "#3182F6",
    },
    primaryHover: {
      normal: "#D1D6DB",
    },
    secondary: {},
    grey: {
      30: "#F6F8FA",
      50: "#EBEFF2",
      100: "rgba(0,0,0,0.2)",
      300: "rgba(0,0,0,0.5)",
      info: "#B5BBC2",
    },
    warning: {
      50: "#FEF0DE",
      100: "#FAA131",
    },
    success: {
      normal: "#05C072",
    },
    fail: {
      normal: "#EA7C87",
    },
    brand: {
      200: "#3182F6",
      300: "#3182F6",
      400: "#3182F6",
      500: "#3182F6",
      600: "#3182F6",
      700: "#3182F6",
    },
  },
  breakpoints: {
    sm: "375px",
    md: "1284px",
    lg: "1495px",
    xl: "1400px",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "normal",
      },
      variants: {
        primary: {
          bg: "primary.normal",
          color: "white",
          _hover: {
            bg: "primary.400",
          },
          _disabled: {
            backgroundColor: "primary.300 !important",
            color: "white !important",
            _hover: {
              backgroundColor: "primary.300 !important",
              color: "white !important",
            },
          },
        },
        grey: {
          bg: "grey.50",
          color: "black",
          _hover: {
            bg: "grey.100",
          },
          _disabled: {
            bg: "grey.50",
          },
          _active: {
            bg: "primary.50",
            color: "primary.normal",
            boxShadow: "0 0 0 1px #5E92F5 inset",
            _hover: {
              bg: "#B7DDFA",
            },
          },
        },
        success: {
          bg: "#319795",
          color: "white",
          _hover: {
            opacity: 0.7,
          },
          _disabled: {
            opacity: 0.4,
          },
        },
        warning: {
          bg: "#FFE3E7",
          color: "#EA7C87",
          _hover: {
            opacity: 0.7,
          },
          _disabled: {
            opacity: 0.4,
          },
        },
      },
    },
  },
});

export default theme;
