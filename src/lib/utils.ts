import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import moment from "moment";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

export function formatDate(date: string, format = "DD/MM/YYYY") {
  return moment(date).format(format);
}

export function calculateDateDifference(
  startDate: Date | string,
  endDate: Date | string
) {
  const start = moment(startDate);
  const end = moment(endDate);
  return end.diff(start, "days");
}
