import Navbar from "../components/Navbar";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" min-h-screen background-gradient  py-4 ">
      <Navbar />
      <div>{children}</div>
    </main>
  );
}
