"use client"
import { Button } from "@/components/ui/button"
import { Heart, PlayCircle } from "lucide-react"
import PlayVideoModal from "./PlayVideoModal"
import { useState } from "react"

interface MovieCardProps {
  movieId: number
  overview: string
  title: string
  watchListId: string
  watchList: boolean
  youtuber: string
  age: number
  time: number
  year: number
}

const MovieCard = (Props: MovieCardProps) => {
  const { movieId, overview, title, watchListId, watchList, youtuber, age, time, year } =
    Props

  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)} className="-mt-14">
        <PlayCircle className="w-20 h-20" />
      </button>

      <div className="absolute top-5 right-5 z-10">
        {watchList ? (
          <form>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4" />
            </Button>
          </form>
        )}
      </div>

      <div className="p-5 absolute bottom-0 left-0 ">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <p className="text-sm">{year}</p>
          <p className="border py-0.5 px-1 border-gray-200 rounded text-sm">{age}+</p>
          <p className="font-normal text-sm">{time}h</p>
        </div>
        <p className="text-sm line-clamp-1 text-gray-200 font-light">{overview}</p>
      </div>

      {/* PlayVideoModal */}
      <PlayVideoModal
        title={title}
        overview={overview}
        youtubeUrl={youtuber}
        open={open}
        setOpen={setOpen}
        age={age}
        duration={time}
        release={year}
      />
    </>
  )
}

export default MovieCard
