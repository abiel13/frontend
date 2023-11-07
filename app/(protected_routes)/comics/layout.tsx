"use client";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import BottomNav from "./components/BottomNav";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ComicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="background-gradient text-white min-h-screen  overflow-x-hidden ">
      <SkeletonTheme baseColor="#aaa" highlightColor="#ccc">
        <Navbar />
      
        {children}
        <BottomNav />
      </SkeletonTheme>
    </main>
  );
}
