import { useState } from "react"
import useStore from "@/context/useStore"

import { cn } from "@/lib/utils"
import ChatArea from "@/components/ChatArea"
import ChatHeader from "@/components/ChatHeader"
import ChatInput from "@/components/ChatInput"
import ChatNetworkStatus from "@/components/ChatNetworkStatus"
import ChatPinned from "@/components/ChatPinned"
import ChatUsers from "@/components/ChatUsers"
import OnBoarding from "@/components/OnBoarding"

type HomeProps = {
  onboarding?: boolean
}

const Home = (props: HomeProps) => {
  const { onboarding = false } = props

  const [showUsers, setShowUsers] = useState(false)
  const { chatShow } = useStore()
  return (
    <>
      <div
        className={cn(
          "isolate flex h-full flex-col overflow-hidden rounded border border-neutral-200 "
        )}
      >
        <ChatHeader showUsers={showUsers} setShowUsers={setShowUsers} />
        <div
          className={cn(
            "isolate flex h-full flex-col overflow-hidden transition-all duration-700",
            !chatShow && "h-0"
          )}
        >
          <div className="relative isolate z-0 flex h-full min-h-0 flex-col overflow-hidden">
            <ChatPinned />
            <ChatArea />
            {showUsers && <ChatUsers />}
            <ChatNetworkStatus />
          </div>
          <ChatInput />
        </div>
      </div>
      {onboarding && <OnBoarding />}
    </>
  )
}
export default Home
