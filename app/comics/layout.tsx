"use client";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import BottomNav from "./components/BottomNav";
import { SkeletonTheme } from "react-loading-skeleton";
import { useAppContext } from "../context/context";
import { useRouter } from "next/navigation";
import 'react-loading-skeleton/dist/skeleton.css'

export default function ComicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loggedIn } = useAppContext();
  const router = useRouter();
  if(loggedIn == null) {} ;
  if(loggedIn == true) {}
if(loggedIn == false) {router.push('/auth/login')}

  return (
    <main className="bg-white min-h-screen  overflow-x-hidden ">
      <SkeletonTheme baseColor="#aaa" highlightColor="#ccc">
        <Navbar />
        <Search />
        {children}
        <BottomNav />
      </SkeletonTheme>
    </main>
  );
}
