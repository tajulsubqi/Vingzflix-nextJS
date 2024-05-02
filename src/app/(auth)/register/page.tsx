import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import React from "react"
import GithubButton from "@/app/components/utilities/GithubButton"
import GoogleButton from "@/app/components/utilities/GoogleButton"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import authOptions from "@/app/utils/auth"

const Register = async () => {
  const session = await getServerSession(authOptions)
  console.log(session)

  if (session) {
    redirect("/home")
  }

  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form method="post" action="/api/auth/signin">
        <h1 className="text-3xl font-semibold text-white">Sign Up</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full bg-[#333] placeholder:text-xs placeholder:text-gray-400 inline-block"
          />

          <Button type="submit" variant={"destructive"} className="w-full bg-[#e50914]">
            Sign Up
          </Button>
        </div>
      </form>

      <div className="text-sm text-gray-400 mt-2">
        Already Have a account?
        <Link href="/login" className="ml-1 text-white hover:underline">
          Log in Now!
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-6">
        <GithubButton />
        <GoogleButton />
      </div>
    </div>
  )
}

export default Register
