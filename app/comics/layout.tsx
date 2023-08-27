"use client";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import BottomNav from "./components/BottomNav";
import { SkeletonTheme } from "react-loading-skeleton";
import { useAppContext } from "../context/context";
import { useRouter } from "next/navigation";

export default function ComicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loggedIn } = useAppContext();
  const router = useRouter();
  if(loggedIn == null) {console.log(loggedIn)} ;
  if(loggedIn == true) {console.log(loggedIn)}
if(loggedIn == false) {router.push('/auth/login')}

  return (
    <main className="bg-black opacity-60 md:opacity-70">
      <SkeletonTheme baseColor="#505050" highlightColor="#777">
        <Navbar />
        <Search />
        {children}
        <BottomNav />
      </SkeletonTheme>
    </main>
  );
}
