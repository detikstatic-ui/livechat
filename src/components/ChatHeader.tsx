import useStore from "@/context/useStore"
import { participants } from "@/data/const"
import { ArrowLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { Switch } from "@/components/ui/switch"

import { Icons } from "./Icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

type TProps = {
  showUsers: boolean
  setShowUsers: (show: boolean) => void
}

const ChatHeader = (props: TProps) => {
  const { show: showTime, toggle: timeToogle } = useStore()
  const { showUsers, setShowUsers } = props

  return (
    <div className="z-20 flex shrink-0 items-center border-b border-neutral-200 bg-white px-2.5 py-2">
      {!showUsers ? (
        <>
          <div className="flex items-center gap-1 text-xs font-semibold text-stone-950">
            <Icons.users className="h-4 w-4" />
            {participants.length} Online
            <span className="block h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"></span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={cn(
                  "ml-auto grid h-7 w-7 place-content-center rounded-full transition-colors duration-300 hover:bg-black/10 focus-visible:outline-black/10"
                )}
              >
                <Icons.dotsBold className="pointer-events-none" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild>
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center gap-2"
                  onClick={() => setShowUsers(!showUsers)}
                >
                  <Icons.user className="h-5 w-5" />
                  Participants
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={timeToogle} asChild>
                <div className="flex w-full cursor-pointer items-center gap-2">
                  <Icons.time className="h-5 w-5" />
                  <label htmlFor="timestamps" className="pointer-events-none">
                    Timestamps
                  </label>
                  <Switch
                    id="timestamps"
                    className="pointer-events-none shrink-0"
                    checked={showTime}
                  />
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <div className="flex w-full items-center justify-between py-0.5 text-xs font-semibold text-stone-950">
          <button
            className="flex items-center gap-2"
            type="button"
            onClick={() => setShowUsers(!showUsers)}
          >
            <span className="grid h-6 w-6 place-content-center rounded-full bg-stone-950">
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
