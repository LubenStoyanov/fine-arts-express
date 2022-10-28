import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <div className="flex flex-col sm:min-h-screen justify-between">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
