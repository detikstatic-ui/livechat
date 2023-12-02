import { useState } from "react"
import { Pin } from "lucide-react"

import ChatPinnedSwiper from "./ChatPinnedSwiper"

const ChatPinned = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  return (
    <div className="flex flex-col gap-2 border-b border-neutral-200 bg-amber-50 p-2.5 text-neutral-500">
      <div className="flex items-center gap-2.5 text-xs font-bold">
        <Pin className="h-4 w-4 -rotate-45" />
        Pinned Chat
        <span className="grid place-content-center rounded-sm bg-orange-600 px-1 text-[7px] leading-3 text-white">
          BARU
        </span>
        <button
          className="ml-auto text-xxs font-bold leading-3 text-[#465fa8]"
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "SEMBUNYIKAN" : "TAMPILKAN"}
        </button>
      </div>
      {!isExpanded ? (
        <div className="line-clamp-1 text-xs">
          <span className="mr-1.5 font-bold">Master Yoda</span>
          Fear is the path to the dark side. Fear leads to anger; anger leads to
          hate; hate leads to suffering.
        </div>
      ) : (
        <ChatPinnedSwiper />
      )}
    </div>
  )
}
export default ChatPinned
