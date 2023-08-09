import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Providers } from '@/components/providers'
import { Layout } from '@/components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers attribute="class" defaultTheme="system" enableSystem>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <TailwindIndicator />
    </Providers>
  )
}
