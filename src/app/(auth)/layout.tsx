import Image from "next/image"
import React from "react"
import Background from "../../../public/login_background.jpg"
import Logo from "../../../public/vingzflix.png"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-screen w-full flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={Background}
        alt="background"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />

      <Image
        src={Logo}
        alt="logo"
        width={200}
        height={200}
        priority
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
      />
      {children}
    </div>
  )
}

export default AuthLayout
