import { useState } from "react"
import { Ban, Pin, XCircle } from "lucide-react"

import { cn } from "@/lib/utils"

import ChatMessage from "./ChatMessage"
import { Icons } from "./Icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

type TProps = {
  className?: string
}

const ChatPinned = ({ className }: TProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [isShow, setIsShow] = useState<boolean>(true)
  return (
    <div
      className={cn(
        "relative flex cursor-pointer flex-col gap-2 bg-[#203d6b] p-2.5 text-white",
        isShow ? "" : "hidden",
        className
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {isExpanded && (
        <div className="flex items-center gap-2.5 text-xs font-bold">
          <Pin className="h-4 w-4 -rotate-45" />
          Pinned Chat
          <span className="grid place-content-center rounded-sm bg-orange-600 px-1 text-[7px] leading-3 text-white">
            BARU
          </span>
        </div>
      )}
      <ChatMessage
        className="py-0 pl-0 pr-6"
        msgClassName="text-white line-clamp-1"
        timeClassName="text-slate-500"
        contentClassName={isExpanded ? "line-clamp-none" : "line-clamp-1"}
        time="9:26 AM"
        userName="Master Yoda"
        avatar="/images/yoda.jpeg"
        message="Fear is the path to the dark side. Fear leads to anger; anger leads to
          hate; hate leads to suffering."
        hasAction={false}
        isAdmin={true}
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={cn(
              "absolute right-1 top-1.5 z-10 grid h-7 w-7 place-content-center rounded-full transition-colors duration-300 hover:bg-white/10"
            )}
          >
            <Icons.dotsBold className="pointer-events-none" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <button
              type="button"
              className="flex w-full cursor-pointer gap-2.5"
            >
              <Icons.flag className="h-3 w-3" />
              Report
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <button
              type="button"
              className="flex w-full cursor-pointer gap-2.5"
            >
              <Ban className="h-3.5 w-3.5" strokeWidth={3} />
              Block
            </button>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <button
              type="button"
              className="flex w-full cursor-pointer gap-2.5"
              onClick={() => setIsShow(!isShow)}
            >
              <XCircle className="h-4 w-4" /> Dismiss pinned message
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
export default ChatPinned
