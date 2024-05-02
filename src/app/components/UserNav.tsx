"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signIn, signOut, useSession } from "next-auth/react"

const UserNav = () => {
  const { data: session, status } = useSession() // Mendapatkan data sesi

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (!session) {
    return <button onClick={() => signIn()}>Sign in</button>
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="h-10 w-10 rounded-full">
            <AvatarImage src={session.user?.image as string} />
            <AvatarFallback className="rounded-full">Jan</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-full font-semibold leading-none">{session.user?.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {session.user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default UserNav
