import { ChevronUp } from "lucide-react"

import { cn } from "@/lib/utils"

interface Props {
  setIsChatHidden: (isChatHidden: boolean) => void
  isChatHidden: boolean
}

const HideChat = (props: Props) => {
  const { isChatHidden, setIsChatHidden } = props
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-1 border-t border-neutral-200 bg-stone-50 px-2.5 py-1 text-center text-xxs text-neutral-500"
      onClick={() => setIsChatHidden(!isChatHidden)}
    >
      {isChatHidden ? "TAMPILKAN CHAT" : "SEMBUNYIKAN CHAT"}
      <ChevronUp
        className={cn("w-4 transition-all", isChatHidden && "rotate-180")}
      />
    </button>
  )
}
export default HideChat
