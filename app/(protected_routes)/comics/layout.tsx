import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import Router from "../Router";

export default function ComicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="background-gradient text-white min-h-screen  overflow-x-hidden ">
      <Router />
      <Navbar />
      {children}
      <BottomNav />
    </main>
  );
}
