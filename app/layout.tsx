import type { Metadata } from "next";
import { Poppins, Chewy, Architects_Daughter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({ weight: "400", subsets: [] });
const chewy = Chewy({ weight: "400", subsets: ["latin"] });
const arch = Architects_Daughter({ weight: "400", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "AlteFlix",
  description: "A Comic Streaming App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={chewy.className}>
        <main className="home_page">
          {children}
          <ToastContainer />
        </main>
      </body>
    </html>
  );
}
