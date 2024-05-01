"use client"

import { Button } from "@/components/ui/button"
import { InfoIcon, PlayCircle } from "lucide-react"
import { useState } from "react"
import PlayVideoModal from "../PlayVideoModal"

interface MovieButtonProps {
  overview: string
  youtubeUrl: string
  id: number
  age: number
  title: string
  releaseDate: number
  duration: number
}

const MovieButton = (Props: MovieButtonProps) => {
  const { age, overview, youtubeUrl, id, title, releaseDate, duration } = Props

  const [open, setOpen] = useState(false)

  return (
    <div className="flex space-x-3">
      <Button onClick={() => setOpen(true)} className="text-lg font-medium">
        <PlayCircle className="mr-2 h-6 w-6" />
        Play
      </Button>

      <Button
        onClick={() => setOpen(true)}
        className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white"
      >
        <InfoIcon className="mr-2 h-6 w-6" /> Learn more
      </Button>

      <PlayVideoModal
        open={open}
        setOpen={setOpen}
        age={age}
        overview={overview}
        title={title}
        youtubeUrl={youtubeUrl}
        key={id}
        release={releaseDate}
        duration={duration}
      />
    </div>
  )
}

export default MovieButton
