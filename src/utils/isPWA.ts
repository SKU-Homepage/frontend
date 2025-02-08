interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}

export const isPWA =
  typeof window !== "undefined" &&
  (window.matchMedia("(display-mode: standalone)").matches ||
    ("standalone" in navigator && Boolean((navigator as NavigatorWithStandalone).standalone)));
