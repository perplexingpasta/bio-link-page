import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  // title: "Dr. Varun Agarwal MD",
  // description: "Cactus Jack Dermatology",
  // other: {
  //   "twitter:card": "Asclepius 2024",
  //   "og:url": "https://asclepius2024.in",
  //   "og:type": "website",
  // },
  icons: {
    icon: ["/images/favicon.ico"],
    apple: ["/images/apple-touch-icon.png"],
    shortcut: ["/images/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
