import { useState } from "react"

import { cn } from "@/lib/utils"
import ChatArea from "@/components/ChatArea"
import ChatHeader from "@/components/ChatHeader"
import ChatInput from "@/components/ChatInput"
import HideChat from "@/components/HideChat"

const Home = () => {
  const [isChatHidden, setIsChatHidden] = useState(false)
  return (
    <>
      <div
        className={cn(
          "isolate flex h-full flex-col overflow-hidden rounded border border-neutral-200 transition-all duration-700",
          isChatHidden && "h-0"
        )}
      >
        <ChatHeader />
        <ChatArea />
        <ChatInput />
      </div>
      <HideChat isChatHidden={isChatHidden} setIsChatHidden={setIsChatHidden} />
    </>
  )
}
export default Home
