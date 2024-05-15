import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const wait = async (delayInMs: number) =>
  new Promise((res) => setTimeout(res, delayInMs));
