import { extendTheme } from "@chakra-ui/react"
import "@fontsource/newsreader"
import "@fontsource/cormorant-garamond"

const ChakraTheme = extendTheme({
  fonts: {
    butler: `Cormorant Garamond`,
    newsreaderDisplay: `Newsreader`,
    newsreaderText: `Newsreader`,
    poppins: `--font-poppins`
  },
  colors: {
    primary: '#1a1b1d',
    alt: '#fefefe'
  },
  breakpoints: {
    alt: '1028px'
  }
})

export default ChakraTheme
