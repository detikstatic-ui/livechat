import { cn, getUsernameInitials } from "@/lib/utils"

import { Icons } from "./Icons"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ScrollArea } from "./ui/scroll-area"

const adminUsers = [
  {
    name: "Luke Skywalker",
    avatar: "https://example.com/luke_avatar.jpg",
    role: "moderator",
  },
  {
    name: "Princess Leia",
    avatar: "https://example.com/leia_avatar.jpg",
    role: "verified",
  },
]

const starWarsCharacters = [
  {
    name: "Darth Vader",
    avatar: "https://example.com/vader_avatar.jpg",
  },

  {
    name: "Han Solo",
    avatar: "https://example.com/han_avatar.jpg",
  },
  {
    name: "Yoda",
    avatar: "https://example.com/yoda_avatar.jpg",
  },
  {
    name: "Obi-Wan Kenobi",
    avatar: "https://example.com/obiwan_avatar.jpg",
  },
  {
    name: "Mace Windu",
    avatar: "https://example.com/mace_avatar.jpg",
  },
  {
    name: "Chewbacca",
    avatar: "https://example.com/chewbacca_avatar.jpg",
  },
  {
    name: "Rey",
    avatar: "https://example.com/rey_avatar.jpg",
  },
  {
    name: "Kylo Ren",
    avatar: "https://example.com/kyloren_avatar.jpg",
  },
]

const ChatUsers = () => {
  return (
    <div className="absolute inset-0 z-10 bg-white">
      <ScrollArea>
        <ul className="flex flex-col gap-2 border-b p-2.5">
          {adminUsers.map((user, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <Avatar className={cn(`h-8 w-8 rounded-full`)}>
                <AvatarImage src={user.avatar} />
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
        </ul>
        <ul className="flex flex-col gap-2 p-2.5">
          {starWarsCharacters.map((user, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <Avatar className={cn(`h-8 w-8 rounded-full`)}>
                <AvatarImage src={user.avatar} />
                <AvatarFallback>
                  {getUsernameInitials(user.name)}
                </AvatarFallback>
              </Avatar>
              <span className="text-gray-500">{user.name}</span>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  )
}
export default ChatUsers
