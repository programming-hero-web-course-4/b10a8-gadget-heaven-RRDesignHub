import { NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow gap-6">
              <li className="text-center font-medium"><NavLink to='/'>Home</NavLink></li>
              <li className="text-center font-medium"><NavLink>Statistics</NavLink></li>
              <li className="text-center font-medium"><NavLink>Dashboard</NavLink></li>
            </ul>
          </div>
          <a className=" text-xl">GadgetHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink>Statistics</NavLink></li>
            <li><NavLink>Dashboard</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  )
}