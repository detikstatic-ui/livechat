import { useState } from "react"

import ChatTextArea from "@/components/ChatTextArea"

function MainLayout() {
  const [msg, setMsg] = useState<string>("")
  return <ChatTextArea msg={msg} setMsg={setMsg} />
}

export default MainLayout
