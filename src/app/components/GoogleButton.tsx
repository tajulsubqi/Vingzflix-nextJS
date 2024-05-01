"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import React from "react"
import GoogleIcon from "../../../public/google.svg"
import { signIn } from "next-auth/react"
import { redirect } from "next/navigation"

const GoogleButton = () => {
  const googleSignIn = () => {
    signIn("google")
    redirect("/home")
  }

  return (
    <Button onClick={googleSignIn} variant={"outline"} className="w-1/5 mt-4 gap-2">
      <Image src={GoogleIcon} alt="google" className="w-7" />
    </Button>
  )
}

export default GoogleButton
