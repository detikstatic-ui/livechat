import { Ban, Reply } from "lucide-react"

import { Icons } from "./Icons"

const ChatAction = () => {
  const btnClassName = "flex items-center gap-1.5"

  return (
    <div className="flex flex-col gap-1 rounded-sm bg-white px-5 py-2.5 text-sm font-bold text-gray-500 shadow-sm">
      <button type="button" className={btnClassName}>
        <Reply strokeWidth={3} className="h-4 w-4" /> Reply
      </button>
      <button type="button" className={btnClassName}>
        <Icons.flag className="h-3 w-3" /> Laporkan
      </button>
      <button type="button" className={btnClassName}>
        <Ban className="h-3.5 w-3.5" strokeWidth={3} /> Blokir
      </button>
    </div>
  )
}
export default ChatAction
