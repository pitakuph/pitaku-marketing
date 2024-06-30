import { GAProps } from "./Types";

export const sendGAEventCustom = ({ action, category, label, value }:GAProps) => {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
  