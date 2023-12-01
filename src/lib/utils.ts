import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getUsernameInitials = (username: string): string => {
  const words = username.split(" ")
  const initials = words
    .map((word) => word[0])
    .join("")
    .toUpperCase()

  return initials
}
