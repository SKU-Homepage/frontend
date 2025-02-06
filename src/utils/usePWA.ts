interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}

export const isPWA =
  window.matchMedia("(display-mode: standalone)").matches ||
  ("standalone" in navigator && Boolean((navigator as NavigatorWithStandalone).standalone));
