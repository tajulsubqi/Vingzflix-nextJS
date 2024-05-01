import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import React from "react"
import GithubButton from "@/app/components/GithubButton"
import GoogleButton from "@/app/components/GoogleButton"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/utils/auth"
import { redirect } from "next/navigation"

const Login = async () => {
  const session = await getServerSession(authOptions)
  console.log(session)

  if (session) {
    return redirect("/home")
  }

  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form action="">
        <h1 className="text-3xl font-semibold text-white">Login</h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full bg-[#333] placeholder:text-xs placeholder:text-gray-400 inline-block"
          />
          {/* <Input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full bg-[#333] placeholder:text-xs placeholder:text-gray-400 inline-block"
        /> */}
          <Button type="submit" variant={"destructive"} className="w-full bg-[#e50914]">
            Sign Up
          </Button>
        </div>
      </form>

      <div className="text-sm text-gray-400 mt-2">
        New to Netflix?
        <Link href="/register" className="ml-1 text-white hover:underline">
          Sign Up Now!
        </Link>
      </div>

      <div className="flex w-full justify-center items-center gap-x-6">
        <GithubButton />
        <GoogleButton />
      </div>
    </div>
  )
}

export default Login
