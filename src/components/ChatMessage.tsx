import useStore from "@/context/useStore"
import DOMPurify from "dompurify"
import { Ban, Check, Reply } from "lucide-react"

import { cn, getUsernameInitials, replaceUserMentions } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Icons } from "./Icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

type TProps = {
  avatar?: string
  message?: string
  isRight?: boolean
  userName?: string
  time?: string
  isAdmin?: boolean
  className?: string
  timeClassName?: string
  msgClassName?: string
  contentClassName?: string
  hasAction?: boolean
  children?: React.ReactNode
}

const ChatMessage = (props: TProps) => {
  const { show: showTime } = useStore()
  const {
    avatar = "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    message = "You were the Chosen One!",
    isRight = false,
    userName = "Obi-Wan Kenobi",
    time = "12:45",
    isAdmin = false,
    className,
    timeClassName,
    msgClassName,
    contentClassName,
    hasAction = true,
    children,
  } = props

  // const DOMPurifyHTML = {
  //   __html: DOMPurify.sanitize(message, { USE_PROFILES: { html: true } }),
  // }
  // const sanitizedHTML = replaceUserMentions(DOMPurifyHTML.__html)

  function getSanitizedHTML(input: string): string {
    try {
      const sanitizedInput = DOMPurify.sanitize(input, {
        USE_PROFILES: { html: true },
      })
      return replaceUserMentions(sanitizedInput)
    } catch (error) {
      // Handle error, log it, or return a default value
      console.error("Sanitization error:", error)
      return "" // You might want to return a default value or the original input
    }
  }
  const sanitizedHTML = {
    __html: getSanitizedHTML(message),
  }

  return (
    <div
      className={cn(
        "group relative flex w-full min-w-0 items-start gap-x-4 py-1 pl-6 pr-9 hocus:bg-black/5",
        isRight ? "flex-row-reverse" : "flex-row",
        className
      )}
    >
      <Avatar className={cn(`relative flex h-6 w-6`)}>
        <AvatarImage src={avatar} className="object-cover" />
        <AvatarFallback>{getUsernameInitials(userName)}</AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "grow space-x-2 text-[13px] leading-5",
          isRight ? "text-right" : "",
          contentClassName
        )}
        style={{ wordBreak: "break-word" }}
      >
        {showTime && (
          <time
            className={cn("inline text-xs text-neutral-900/40", timeClassName)}
          >
            {time}
          </time>
        )}
        <span
          className={cn(
            "inline font-semibold text-neutral-900",
            isAdmin ? "rounded-sm bg-yellow-400 px-1 py-0.5" : ""
          )}
        >
          {userName} {isAdmin ? <Check className="inline w-4" /> : ""}
        </span>
        <p
          className={cn("inline text-stone-950 [&>a]:underline", msgClassName)}
          dangerouslySetInnerHTML={sanitizedHTML}
        />
        {children && (
          <div
            className="grid w-full min-w-0 grid-cols-1"
            style={{ margin: "8px 0 0" }}
          >
            {children}
          </div>
        )}
      </div>
      {hasAction && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                "absolute right-2 top-0.5 shrink-0 rounded-full p-1 outline outline-1 outline-transparent transition-all duration-300 hover:outline-black/20 "
              )}
              type="button"
            >
              <Icons.dots className="pointer-events-none" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col gap-1 rounded-sm border border-black/5 bg-white px-5 py-2.5 text-sm text-gray-500 shadow-md">
            <DropdownMenuItem className="flex items-center gap-1.5">
              <Reply strokeWidth={3} className="h-4 w-4" /> Reply
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-1.5">
              <Icons.flag className="h-3 w-3" /> Laporkan
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-1.5">
              <Ban className="h-3.5 w-3.5" strokeWidth={3} /> Blokir
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  )
}
export default ChatMessage
