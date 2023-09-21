import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({
  preload: true,
  subsets: ["latin"],
  weight: ["100", "500"],
});

export const metadata: Metadata = {
  title: "U-Turn Robotics",
  description: "FRC Robotics team",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>{children}</body>
    </html>
  );
}
