import { Icons } from "./Icons"

const ChatHeader = () => {
  return (
    <div className="flex items-center bg-stone-50 p-2.5">
      <button
        type="button"
        className="flex items-center gap-1 text-xs font-semibold text-neutral-500"
      >
        <Icons.users className="h-4 w-4" />
        100 Online
        <span className="block h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"></span>
      </button>

      {/* <div className="list-btn-member">
			<button type="button">
				<img src="images/icon-arr-left.png" alt="" /> Participants
			</button>
			<span>100</span>
		</div> */}
    </div>
  )
}
export default ChatHeader
