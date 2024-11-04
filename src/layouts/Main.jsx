import { Outlet } from "react-router-dom";
import Footer from "../componenets/Footer";
import Navbar from "../componenets/Navbar";

export default function Main() {

  return(
    <>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* Dynamic part */}
      <div className="min-h-[calc(100vh-400px)]">
          <Outlet></Outlet>
      </div>
      
      {/* Footer */}
      <Footer></Footer>
    </>
  )
}