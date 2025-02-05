import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import Providers from "@/utils/Providers";
import { noto_sans_kr } from "@/styles/fonts/noto_sans_kr";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={noto_sans_kr.className}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

const APP_NAME = "SKU PWA";
const APP_DEFAULT_TITLE = "SKU";
const APP_TITLE_TEMPLATE = "%s - SKU";
const APP_DESCRIPTION = "New SKU App";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  initialScale: 1.0,
  themeColor: "#FFFFFF",
};
