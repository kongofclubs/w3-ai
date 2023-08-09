import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'

export default function Index() {
  const id = nanoid()

  return <Chat id={id} />
}
