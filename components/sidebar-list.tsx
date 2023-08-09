import * as React from 'react'
import { SidebarActions } from '@/components/sidebar-actions'
import { SidebarItem } from '@/components/sidebar-item'
import { Chat } from '@/lib/types'

export interface SidebarListProps {
  userId?: string
}

export function SidebarList({ userId }: SidebarListProps) {
  const [loading, setLoading] = React.useState(false)
  const [chats, setChats] = React.useState<Chat[]>([])

  React.useEffect(() => {
    (async () => {
      setLoading(true)
      await fetch('/api/chat/get-chats', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      })
      .then((response) => response.json())
      .then(({ data }) => {
        console.log(data);
        setChats(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false)
      });
    })()
  }, [userId])

  const removeChat = React.useCallback(async ({ id }: { id: string }) => {
    await fetch('/api/chat/remove-chat', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ id, userId }),
    })
    .then((response) => response.json())
    .then(({ data }) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, [userId])

  return (
    <div className="flex-1 overflow-auto">
      {chats?.length ? (
        <div className="space-y-2 px-2">
          {chats.map(
            chat =>
              chat && (
                <SidebarItem key={chat?.id} chat={chat}>
                  <SidebarActions
                    chat={chat}
                    removeChat={removeChat}
                  />
                </SidebarItem>
              )
          )}
        </div>
      ) : (
        <div className="p-8 text-center">
          <p className="text-sm text-muted-foreground">{ loading ? 'Loading...' : 'No chat history' }</p>
        </div>
      )}
    </div>
  )
}
