import OverviewContext from "@/utils/OverviewContext";
import "./globals.css";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TimelineContext from "@/utils/TimelineContext";
import { ToastContainer } from "react-toastify";

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
      <body className="min-h-full flex flex-col">
        <TimelineContext>
          <OverviewContext>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
            <ToastContainer />
          </OverviewContext>
        </TimelineContext>
      </body>
    </html>
  );
}
