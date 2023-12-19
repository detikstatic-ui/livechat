import useStore from "@/context/useStore"
import { participants } from "@/data/const"
import { ArrowLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { Switch } from "@/components/ui/switch"
import HideChat from "@/components/HideChat"

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
  const {
    show: showTime,
    toggle: timeToogle,
    chatShow,
    toggleChat,
  } = useStore()
  const { showUsers, setShowUsers } = props

  return (
    <div className="z-20 flex shrink-0 items-center gap-2.5 border-b border-neutral-200 bg-white p-4">
      {!showUsers ? (
        <>
          <h1 className="text-base font-semibold text-black-light1">
            Live Chat
          </h1>
          <button
            type="button"
            onClick={() => setShowUsers(!showUsers)}
            className="ml-auto grid h-6 w-6 place-content-center items-center gap-1 rounded-sm text-xs font-semibold text-stone-950 hover:bg-black/10 focus-visible:outline-black/10"
          >
            <Icons.users className="h-5 w-5" />
          </button>
          <HideChat />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className={cn(
                  " grid h-7 w-7 place-content-center rounded-full transition-colors duration-300 hover:bg-black/10 focus-visible:outline-black/10"
                )}
              >
                <Icons.dotsBold className="pointer-events-none" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {chatShow && (
                <>
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
                      <label
                        htmlFor="timestamps"
                        className="pointer-events-none"
                      >
                        Timestamps
                      </label>
                      <Switch
                        id="timestamps"
                        className="pointer-events-none shrink-0"
                        checked={showTime}
                      />
                    </div>
                  </DropdownMenuItem>
                </>
              )}
              <DropdownMenuItem onClick={toggleChat} asChild>
                <div className="flex w-full cursor-pointer items-center gap-2">
                  <Icons.collapse
                    className={cn(
                      "h-5 w-5 transition-all",
                      !chatShow && "rotate-180"
                    )}
                  />
                  {!chatShow ? "Show Chat" : "Hide Chat"}
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      ) : (
        <div className="flex w-full items-center justify-between text-base font-semibold text-black-light1">
          <button
            className="flex items-center gap-2"
            type="button"
            onClick={() => setShowUsers(!showUsers)}
          >
            <span className="grid h-6 w-6 place-content-center rounded-full transition-all duration-200 hover:bg-stone-950 hover:text-white">
              <ArrowLeft className="h-5 w-5" />
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
