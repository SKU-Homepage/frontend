import { useEffect, useState } from "react";

interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}

export default function useIsPWA() {
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pwaCheck =
        window.matchMedia("(display-mode: standalone)").matches ||
        ("standalone" in navigator && Boolean((navigator as NavigatorWithStandalone).standalone));

      setIsPWA(pwaCheck);
    }
  }, []);

  return isPWA;
}
