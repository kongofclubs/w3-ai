import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { ThirdwebProvider } from "@thirdweb-dev/react"
import { Ethereum } from '@thirdweb-dev/chains'

import { TooltipProvider } from '@/components/ui/tooltip'

export function AppProviders({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <TooltipProvider>
        <ThirdwebProvider
          activeChain={Ethereum}
          clientId={process.env.THIRDWEB_CLIENT_ID}
          authConfig={{
            // Set this to your domain to prevent phishing attacks
            domain: "localhost",
            // The URL of your Auth API
            authUrl: "/api/auth",
          }}
        >
          {children}
        </ThirdwebProvider>
      </TooltipProvider>
    </NextThemesProvider>
  )
}
