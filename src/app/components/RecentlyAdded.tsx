import Image from "next/image"
import prisma from "../utils/db"
import MovieCard from "./MovieCard"

const getData = async () => {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      imageString: true,
      WatchList: true,
      youtubeString: true,
      age: true,
      release: true,
      duration: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  })

  return data
}

const RecentlyAdded = async () => {
  const data = await getData()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
      {data.map((item) => (
        <div key={item.id} className="relative h-48">
          <Image
            src={item.imageString}
            alt={item.title}
            width={500}
            height={400}
            className="rounded-sm absolute w-full h-full object-cover"
          />

          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
              <Image
                src={item.imageString}
                alt={item.title}
                width={800}
                height={800}
                className="absolute w-full h-full -z-10 rounded-lg object-cover"
              />

              {/* Movie Card */}
              <MovieCard
                movieId={item.id}
                overview={item.overview}
                title={item.title}
                watchListId={item.WatchList[0]?.id}
                youtuber={item.youtubeString}
                watchList={item.WatchList.length > 0 ? true : false}
                age={item.age}
                year={item.release}
                time={item.duration}
                key={item.id}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecentlyAdded
