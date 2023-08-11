import { UserWithData, useLogout, useDisconnect } from '@thirdweb-dev/react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { IconExternalLink } from '@/components/ui/icons'

export interface UserMenuProps {
  user: UserWithData;
}

export function UserMenu({ user }: UserMenuProps) {
  const { logout } = useLogout()
  const disconnect = useDisconnect();

  return (
    <div className="flex items-center justify-between">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="pl-0">
            <span className="ml-2">{user.address}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={8} align="start" className="w-[180px]">
          <DropdownMenuItem className="flex-col items-start">
            <div className="w-full text-xs font-medium text-ellipsis overflow-hidden">{user.address}</div>
            <div className="w-full text-xs text-zinc-500 text-ellipsis overflow-hidden">{user.address}</div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full text-xs"
            >
              RAYN Homepage
              <IconExternalLink className="w-3 h-3 ml-auto" />
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              logout()
              disconnect()
            }}
            className="text-xs"
          >
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
