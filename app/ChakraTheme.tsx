import { extendTheme } from "@chakra-ui/react"

const ChakraTheme = extendTheme({
  fonts: {
    butler: `--font-butler`,
    newsreaderDisplay: `--font-newsreader-display`,
    newsreaderText: `--font-newsreader-text`,
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
