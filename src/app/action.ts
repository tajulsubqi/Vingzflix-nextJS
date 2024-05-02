"use server"
import { revalidatePath } from "next/cache"
import prisma from "./utils/db"
import { getServerSession } from "next-auth"
import authOptions from "./utils/auth"

// addToWatchList
export const addToWatchList = async (formData: FormData) => {
  const movieId = formData.get("movieId")
  const pathname = formData.get("pathname") as string
  const session = await getServerSession(authOptions)

  const data = await prisma.watchList.create({
    data: {
      userId: session?.user?.email as string,
      movieId: Number(movieId),
    },
  })

  revalidatePath(pathname)
}

// deleteFromWatchList
export const deleteFromWatchList = async (formData: FormData) => {
  const watchList = formData.get("watchListId") as string
  const pathname = formData.get("pathname") as string

  const data = await prisma.watchList.delete({
    where: {
      id: watchList,
    },
  })

  revalidatePath(pathname)
}
