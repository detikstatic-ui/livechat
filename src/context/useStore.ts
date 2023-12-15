import { create } from "zustand"

type Store = {
  show: boolean
  toggle: () => void
  chatShow: boolean
  toggleChat: () => void
  message: string
  setMessage: (message: string) => void
  maxMessageLength: number
}

const useStore = create<Store>()((set) => ({
  show: true, //timestamp
  toggle: () => set((state) => ({ show: state.show ? false : true })), //toogle timestamp
  chatShow: true,
  toggleChat: () =>
    set((state) => ({ chatShow: state.chatShow ? false : true })),
  message: "",
  maxMessageLength: 200,
  setMessage: (message) => {
    set((state) => ({ message: message.slice(0, state.maxMessageLength) }))
  },
}))

export default useStore
