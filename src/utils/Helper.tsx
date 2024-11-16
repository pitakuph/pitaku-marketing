import { GAProps } from "./Types";

export const sendGAEventCustom = ({ action, category, label, value }:GAProps) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }


export function slugToTitle(slug:string) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}