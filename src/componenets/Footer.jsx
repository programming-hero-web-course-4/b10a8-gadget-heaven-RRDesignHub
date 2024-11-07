import { FaRegHeart } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <footer className="footer bg-white md:grid-flow-row px-2 lg:px-28 py-10  md:py-20 gap-0">
        <div className="flex flex-col items-center mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-dark-1">Gadget Hub</h2>
          <p className="text-center font-medium text-[#09080f98]">Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <div className="border-t-2 w-full my-7"></div>
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center max-sm:gap-y-8 gap-x-32 mx-auto">
          <nav className="flex flex-col justify-center items-center">
            <h6 className="text-lg font-bold text-[#09080F] mb-4">Services</h6>
            <a className="link link-hover mb-2 text-[#09080F]">Branding</a>
            <a className="link link-hover mb-2 text-[#09080F]">Design</a>
            <a className="link link-hover mb-2 text-[#09080F]">Marketing</a>
            <a className="link link-hover  text-[#09080F]">Advertisement</a>
          </nav>
          <nav className="flex flex-col justify-center items-center">
            <h6 className="text-lg font-bold text-[#09080F] mb-4">Company</h6>
            <a className="link link-hover mb-2 text-[#09080F]">About us</a>
            <a className="link link-hover mb-2 text-[#09080F]">Contact</a>
            <a className="link link-hover mb-2 text-[#09080F]">Jobs</a>
            <a className="link link-hover text-[#09080F]">Press kit</a>
          </nav>
          <nav className="flex flex-col justify-center items-center">
            <h6 className="text-lg font-bold text-[#09080F] mb-4">Legal</h6>
            <a className="link link-hover mb-2 text-[#09080F]">Terms of use</a>
            <a className="link link-hover mb-2 text-[#09080F]">Privacy policy</a>
            <a className="link link-hover text-[#09080F]">Cookie policy</a>
          </nav>
        </div>
        <small className="flex justify-center items-center text-center mx-auto py-4 mt-4 w-full rounded-3xl bg-[#9c00c31a] ">Designed with <FaRegHeart className="text-[#9b00c3] text-xl"  /> by <a className="font-semibold" href="https://ripanulalam.netlify.app">Ripanul Alam</a>.</small>
      </footer>
    </>
  )
}