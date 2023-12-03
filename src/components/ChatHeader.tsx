import { participants } from "@/data/const"
import { ArrowLeft } from "lucide-react"

import { Icons } from "./Icons"

type TProps = {
  showUsers: boolean
  setShowUsers: (show: boolean) => void
}

const ChatHeader = (props: TProps) => {
  const { showUsers, setShowUsers } = props

  return (
    <div className="z-20 flex h-9 shrink-0 items-center border-b border-neutral-200 bg-white px-2.5">
      {!showUsers ? (
        <button
          type="button"
          className="flex items-center gap-1 text-xs font-semibold text-neutral-500"
          onClick={() => setShowUsers(!showUsers)}
        >
          <Icons.users className="h-4 w-4" />
          100 Online
          <span className="block h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"></span>
        </button>
      ) : (
        <div className="flex w-full items-center justify-between text-xs font-semibold text-neutral-500">
          <button
            className="flex items-center gap-2"
            type="button"
            onClick={() => setShowUsers(!showUsers)}
          >
            <span className="grid h-6 w-6 place-content-center rounded-full bg-gray-500">
              <ArrowLeft className="h-4 w-4 text-white" />
            </span>
            Participants
          </button>
          <span>{participants.length}</span>
        </div>
      )}
    </div>
  )
}
export default ChatHeader
