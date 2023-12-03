import DOMPurify from "dompurify"
import { Check } from "lucide-react"

import { cn, getUsernameInitials } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import ChatAction from "./ChatAction"
import { Icons } from "./Icons"
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
  isAdmin?: boolean
  children?: React.ReactNode
}

const ChatMessage = (props: TProps) => {
  const {
    avatar = "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    message = "You were the Chosen One!",
    isRight = false,
    userName = "Obi-Wan Kenobi",
    time = "12:45",
    isAdmin = false,
    children,
  } = props

  const sanitizedHTML = {
    __html: DOMPurify.sanitize(message, { USE_PROFILES: { html: true } }),
  }

  return (
    <div
      className={cn(
        "group flex w-full min-w-0 items-start gap-x-4 px-6 py-1 hocus:bg-black/5",
        isRight ? "flex-row-reverse" : "flex-row"
      )}
    >
      <Avatar className={cn(`relative flex h-6 w-6`)}>
        <AvatarImage src={avatar} className="object-cover" />
        <AvatarFallback>{getUsernameInitials(userName)}</AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "grow space-x-2 text-[13px] leading-5",
          isRight ? "text-right" : ""
        )}
        style={{ wordBreak: "break-word" }}
      >
        <time className="inline text-xs text-neutral-900/40">{time}</time>
        <span
          className={cn(
            "inline font-semibold text-neutral-900",
            isAdmin ? "rounded-sm bg-yellow-400 px-1 py-0.5" : ""
          )}
        >
          {userName} {isAdmin ? <Check className="inline w-4" /> : ""}
        </span>
        <p
          className="inline text-stone-950 [&>a]:underline"
          dangerouslySetInnerHTML={sanitizedHTML}
        />
        <div
          className="grid w-full min-w-0 grid-cols-1"
          style={{ margin: "8px 0 0" }}
        >
          {children}
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              "shrink-0 rounded-full p-1 outline outline-1 outline-transparent transition-all duration-300 hover:outline-black/20 "
            )}
            type="button"
          >
            <Icons.dots className="pointer-events-none" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent asChild>
          <ChatAction />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
export default ChatMessage
