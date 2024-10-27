'use client'

import { ChakraProvider } from '@chakra-ui/react'
import ChakraTheme from './ChakraTheme'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={ChakraTheme}>{children}</ChakraProvider>
}
