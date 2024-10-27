'use client'

import { ChakraProvider } from '@chakra-ui/react'
import ChakraTheme from './ChakraTheme'
import ChakraFonts from './ChakraFonts'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={ChakraTheme}>
    <ChakraFonts />
    {children}
  </ChakraProvider>
}
