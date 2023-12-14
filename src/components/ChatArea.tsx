import { useEffect, useRef, useState } from "react"
import { ArrowDown } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"

import ChatAnnounce from "./ChatAnnounce"
import ChatBlocked from "./ChatBlocked"
import ChatExperience from "./ChatExperience"
import ChatLinkPreview from "./ChatLinkPreview"
import ChatMessage from "./ChatMessage"
import ChatSwiper from "./ChatSwiper"
import { Icons } from "./Icons"
import Modal from "./Modal"

// import ChatSwiper from "./ChatSwiper"

const chatData = [
  {
    userName: "Anakin",
    message: "What kind of nonsense is this",
    time: "12:46",
    avatar: "/images/anakin-avatar.jpg",
  },
  {
    userName: "Anakin",
    message: "Put me on the Council and not make me a Master!??",
    time: "12:46",
    avatar: "/images/anakin-avatar.jpg",
  },
  {
    userName: "Anakin",
    message:
      "That's never been done in the history of the Jedi. It's insulting!",
    time: "12:46",
    avatar: "/images/anakin-avatar.jpg",
  },
  {
    userName: "Obi-Wan Kenobi",
    message: "Calm down, Anakin.",
    time: "12:45",
    isRight: false,
    avatar: "/images/obiwan-avatar.png",
  },
  {
    userName: "Obi-Wan Kenobi",
    message: "You have been given a great honor.",
    time: "12:45",
    isRight: false,
    avatar: "/images/obiwan-avatar.png",
  },
  {
    userName: "Obi-Wan Kenobi",
    message: "To be on the Council at your age.",
    time: "12:45",
    isRight: false,
    avatar: "/images/obiwan-avatar.png",
  },
  {
    userName: "Obi-Wan Kenobi",
    message: "It's never happened before.",
    time: "12:45",
    isRight: false,
    avatar: "/images/obiwan-avatar.png",
  },
  {
    userName: "Obi-Wan Kenobi",
    message: "It's over Anakin, I have the high ground.",
    time: "12:45",
    isRight: false,
    avatar: "/images/obiwan-avatar.png",
  },
  {
    userName: "Anakin",
    message: "You underestimate my power!",
    time: "12:46",
    avatar: "/images/anakin-avatar.jpg",
  },
  {
    userName: "Obi-Wan Kenobi",
    message: "It was said that you would, destroy the Sith, not join them.",
    time: "12:47",
    isRight: false,
    avatar: "/images/obiwan-avatar.png",
  },
  {
    userName: "Obi-Wan Kenobi",
    message: "It was you who would bring balance to the Force",
    time: "12:47",
    isRight: false,
    avatar: "/images/obiwan-avatar.png",
  },
  {
    userName: "Obi-Wan Kenobi",
    message: "Not leave it in Darkness",
    time: "12:47",
    isRight: false,
    avatar: "/images/obiwan-avatar.png",
  },
  {
    userName: "Obi-Wan Kenobi",
    message: "You were the Chosen One!",
    time: "12:47",
    isRight: false,
    avatar: "/images/obiwan-avatar.png",
  },
  {
    userName: "Anakin",
    message: "I hate you!",
    time: "12:48",
    avatar: "/images/anakin-avatar.jpg",
  },
]

const ChatOptions = ({ children }: { children: JSX.Element }) => {
  return (
    <Popover modal={true}>
      <PopoverTrigger className="text-left">{children}</PopoverTrigger>
      <PopoverContent
        align="end"
        alignOffset={14}
        className="relative bottom-8 flex w-fit flex-col gap-1 rounded-sm border border-black/5 bg-white px-0 py-2.5 text-sm text-gray-500 shadow-md"
      >
        <div className="grid min-w-[110px]">
          <PopoverClose aria-label="Close" asChild>
            <button
              type="button"
              onClick={() => {}}
              className="flex items-center gap-1.5 px-2.5 py-1 text-black"
            >
              <Icons.reply /> Balas
            </button>
          </PopoverClose>
          <PopoverClose aria-label="Close" asChild>
            <button
              type="button"
              className="flex items-center gap-1.5 px-2.5 py-1 text-black"
            >
              <Icons.flag /> Laporkan
            </button>
          </PopoverClose>
          <PopoverClose aria-label="Close" asChild>
            <button
              type="button"
              className="flex items-center gap-1.5 px-2.5 py-1 text-black"
            >
              <Icons.ban /> Blokir
            </button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  )
}

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
    <>
      <ScrollArea className="relative flex h-full flex-1 flex-col justify-end bg-white [&>div>div]:h-full">
        <div className="isolate flex h-full flex-col justify-end">
          {chatData.slice(0, 7).map((chat, index) => (
            <ChatOptions key={index}>
              <ChatMessage {...chat} />
            </ChatOptions>
          ))}
          <ChatExperience />
          {chatData.slice(7, 9).map((chat, index) => (
            <ChatOptions key={index}>
              <ChatMessage {...chat} />
            </ChatOptions>
          ))}
          <ChatAnnounce />
          {chatData.slice(9, 14).map((chat, index) => (
            <ChatOptions key={index}>
              <ChatMessage {...chat} />
            </ChatOptions>
          ))}
          <ChatBlocked />

          <ChatMessage
            userName="Moderator"
            message="Artikel Terkait Moto GP"
            time="12:48"
            avatar="/images/leia.jpeg"
            isAdmin={true}
            role="moderator"
            hasAction={false}
          >
            <ChatSwiper />
          </ChatMessage>

          <ChatMessage
            userName="Darth Vader"
            message={`@[Luke Skywalker](luke_skywalker), I AM YOUR FATHER!`}
            time="12:48"
            avatar="/images/luke.jpeg"
            isAdmin={true}
            hasAction={false}
            role="admin"
          ></ChatMessage>
          <ChatMessage
            userName="Moderator"
            message={`Untuk informasi detailnya bisa dilihat di link berikut ya:
              <a href="#">https://sport.detik.com/moto-gp/d-7065304/bagnaia-puas-dengan-motor-baru-ducati-tapi-bisa-lebih-oke-lagi</a>
              Terima kasih semuanya`}
            time="12:48"
            avatar="/images/leia.jpeg"
            isAdmin={true}
            role="moderator"
            hasAction={false}
          >
            <ChatLinkPreview />
          </ChatMessage>
          <div
            className="pointer-events-none"
            aria-hidden="true"
            ref={bottomEl}
          ></div>
          <div className="pointer-events-none sticky bottom-0 z-10 flex h-7 justify-center">
            <button
              type="button"
              onClick={scrollToBottom}
              className={cn(
                "pointer-events-auto relative bottom-2 grid place-content-center rounded-full bg-blue-600 p-1 transition-opacity duration-500",
                isBottomInView && "pointer-events-none opacity-0"
              )}
            >
              <ArrowDown className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </ScrollArea>
      <Modal modalOpen={false} />
    </>
  )
}
export default ChatArea
