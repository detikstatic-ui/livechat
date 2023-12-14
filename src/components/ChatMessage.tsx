import useStore from "@/context/useStore"
import DOMPurify from "dompurify"
import { Check } from "lucide-react"

import { cn, getUsernameInitials, replaceUserMentions } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Icons } from "./Icons"

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
  role?: "user" | "admin" | "moderator"
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
    role = "user",
    className,
    timeClassName,
    msgClassName,
    contentClassName,
    hasAction = true,
    children,
  } = props

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
            "inline-flex items-center gap-1 font-semibold text-neutral-900",
            isAdmin ? "rounded-sm bg-yellow-400 px-1 py-0.5" : ""
          )}
        >
          {userName}
          {role === "admin" ? (
            <Icons.admin />
          ) : role === "moderator" ? (
            <Check className="inline w-4" />
          ) : (
            ""
          )}
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
        <div
          className={cn(
            "absolute right-2 top-0.5 shrink-0 rounded-full p-1 text-transparent outline outline-1 outline-transparent transition-all duration-300 group-hover:text-inherit"
          )}
        >
          <Icons.dots className="pointer-events-none" />
        </div>
      )}
    </div>
  )
}
export default ChatMessage
