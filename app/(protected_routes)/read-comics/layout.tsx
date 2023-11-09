"use client";
import BottomNav from "../comics/components/BottomNav";
import { useRouter } from "next/navigation";
import 'react-loading-skeleton/dist/skeleton.css'

export default function ReadComicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <main className="bg-black min-h-screen  overflow-x-hidden ">
        {children}
        <BottomNav />
    </main>
  );
}
