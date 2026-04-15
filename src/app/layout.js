import "./globals.css";
import { Geist } from "next/font/google";

const geist = Geist({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "KinKeeper",
  description: "Friendship management tool",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={geist.className}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
