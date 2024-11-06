import { Link, NavLink, useLocation} from "react-router-dom";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
export default function Navbar() {
 const location = useLocation()
  return (
    <>
      <div className={`${location.pathname === '/'  ? '' : "h-[76px]"}`}>
        <div className={`navbar fixed z-40  md:px-10 lg:px-28 ${location.pathname !== '/' ? 'bg-white ' : "backdrop-blur bg-[#9538e233]"}`}>
          <div className="navbar-start gap-2">
            <div className="dropdown ">
              <div tabIndex={0} role="button" className="btn bg-white w-14 p-0 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100  text-dark-1 rounded-box z-[1] mt-3 p-2 shadow gap-4">
                <li ><NavLink to='/' className={`text-center font-medium py-3 hover:underline text-dark-1`}>Home</NavLink></li>
                <li ><NavLink to='/statistics' className="text-center font-medium py-3 hover:underline text-dark-1">Statistics</NavLink></li>
                <li ><NavLink to='/dashboard' className="text-center font-medium py-3 hover:underline text-dark-1">Dashboard</NavLink></li>
              </ul>
            </div>
            <Link to='/' className={`font-bold text-xl  ${location.pathname !== '/' ? 'text-dark-1' : "text-white"}`}>GadgetHub</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-white px-1 gap-8">
              <li><NavLink to='/' className={`text-center font-medium py-3 hover:underline ${location.pathname !== '/' ? 'text-dark-1' : "text-white"}`}>Home</NavLink></li>
              <li><NavLink to='/statistics' className={`text-center font-medium py-3 hover:underline ${location.pathname !== '/' ? 'text-dark-1' : "text-white"}`}>Statistics</NavLink></li>
              <li><NavLink to='/dashboard' className={`text-center font-medium py-3 hover:underline ${location.pathname !== '/' ? 'text-dark-1' : "text-white"}`}>Dashboard</NavLink></li>
            </ul>
          </div>
          <div className="navbar-end gap-4">
            <Link className={`w-10 h-10 bg-white rounded-full text-xl flex justify-center items-center text-dark-1 ${location.pathname !== '/' ? 'border ' : "border-none"}`}><MdOutlineLocalGroceryStore /></Link>
            <Link className={`w-10 h-10 bg-white rounded-full text-xl flex justify-center items-center text-dark-1 ${location.pathname !== '/' ? 'border ' : "border-none"}`}><FaRegHeart /></Link>
          </div>
        </div>
      </div>
    </>
  )
}