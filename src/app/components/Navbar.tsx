"use client"

import Image from "next/image"
import Link from "next/link"
import logo from "../../../public/vingzflix.png"
import { usePathname } from "next/navigation"
import { Bell, Search } from "lucide-react"
import UserNav from "./UserNav"

interface LinkProps {
  name: string
  href: string
}

const links: LinkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Tv Shows", href: "/home/shows" },
  { name: "Movies", href: "/home/movies" },
  { name: "Recently Added", href: "/home/recently" },
  { name: "My List", href: "/home/user/list" },
]

const Navbar = () => {
  const pathName = usePathname()

  return (
    <nav className="w-full mx-auto items-center justify-between px-5 sm:px-6 py-5 lg:px-8 flex">
      <div className="flex items-center">
        <Link href={"/home"} className="w-32 md:w-44">
          <Image src={logo} alt="logo" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {links.map((item, idx) => (
            <div key={idx}>
              {pathName === item.href ? (
                <li>
                  <Link
                    href={item.href}
                    className="text-white underline font-semibold text:sm md:text-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href={item.href}
                    className="text-gray-400 font-normal text-sm md:text-lg"
                  >
                    {item.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 md:w-7 md:h-7 text-gray-300 cursor-pointer" />
        <Bell className="w-5 h-5 md:w-7 md:h-7 text-gray-300 cursor-pointer" />
        <UserNav />
      </div>
    </nav>
  )
}

export default Navbar
