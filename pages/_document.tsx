import { Html, Head, Main, NextScript } from 'next/document'

import { Toaster } from 'react-hot-toast'

import { fontMono, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <body
        className={cn(
          'font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Toaster />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
