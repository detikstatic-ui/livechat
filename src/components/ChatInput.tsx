import { useRef, useState } from "react"
import EmojiPicker, { EmojiClickData } from "emoji-picker-react"

import { useAutosizeTextArea } from "@/lib/hooks"
import { cn, getUsernameInitials } from "@/lib/utils"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const ChatInput = () => {
  const [showPicker, setShowPicker] = useState(false)
  const [message, setMessage] = useState("")
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useAutosizeTextArea(textAreaRef.current, message)

  const onEmojiClick = (clickedEmoji: EmojiClickData) => {
    setMessage((val) => val + clickedEmoji.emoji)
    setShowPicker(false)
  }

  const maxChar = 200

  return (
    <>
      <form className="relative px-6 py-3">
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
          <div className="relative flex grow flex-col items-center">
            <label
              htmlFor="chat"
              className="self-start text-sm font-medium text-black/60"
            >
              Anakin
            </label>
            <textarea
              id="chat"
              rows={1}
              maxLength={maxChar}
              className="peer block max-h-48 w-full resize-none border-none bg-white px-0 pb-0 pt-1 text-sm text-gray-900"
              placeholder="Your message..."
              ref={textAreaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value.slice(0, maxChar))}
              style={{ boxShadow: "none" }}
            ></textarea>
            <hr className="w-full border-t transition-all peer-focus:border-blue-500" />
          </div>
        </div>
        <div className="mt-3 flex items-center gap-4">
          <button
            type="button"
            className="cursor-pointer rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setShowPicker((val) => !val)}
          >
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
              />
            </svg>
            <span className="sr-only">Add emoji</span>
          </button>
          <p className="ml-auto text-xs tracking-wide text-gray-500">
            {message.length}/{maxChar}
          </p>
          <button
            type="submit"
            className="flex cursor-pointer justify-center rounded-full text-blue-600 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
          >
            <svg
              className="h-5 w-5 rotate-90 text-inherit rtl:-rotate-90"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
            </svg>
            <span className="sr-only">Send message</span>
          </button>
        </div>
      </form>
    </>
  )
}
export default ChatInput
