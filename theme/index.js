import { extendTheme } from "@chakra-ui/react"
import Fonts from "../components/Fonts"

export const theme = extendTheme({
    colors: {
      primary: {
        100: "#0B1A38",
        110: "rgba(11, 26, 56, 0.2)"
      },
      secondary: {
        100: "#0061f0"
      },
      lightblue: {
        100: "#218ac2",
        110: "rgba(33, 138, 194, 0.2)"
      },
      white: {
        100: "#ffffff",
        200: "#ffffff",
      }
    },
    fonts: {
        heading: 'EB Garamond Bold',
        body: 'Manrope',
    },
  })