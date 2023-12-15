import { participants } from "@/data/const"

import { cn, getUsernameInitials } from "@/lib/utils"

// import { Icons } from "./Icons"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ScrollArea } from "./ui/scroll-area"

// const adminUsers = [
//   {
//     name: "Luke Skywalker",
//     avatar: "/images/luke.jpeg",
//     role: "moderator",
//   },
//   {
//     name: "Princess Leia",
//     avatar: "/images/leia.jpeg",
//     role: "verified",
//   },
// ]

const ChatUsers = () => {
  return (
    <div className="absolute inset-0 z-10 bg-white">
      <ScrollArea className="h-full w-full">
        {/* <ul className="flex flex-col gap-2 border-b p-2.5">
          {adminUsers.map((user, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <Avatar className={cn(`h-8 w-8 rounded-full`)}>
                <AvatarImage src={user.avatar} className="object-cover" />
                <AvatarFallback>
                  {getUsernameInitials(user.name)}
                </AvatarFallback>
              </Avatar>
              <span className="text-gray-500">{user.name}</span>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                {user.role === "moderator" ? (
                  <>
                    <Icons.moderator className="text-base text-gray-700" />{" "}
                    Moderator
                  </>
                ) : (
                  <>
                    <Icons.verified className="text-base" /> Verified User
                  </>
                )}
              </span>
            </li>
          ))}
        </ul> */}
        <ul className="flex flex-col gap-2 p-2.5">
          {participants.map((user, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <Avatar className={cn(`h-8 w-8 rounded-full`)}>
                <AvatarImage src={user.avatar} className="object-cover" />
                <AvatarFallback>
                  {getUsernameInitials(user.name)}
                </AvatarFallback>
              </Avatar>
              <span className="font-semibold text-gray-500">{user.name}</span>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  )
}
export default ChatUsers
