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
import { signOut } from "next-auth/react"

const UserNav = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {/* <Button variant={"ghost"} className="relative h-10 w-10 rounded-full"> */}
          <Avatar className="h-10 w-10 rounded-full">
            <AvatarImage src="https://eilauhzzdczukxqjbmtj.supabase.co/storage/v1/object/public/user%20image/avatar.png" />
            <AvatarFallback className="rounded-full">Jan</AvatarFallback>
          </Avatar>
          {/* </Button> */}
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-full font-semibold leading-none">Jan</p>
              <p className="text-xs leading-none text-muted-foreground">Jan@mailcom</p>
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
