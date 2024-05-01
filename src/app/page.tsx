import { redirect } from "next/navigation"
import { authOptions } from "./utils/auth"
import { getServerSession } from "next-auth"

const Page = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    return redirect("/login")
  } else {
    return redirect("/home")
  }
}
export default Page
