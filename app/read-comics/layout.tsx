"use client";
import BottomNav from "../comics/components/BottomNav";
import { useAppContext } from "../context/context";
import { useRouter } from "next/navigation";
import 'react-loading-skeleton/dist/skeleton.css'

export default function ReadComicsLayout({
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
        {children}
        <BottomNav />
    </main>
  );
}
