import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

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
    <main className="bg-black opacity-60">
      <Navbar />
      <Search />
      {children}
    </main>
  );
}
