import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const poppins = Poppins({ weight: "400", subsets: [] });
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
      <body className={poppins.className}>
        <main className='home_page'>
          <Provider>
             {children}
             <ToastContainer/>
          </Provider>
        </main>
      </body>
    </html>
  );
}
