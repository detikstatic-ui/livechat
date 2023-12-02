import DOMPurify from "dompurify"
import { GripVertical } from "lucide-react"

import { cn, getUsernameInitials } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type TProps = {
  avatar?: string
  message?: string
  isRight?: boolean
  userName?: string
  time?: string
  status?: string
}

const ChatMessage = (props: TProps) => {
  const {
    avatar = "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    message = "You were the Chosen One!",
    isRight = false,
    userName = "Obi-Wan Kenobi",
    time = "12:45",
    status = "Delivered",
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
        <AvatarImage src={avatar} />
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
          `chat-bubble relative col-start-2 flex min-h-[2.75rem] w-fit min-w-[2.75rem] max-w-[90%] items-start gap-2 rounded-2xl bg-slate-800 px-4 py-2 text-gray-300 ${
            isRight
              ? "chat-end col-start-1 flex-row-reverse rounded-ee-none"
              : "rounded-es-none"
          }`
        )}
      >
        <p dangerouslySetInnerHTML={sanitizedHTML} />
        <div
          className={cn(
            "relative -right-2 -top-0.5 shrink-0 rounded-full bg-white/20 p-1",
            isRight ? "-left-2" : ""
          )}
        >
          <GripVertical className="h-2.5 w-2.5" />
        </div>
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
