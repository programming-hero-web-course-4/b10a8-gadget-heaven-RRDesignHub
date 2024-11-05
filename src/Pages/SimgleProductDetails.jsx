import { useEffect, useState } from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

export default function SingleProductDetails() {
  const gadgetData = useLoaderData();
  const {product_id} = useParams();
  const findProduct = gadgetData.find((product)=> product.product_id == product_id);
  const {product_title,  product_image, category, price, color ,description , Specification, rating, availability} = findProduct;

  return(
    <>
      <div className="relative mb-[800px] lg:mb-[500px]">
        <div className="hero bg-[#9538e2] pt-9 pb-40 md:pb-[400px] lg:pb-52">
          <div className="hero-content flex-col ">
            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-white">Products Details</h1>
              <p className="text-white lg:px-36 text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
          </div>
        </div>
        <div className="w-full max-sm:px-2 absolute left-1/2 -translate-x-1/2 -bottom-[730px] md:-bottom-[700px]  lg:-bottom-[365px] ">
            <div className='md:w-[600px]  lg:w-[1060px] lg:h-[550px] mx-auto border bg-white p-3 lg:p-6 rounded-3xl flex flex-col lg:flex-row gap-8'>
              <img className='md:w-[550px] mx-auto lg:w-[420px] rounded-3xl bg-[#9c00c31a] p-5'  src={product_image} alt="" />
              <div className="">
                <h2 className="text-2xl font-bold text-dark-1">{product_title}</h2>
                <h3 className="text-xl font-medium text-[#09080fcb] my-4">Price: {price}</h3>
                <button className=" text-lg text-[#9b00c3] font-semibold bg-transparent border border-[#9b00c3] px-5 py-2 rounded-3xl hover:text-white hover:bg-[#9b00c3]">{availability ? "In Stock" : "Out Of Stock"}</button>
                <p className="text-lg text-[#09080f9a] my-4">{description}</p>
                <h4 className="text-lg font-bold text-dark-1">Specification:</h4>
                {Specification.map((p, i)=> <p className="text-[#09080f9a]" key={i}>{i+1}. {p}</p>)}

                <h4 className="text-lg font-bold text-dark-1 mt-4">Rating: {rating}</h4>

                <div className="flex gap-4 items-center mt-4">
                  <Link className="flex gap-2 items-center text-lg text-white font-semibold bg-[#9b00c3] border border-[#9b00c3] px-5 py-2 rounded-3xl hover:text-white hover:bg-[#9b00c3]">Add To Card <MdOutlineLocalGroceryStore /></Link>
                  <Link className={`w-10 h-10 bg-white rounded-full text-xl flex justify-center items-center text-dark-1 ${location.pathname !== '/' ? 'border ' : "border-none"}`}><FaRegHeart /></Link>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}