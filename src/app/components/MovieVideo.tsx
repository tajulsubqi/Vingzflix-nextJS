import prisma from "../utils/db"
import MovieButton from "./utilities/MovieButton"

const getData = async () => {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      duration: true,
      videoSource: true,
      imageString: true,
      id: true,
      age: true,
      release: true,
      youtubeString: true,
    },
  })

  return data
}

const MovieVideo = async () => {
  const data = await getData()

  return (
    <div className="w-full h-[55vh] lg:h-[60vh] flex justify-start items-center">
      <video
        src={data?.videoSource}
        poster={data?.imageString}
        autoPlay
        muted
        loop
        className="w-full absolute top-0 left-0 object-cover h-[60vh] -z-10 brightness-[60%]"
      ></video>

      <div className="absolute w-[90%] lg:w-[40%] mx-auto">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold">
          {data?.title}
        </h1>
        <p className="text-white text-lg mt-5 line-clamp-3">{data?.overview}</p>

        <div className="flex space-x-3 mt-5">
          <MovieButton
            id={data?.id as number}
            title={data?.title as string}
            duration={data?.duration as number}
            overview={data?.overview as string}
            releaseDate={data?.release as number}
            age={data?.age as number}
            youtubeUrl={data?.youtubeString as string}
          />
        </div>
      </div>
    </div>
  )
}

export default MovieVideo
