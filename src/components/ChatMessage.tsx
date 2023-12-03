import DOMPurify from "dompurify"
import { GripVertical } from "lucide-react"

import { cn, getUsernameInitials } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import ChatAction from "./ChatAction"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

type TProps = {
  avatar?: string
  message?: string
  isRight?: boolean
  userName?: string
  time?: string
  status?: string
  chatBubbleStyles?: string
  children?: React.ReactNode
}

const ChatMessage = (props: TProps) => {
  const {
    avatar = "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    message = "You were the Chosen One!",
    isRight = false,
    userName = "Obi-Wan Kenobi",
    time = "12:45",
    status = "Delivered",
    chatBubbleStyles,
    children,
  } = props

  const sanitizedHTML = {
    __html: DOMPurify.sanitize(message, { USE_PROFILES: { html: true } }),
  }

  return (
    <div
      className={cn(
        "grid grid-cols-[auto_1fr] place-items-start gap-x-3 py-1",
        isRight && "grid-cols-[1fr_auto] place-items-end"
      )}
    >
      <Avatar
        className={cn(
          `relative col-start-1 row-span-2 inline-flex w-10 self-end ${
            isRight ? "col-start-2" : ""
          }`
        )}
      >
        <AvatarImage src={avatar} className="object-cover" />
        <AvatarFallback>{getUsernameInitials(userName)}</AvatarFallback>
      </Avatar>
      <div
        className={cn(
          `col-start-2 row-start-1 flex items-center gap-1 text-sm ${
            isRight ? "col-start-1" : ""
          }`
        )}
      >
        {userName}
        <time className="text-xs opacity-50">{time}</time>
      </div>
      <div
        className={cn(
          `chat-bubble relative col-start-2 flex min-h-[2.75rem] w-fit min-w-[2.75rem] max-w-[90%] flex-col items-start gap-2 rounded-2xl bg-slate-800 px-4 py-2 text-sm text-gray-300 ${
            isRight ? "chat-end col-start-1 rounded-ee-none" : "rounded-es-none"
          } ${chatBubbleStyles}`
        )}
      >
        <p
          className="[&>a]:underline"
          dangerouslySetInnerHTML={sanitizedHTML}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                "absolute -top-0.5 left-full right-auto shrink-0 rounded-full bg-black/70 p-1",
                isRight ? "left-auto right-full" : ""
              )}
              type="button"
            >
              <GripVertical className="h-2.5 w-2.5" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent asChild>
            <ChatAction />
          </DropdownMenuContent>
        </DropdownMenu>
        {children}
      </div>
      <div
        className={cn(
          `col-start-2 row-start-3 text-sm opacity-50 ${
            isRight ? "col-start-1" : ""
          }`
        )}
      >
        {status}
      </div>
    </div>
  )
}
export default ChatMessage
