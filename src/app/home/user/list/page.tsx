import MovieCard from "@/app/components/MovieCard"
import authOptions from "@/app/utils/auth"
import prisma from "@/app/utils/db"
import { getServerSession } from "next-auth"
import Image from "next/image"

const getData = async (userId: string) => {
  const data = await prisma.watchList.findMany({
    where: {
      userId,
    },
    select: {
      Movie: {
        select: {
          title: true,
          age: true,
          duration: true,
          imageString: true,
          overview: true,
          release: true,
          id: true,
          WatchList: true,
          youtubeString: true,
        },
      },
    },
  })
  return data
}

const MyList = async () => {
  const session = await getServerSession(authOptions)
  const data = await getData(session?.user?.email as string)
  return (
    <div>
      <h1 className="text-white text-4xl font-bold underline mt-10 px-5 sm:px-0">
        Watch List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px 5 sm:px-0 mt-10 gap-6">
        {data.map((item) => (
          <div key={item.Movie?.id} className="relative h-60">
            <Image
              src={item.Movie?.imageString as string}
              alt={item.Movie?.title as string}
              width={500}
              height={400}
              className="rounded-sm absolute w-full h-full object-cover"
            />

            <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
              <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
                <Image
                  src={item.Movie?.imageString as string}
                  alt={item.Movie?.title as string}
                  width={800}
                  height={800}
                  className="absolute w-full h-full -z-10 rounded-lg object-cover"
                />

                <MovieCard
                  key={item.Movie?.id}
                  age={item.Movie?.age as number}
                  overview={item.Movie?.overview as string}
                  title={item.Movie?.title as string}
                  time={item.Movie?.duration as number}
                  year={item.Movie?.release as number}
                  watchList={(item.Movie?.WatchList.length as number) > 0 ? true : false}
                  watchListId={item.Movie?.WatchList[0]?.id as string}
                  movieId={item.Movie?.id as number}
                  youtubeUrl={item.Movie?.youtubeString as string}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyList
