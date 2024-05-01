"use client"
import { Button } from "@/components/ui/button"
import { GithubIcon } from "lucide-react"
import { signIn } from "next-auth/react"
import { redirect } from "next/navigation"
import React from "react"

const GithubButton = () => {
  const githubLogin = () => {
    signIn("github")
    redirect("/home")
  }

  return (
    <>
      <Button onClick={githubLogin} variant={"outline"} className="w-1/5 mt-4 gap-2">
        <GithubIcon className="w-5 h-5" />
      </Button>
    </>
  )
}

export default GithubButton
