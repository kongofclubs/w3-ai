import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { TailwindIndicator } from '@/components/tailwind-indicator'
import { AppProviders } from '@/components/provider'
import { Layout } from '@/components/layout'

import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProviders attribute="class" defaultTheme="system" enableSystem>
      <Layout>
        <main className={cn(
          'font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}>
          <Component {...pageProps} />
        </main>
      </Layout>
      <TailwindIndicator />
    </AppProviders>
  )
}
