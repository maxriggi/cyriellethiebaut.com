import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BASE_PATH = process.env.NODE_ENV === "production" ? "/cyriellethiebaut.com" : "";

export function img(src: string) {
  return `${BASE_PATH}${src}`;
}
