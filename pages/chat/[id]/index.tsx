import * as React from 'react'
import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { useUser } from '@thirdweb-dev/react'
import { useRouter } from 'next/router'

import { Chat } from '@/components/chat'
import { Chat as ChatType } from '@/lib/types'

export default function ChatPage() {
  const { query } = useRouter();
  const { user, isLoggedIn, isLoading} = useUser()
  const [chat, setChat] = React.useState<ChatType | null>(null)

  React.useEffect(() => {
    (async () => {
      await fetch('/api/chat/get-chat', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ id: query?.id || '', userId: user?.address || '' }),
      })
      .then((response) => response.json())
      .then(({ data }) => {
        console.log(data);
        setChat(data);
      })
      .catch((error) => {
        console.error(error);
      });
    })()
  }, [query?.id, user?.address])

  if (isLoading) {
    return <></>;
  }

  if (!isLoggedIn) {
    redirect(`/`)
  }

  if (!chat) {
    return <></>
  }

  // if (chat?.userId !== user?.address) {
  //   notFound()
  // }

  return <Chat id={chat.id} initialMessages={chat.messages} />
}
