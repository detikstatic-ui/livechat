import useStore from "@/context/useStore"
import { ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

const HideChat = () => {
  const chatShow = useStore((state) => state.chatShow)
  const toggleChat = useStore((state) => state.toggleChat)
  // const { chatShow, toggleChat } = useStore()

  return (
    <button
      type="button"
      className="grid h-6 w-6 place-content-center rounded-sm hover:bg-black/10 focus-visible:outline-black/10"
      onClick={toggleChat}
    >
      <ChevronUp
        className={cn("w-5 rotate-180 transition-all", chatShow && "rotate-0")}
      />
    </button>
  )
}
export default HideChat
