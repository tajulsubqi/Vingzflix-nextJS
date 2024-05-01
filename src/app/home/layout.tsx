import { getServerSession } from "next-auth"
import { authOptions } from "../utils/auth"
import { redirect } from "next/navigation"
import Navbar from "../components/Navbar"

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions as any)
  if (!session) {
    redirect("/login")
  }

  return (
    <>
      <Navbar />
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:8">{children}</main>
    </>
  )
}

export default HomeLayout

// layout ini berfungsi ketika user sudah logout maka dia akan kembali ke login
