"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface PlayVideoModalProps {
  setOpen: (state: boolean) => void
  open: boolean
  overview: string
  title: string
  youtubeUrl: string
  age: number
  release: number
  duration: number
}

const PlayVideoModal = (Props: PlayVideoModalProps) => {
  const { setOpen, overview, open, title, youtubeUrl, age, release, duration } = Props

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="line-clamp-3">{overview}</DialogDescription>
          <div className="flex gap-x-2 items-center">
            <p>{release}</p>
            <p className="border py-0,5 px-1 border-gray-300 rounded">{age}</p>
            <p>{duration}</p>
          </div>
        </DialogHeader>
        <iframe src={youtubeUrl} height={250} className="w-full"></iframe>
      </DialogContent>
    </Dialog>
  )
}

export default PlayVideoModal
