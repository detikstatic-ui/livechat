import { useState } from "react"
import useStore from "@/context/useStore"
import EmojiPicker, { EmojiClickData } from "emoji-picker-react"
import { SendHorizontal } from "lucide-react"

import { cn, getUsernameInitials } from "@/lib/utils"

import ChatTextArea from "./ChatTextArea"
import { Icons } from "./Icons"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const ChatInput = () => {
  const [showPicker, setShowPicker] = useState(false)
  const message = useStore((state) => state.message)
  const setMessage = useStore((state) => state.setMessage)
  const maxChar = useStore((state) => state.maxMessageLength)
  // const { message, setMessage, maxMessageLength: maxChar } = useStore()

  const onEmojiClick = (clickedEmoji: EmojiClickData) => {
    setMessage(message + clickedEmoji.emoji)
    setShowPicker(false)
  }

  return (
    <>
      <form className="relative border-t border-black/10 px-6 py-3">
        {showPicker && (
          <div className="absolute bottom-full left-2 max-w-full">
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>
        )}
        <div className="flex items-start gap-4">
          <Avatar className={cn(`relative mt-0.5 flex h-6 w-6 shrink-0`)}>
            <AvatarImage
              src={"/images/anakin-avatar.jpg"}
              className="object-cover"
            />
            <AvatarFallback>{getUsernameInitials("Anakin")}</AvatarFallback>
          </Avatar>
          <div className="group relative flex grow flex-col">
            <div className="self-start text-sm font-medium text-black/60">
              Anakin
            </div>
            <ChatTextArea msg={message} setMsg={setMessage} />
            <hr className="mt-1 w-full border-t transition-all group-focus-within:border-blue-500" />
          </div>
        </div>
        <div className="mt-3 flex items-center gap-4">
          <button
            type="button"
            className="cursor-pointer rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setShowPicker((val) => !val)}
          >
            <Icons.emoji className="h-6 w-6" />
            <span className="sr-only">Add emoji</span>
          </button>
          <p className="ml-auto text-xs tracking-wide text-gray-500">
            {message.length}/{maxChar}
          </p>
          <button
            type="submit"
            className="flex cursor-pointer justify-center rounded-full text-black-light3 transition-colors hover:text-black dark:text-blue-500 dark:hover:bg-gray-600"
          >
            <SendHorizontal className="h-5 w-5" />
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </form>
    </>
  )
}
export default ChatInput
