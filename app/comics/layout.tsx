import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import BottomNav from "./components/BottomNav";
import {SkeletonTheme} from 'react-loading-skeleton'

export const metadata: Metadata = {
  title: "AlteFlix | Comics",
  description:
    "comics, manga,  anime , read comics , read manga , read anime , upload anime , upload manga, ",
};

export default function ComicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    < main className="bg-black opacity-60 md:opacity-70">
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Navbar />
      <Search />
      {children}
      <BottomNav />  
      </SkeletonTheme>
     </main>
  );
}
