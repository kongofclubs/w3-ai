import * as React from 'react'
import Link from 'next/link'

import { Sidebar, SidebarList, SidebarFooter } from '@/components/navigation'
import {
  IconNextChat,
  IconSeparator,
} from '@/components/ui/icons'
import { ThemeToggle } from '@/components/theme-toggle'
import { ClearHistory } from '@/components/clear-history'
import { UserMenu } from '@/components/user-menu'
import { ConnectWallet, useUser } from '@thirdweb-dev/react'

export function Header() {
  const { user, isLoggedIn } = useUser();

  const clearChats = React.useCallback(async () => {
    await fetch('/api/chat/clear-chats', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ userId: user?.address || '' }),
    })
    .then((response) => response.json())
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, [user?.address])

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full shrink-0 items-center justify-between border-b bg-gradient-to-b from-background/10 via-background/50 to-background/80 px-4 backdrop-blur-xl">
      <div className="flex items-center">
        {isLoggedIn ? (
          <Sidebar>
            <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
              {/* @ts-ignore */}
              <SidebarList userId={user?.address} />
            </React.Suspense>
            <SidebarFooter>
              <ThemeToggle />
              <ClearHistory clearChats={clearChats} />
            </SidebarFooter>
          </Sidebar>
        ) : (
          <Link href="/" target="_blank" rel="nofollow">
            <IconNextChat className="mr-2 h-6 w-6 dark:hidden" inverted />
            <IconNextChat className="mr-2 hidden h-6 w-6 dark:block" />
          </Link>
        )}
        <div className="flex items-center">
          <IconSeparator className="h-6 w-6 text-muted-foreground/50" />
          {isLoggedIn && user ? (
            <UserMenu user={user} />
          ) : (
            <span>Sign to keep chat history</span>
          )}
        </div>
      </div>
      <div className="flex items-center justify-end space-x-2">
        {!isLoggedIn && <ConnectWallet /> }
      </div>
    </header>
  )
}
