import { Link } from "react-router-dom";
import heroImg from './../assets/banner.jpg'
export default function Hero() {

  return (
    <>
      <div className='relative mb-48 md:mb-80  '>
        <div className="hero bg-gradient-to-b  from-[#9538e2] to-[#9b00c3] pt-20 md:pt-24 lg:pt-28 lg:px-40 rounded-3xl pb-40 lg:pb-52">
          <div className="hero-content text-center">
            <div className="">
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
              <p className="lg:px-28 py-4 lg:py-6 text-white font-light">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
              <Link to='/dashboard/card' className=" bg-white text-xl font-bold text-[#9538e2] px-8 py-4 rounded-[32px]">Shop Now</Link>
            </div>
          </div>
          
        </div>
        <div className="w-full max-sm:px-2 absolute left-1/2 -translate-x-1/2 -bottom-[130px] md:-bottom-[180px] lg:-bottom-[265px] ">
            <div className='md:w-[560px] md:h-[300px] lg:w-[860px] lg:h-[455px] mx-auto border bg-[#ffffff4d] p-3 lg:p-6 rounded-3xl'>
              <img className='h-full w-full rounded-3xl'  src={heroImg} alt="" />
            </div>
        </div>
      </div>
    </>
  )
}