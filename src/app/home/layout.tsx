import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import Navbar from "../components/Navbar"
import authOptions from "../utils/auth"

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/login")
  }

  return (
    <>
      <Navbar />
      <main className="w-full mx-auto sm:px-8 lg:8 ">{children}</main>
    </>
  )
}

export default HomeLayout

// layout ini berfungsi ketika user sudah logout maka dia akan kembali ke login
