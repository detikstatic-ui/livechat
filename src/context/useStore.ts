import { create } from "zustand"

type Store = {
  show: boolean
  toggle: () => void
  chatShow: boolean
  toggleChat: () => void
}

const useStore = create<Store>((set) => ({
  show: true,
  toggle: () => set((state) => ({ show: state.show ? false : true })),
  chatShow: true,
  toggleChat: () =>
    set((state) => ({ chatShow: state.chatShow ? false : true })),
}))

export default useStore
