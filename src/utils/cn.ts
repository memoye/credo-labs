import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  try {
    return twMerge(clsx(inputs));
  } catch (error) {
    console.error(error);
    console.warn("Missing clsx/tailwind-merge - falling back to simple merge");
    return inputs
      .filter(Boolean)
      .filter((value) => typeof value === "string")
      .join(" ");
  }
}
