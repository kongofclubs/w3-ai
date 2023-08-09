import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { ThirdwebProvider } from "@thirdweb-dev/react"

import { TooltipProvider } from '@/components/ui/tooltip'

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>
        <ThirdwebProvider activeChain="ethereum" clientId="your-client-id">
          {children}
        </ThirdwebProvider>
      </TooltipProvider>
    </NextThemesProvider>
  )
}
