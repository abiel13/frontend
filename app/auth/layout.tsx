import Navbar from "../components/Navbar";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className=" min-h-screen bg-white py-4 ">
      <Navbar />
      <div>{children}</div>
      <ToastContainer />
    </main>
  );
}
