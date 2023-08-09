import { Header } from '@/components/header'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* @ts-ignore */}
      <Header />
      <main className="flex flex-1 flex-col bg-muted/50">{children}</main>
    </div>
  )
}
