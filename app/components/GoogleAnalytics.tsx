"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      const url = pathname + (searchParams?.toString() || "");
      window.gtag("config", "G-SP9SZ4YDS1", {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
