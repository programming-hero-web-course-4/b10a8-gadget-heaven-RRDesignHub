import { Link, useNavigate } from "react-router-dom"

export default function ErrorPage(){
  
  return(
    <>
      <div className="flex flex-col justify-center items-center gap-5 bg-[#9c00c31a] px-30 py-32 h-screen">
        <h1 className="text-4xl font-bold text-[#9b00c3]">Oopps!!</h1>
        <h1 className="text-4xl font-bold text-[#9c00c3be]">Page not found</h1>
        <Link to='/' className="text-2xl font-semibold bg-[#9c00c3be] text-white px-10 rounded-3xl py-5">Back Home</Link>
      </div>
    </>
  )
}