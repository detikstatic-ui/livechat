import { useState } from "react"
import { Pin, XCircle } from "lucide-react"

import { cn } from "@/lib/utils"

import ChatMessage from "./ChatMessage"
import { Icons } from "./Icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

type TProps = {
  className?: string
  isShowing?: boolean
}

const ChatPinned = ({ className, isShowing = true }: TProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [isShow, setIsShow] = useState<boolean>(isShowing)

  if (!isShow) {
    return null
  }

  return (
    <div
      className={cn(
        "absolute inset-x-2 top-1.5 z-10 flex cursor-pointer flex-col gap-2 rounded bg-livechat-blue p-2.5 text-white transition-all",
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
        msgClassName={cn("text-white")}
        timeClassName="text-gray-400"
        contentClassName={cn(isExpanded ? "line-clamp-none" : "line-clamp-1")}
        time="9:26 AM"
        name="detikTV"
        avatar="https://cdn.detik.net.id/20detik3/images/detiktv.jpg?v=2023121412197"
        message="Fear is the path to the dark side. Fear leads to anger; anger leads to
          hate; hate leads to suffering. Patience you must have, my young Padawan."
        hasAction={false}
        role="admin"
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
        <DropdownMenuContent align="end">
          {/* <DropdownMenuItem asChild>
            <button
              type="button"
              className="flex w-full cursor-pointer gap-2.5 font-medium"
            >
              <Icons.flag />
              Laporkan
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <button
              type="button"
              className="flex w-full cursor-pointer gap-2.5 font-medium"
            >
              <Icons.ban />
              Blokir
            </button>
          </DropdownMenuItem>
          <DropdownMenuSeparator /> */}
          <DropdownMenuItem asChild>
            <button
              type="button"
              className="flex w-full cursor-pointer gap-2.5 font-medium"
              onClick={() => setIsShow(!isShow)}
            >
              <XCircle className="h-5 w-5" /> Tutup pesan
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
export default ChatPinned
