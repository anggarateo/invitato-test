import { extendTheme } from "@chakra-ui/react"

const ChakraTheme = extendTheme({
  fonts: {
    butler: `Butler`,
    newsreaderDisplay: `Newsreader Display`,
    newsreaderText: `Newsreader Text`,
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
