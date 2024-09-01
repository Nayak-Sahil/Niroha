import { Outlet } from "react-router-dom";
import Navbar from "./Landing/Navbar";

function App() {
  return (
    <section className="w-screen bg-gradient-to-r from-[#0e0d0d] to-[#1d1f21]">
      <Navbar />
      <Outlet />
    </section>
  );
}

export default App;
