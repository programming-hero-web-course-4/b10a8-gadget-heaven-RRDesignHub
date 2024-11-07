import { useEffect, useState } from "react";
import { useSetAddedItemDashboard } from "../layouts/Main";
import SingleWLI from "./SingleWLI";
export default function Wishlist(){
  const {addToWishlists} = useSetAddedItemDashboard();
  const [uniqueItemsArr, setUniqueItemsArr] = useState([]);
  useEffect(()=>{
    const uniqueItems = [...addToWishlists].filter((item, ind, arr)=>arr.indexOf(item) === ind);
    setUniqueItemsArr(uniqueItems);
  },[addToWishlists]);

  const handleRemoveItemBtn = (id)=>{
    addToWishlists.length = 0;
    const remainingItems = uniqueItemsArr.filter(item=> item.product_id !== id);
    setUniqueItemsArr(remainingItems);
    
  }
  return(
    <>
      <div className="flex flex-col gap-4 mx-5 md:mx-20">
        {
          uniqueItemsArr.map((item, index)=> <SingleWLI 
          key={index} 
          item={item} 
          handleRemoveItemBtn={handleRemoveItemBtn}
          ></SingleWLI>)
        }
      </div>
    </>
  )
}