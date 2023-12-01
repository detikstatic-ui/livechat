import { useEffect, useRef, useState } from "react"
import { ArrowDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

import ChatAnnounce from "./ChatAnnounce"
import ChatBlocked from "./ChatBlocked"
import ChatExperience from "./ChatExperience"
import ChatMessage from "./ChatMessage"

const chatData = [
  {
    userName: "Anakin",
    message: "What kind of nonsense is this",
    time: "12:46",
    status: "Seen at 12:46",
    isRight: true,
    avatar: "/images/anakin-avatar.jpg",
  },
  {
    userName: "Anakin",
    message: "Put me on the Council and not make me a Master!??",
    time: "12:46",
    status: "Seen at 12:46",
    isRight: true,
    avatar: "/images/anakin-avatar.jpg",
  },
  {
    userName: "Anakin",
    message:
      "That's never been done in the history of the Jedi. It's insulting!",
    time: "12:46",
    status: "Seen at 12:46",
    isRight: true,
    avatar: "/images/anakin-avatar.jpg",
  },
  {
    userName: "Obi-Wan Kenobi",
    message: "Calm down, Anakin.",
    time: "12:45",
    status: "Delivered",
    isRight: false,
    avatar: "/images/obiwan-avatar.png",
  },
  {
    userName: "Obi-Wan Kenobi",
    message: "You have been given a great honor.",
    time: "12:45",
    status: "Delivered",
    isRight: false,
    avatar: "/images/obiwan-avatar.png",
  },
  {
    userName: "Obi-Wan Kenobi",
    message: "To be on the Council at your age.",
    time: "12:45",
    status: "Delivered",
    isRight: false,
    avatar: "/images/obiwan-avatar.png",
  },
  {
    userName: "Obi-Wan Kenobi",
    message: "It's never happened before.",
    time: "12:45",
    status: "Delivered",
    isRight: false,
    avatar: "/images/obiwan-avatar.png",
  },
  {
    userName: "Obi-Wan Kenobi",
    message: "It's over Anakin,<br />I have the high ground.",
    time: "12:45",
    status: "Delivered",
    isRight: false,
    avatar: "/images/obiwan-avatar.png",
  },
  {
    userName: "Anakin",
    message: "You underestimate my power!",
    time: "12:46",
    status: "Seen at 12:46",
    isRight: true,
    avatar: "/images/anakin-avatar.jpg",
  },
  {
    userName: "Obi-Wan Kenobi",
    message: "It was said that you would, destroy the Sith, not join them.",
    time: "12:47",
    status: "Delivered",
    isRight: false,
    avatar: "/images/obiwan-avatar.png",
  },
  {
    userName: "Obi-Wan Kenobi",
    message: "It was you who would bring balance to the Force",
    time: "12:47",
    status: "Delivered",
    isRight: false,
    avatar: "/images/obiwan-avatar.png",
  },
  {
    userName: "Obi-Wan Kenobi",
    message: "Not leave it in Darkness",
    time: "12:47",
    status: "Delivered",
    isRight: false,
    avatar: "/images/obiwan-avatar.png",
  },
  {
    userName: "Obi-Wan Kenobi",
    message: "You were the Chosen One!",
    time: "12:47",
    status: "Delivered",
    isRight: false,
    avatar: "/images/obiwan-avatar.png",
  },
  {
    userName: "Anakin",
    message: "I hate you!",
    time: "12:48",
    status: "Seen at 12:46",
    isRight: true,
    avatar: "/images/anakin-avatar.jpg",
  },
]

const ChatArea = () => {
  const [isBottomInView, setIsBottomInView] = useState(false)
  const bottomEl = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    bottomEl?.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsBottomInView(entry.isIntersecting),
      { rootMargin: "0px 0px 0px 0px", threshold: 1.0 }
    )

    if (bottomEl.current) {
      observer.observe(bottomEl.current)
    }
    scrollToBottom()

    return () => {
      if (bottomEl.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(bottomEl.current)
      }
    }
  }, [])

  return (
    <ScrollArea className="relative flex h-full flex-1 flex-col justify-end bg-zinc-200 px-2 [&>[data-radix-scroll-area-viewport]>*]:h-full">
      <div className="flex h-full flex-col justify-end">
        <ChatAnnounce />
        {chatData.slice(0, 7).map((chat, index) => (
          <ChatMessage key={index} {...chat} />
        ))}
        <ChatExperience />
        {chatData.slice(7, 9).map((chat, index) => (
          <ChatMessage key={index} {...chat} />
        ))}
        <ChatBlocked />
        {chatData.slice(9, 14).map((chat, index) => (
          <ChatMessage key={index} {...chat} />
        ))}
        <div
          className="pointer-events-none"
          aria-hidden="true"
          ref={bottomEl}
        ></div>
        <div className="sticky bottom-0 flex h-7 justify-center">
          <button
            type="button"
            onClick={scrollToBottom}
            className={cn(
              "relative bottom-2 grid place-content-center rounded-full bg-blue-600 p-1 transition-opacity duration-500",
              isBottomInView && "pointer-events-none opacity-0"
            )}
          >
            <ArrowDown className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </ScrollArea>
  )
}
export default ChatArea
