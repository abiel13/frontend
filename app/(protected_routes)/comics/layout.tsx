import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";

export default function ComicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="background-gradient text-white min-h-screen  overflow-x-hidden ">
      <Navbar />
      {children}
      <BottomNav />
    </main>
  );
}
