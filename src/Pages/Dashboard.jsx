import { Link, Outlet, useLocation } from "react-router-dom";
import { useAddedItemsPrice, useRomovedItemsByPuschase } from "../layouts/Main";
import { useState } from "react";
export default function Dashboard() {
  const location = useLocation();
  
  const {purshasedItemClear, handleClearAllListedItems} = useRomovedItemsByPuschase();
  const {totalPrice, handleSortListedItem} = useAddedItemsPrice();
  const [isDisabled, setIsDisabled] = useState(false);
  
  return (
    <>
      <div className="mb-10 md:mb-10">
        <div className="hero bg-[#9538e2] py-8">
          <div className="hero-content flex-col ">
            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-white">Dashboard</h1>
              <p className="text-white lg:px-36 text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
              <div className="flex justify-center gap-5 mt-9">
                <Link 
                to='/dashboard/card' 
                className={`text-lg font-extrabold rounded-[32px] px-10 py-3 border ${location.pathname === '/dashboard/card' ? 'bg-white text-[#9538e2]' : "text-white border-white "}`}
                  >Card</Link>
                <Link 
                to='/dashboard/wishlist'
                className={`text-lg font-extrabold rounded-[32px] px-10 py-3 border ${location.pathname === '/dashboard/card' ? ' text-white border-white' : " bg-white text-[#9538e2]"}`}
                >Wishlist</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:px-20 mt-10">
            <h2 className="text-2xl font-bold text-dark-1 py-3">
              {location.pathname === '/dashboard/card' ? "Card" : "Wishlist"}
            </h2>
            <div className={`gap-4 items-center flex-col md:flex-row ${location.pathname === '/dashboard/card' ? 'flex' : "hidden"}`}>
              
              <h2 className="text-2xl font-bold text-dark-1">Total Cost: $ {parseFloat(totalPrice.toFixed(2))}k</h2>
              <div className="flex gap-4">
                <button 
                onClick={handleSortListedItem}
                className="text-[#9538e2] border py-3 px-8 border-[#9538e2] rounded-[32px] font-semibold text-lg"
                >Sort By Price</button>
                <button
                disabled={isDisabled}
                  onClick={()=>handleClearAllListedItems(setIsDisabled)}
                className="text-white  py-3 px-8 bg-gradient-to-b  from-[#9538e2] to-[#9b00c3] rounded-[32px] font-semibold text-lg"
                >Purchase</button>
              </div>
            </div>
        </div>
        <div className="mt-10">
          {/* Dynamic Section */}
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}