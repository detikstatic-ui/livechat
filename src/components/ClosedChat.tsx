import { Icons } from "./Icons"

const ClosedChat = () => {
  return (
    <div className="relative isolate z-0 grid h-full  min-h-0 place-content-center  overflow-hidden bg-[#F0F0F0]">
      <div className="flex w-60 flex-col items-center gap-2">
        <Icons.padlock />
        <h1 className="mt-3 font-bold">Mohon Maaf</h1>
        <p className="text-center text-xs font-medium text-balance">
          Kami mohon maaf atas ketidaknyamanan Anda. Saat ini live chat ini
          sedang ditutup oleh Admin.
        </p>
      </div>
    </div>
  )
}
export default ClosedChat
