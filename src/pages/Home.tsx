import { useState } from "react"

import { cn } from "@/lib/utils"
import ChatArea from "@/components/ChatArea"
import ChatHeader from "@/components/ChatHeader"
import ChatInput from "@/components/ChatInput"
import ChatNetworkStatus from "@/components/ChatNetworkStatus"
import ChatPinned from "@/components/ChatPinned"
import ChatUsers from "@/components/ChatUsers"
import HideChat from "@/components/HideChat"
import OnBoarding from "@/components/OnBoarding"

type HomeProps = {
  onboarding?: boolean
}

const Home = (props: HomeProps) => {
  const { onboarding = false } = props

  const [isChatHidden, setIsChatHidden] = useState(false)
  const [showUsers, setShowUsers] = useState(false)

  return (
    <>
      <div
        className={cn(
          "isolate flex h-full flex-col overflow-hidden rounded border border-neutral-200 transition-all duration-700",
          isChatHidden && "h-0"
        )}
      >
        <ChatHeader showUsers={showUsers} setShowUsers={setShowUsers} />
        <div className="relative isolate z-0 flex h-full min-h-0 flex-col overflow-hidden">
          <ChatPinned className="absolute inset-x-2 top-1.5 z-10 rounded" />
          <ChatArea />
          {showUsers && <ChatUsers />}
        </div>
        <ChatNetworkStatus />
        <ChatInput />
      </div>
      <HideChat isChatHidden={isChatHidden} setIsChatHidden={setIsChatHidden} />
      {onboarding && <OnBoarding />}
    </>
  )
}
export default Home
