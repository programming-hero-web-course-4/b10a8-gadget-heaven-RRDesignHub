import { useEffect, useState } from "react";
import { useSetAddedItemDashboard, useRomovedItemsPrice } from "../layouts/Main";
import SingleATCItem from "./SingleATCItem";
export default function AddedInCard(){
  const {addToCardItems, setUnsortedListedItem, sortedListedItem} = useSetAddedItemDashboard();
  const [uniqueItemsArr, setUniqueItemsArr] = useState([]);
  const { setRemovedItemsPrice} = useRomovedItemsPrice();

  useEffect(()=>{
    const uniqueItems = [...addToCardItems].filter((item, ind, arr)=>arr.indexOf(item) === ind);
    setUniqueItemsArr(uniqueItems);
    if(sortedListedItem.length !== 0){
      setUniqueItemsArr(sortedListedItem);
      sortedListedItem.length = 0;
    }
  },[addToCardItems]);

  useEffect(()=>{
    setUnsortedListedItem(uniqueItemsArr);
  },[addToCardItems, uniqueItemsArr])

  const handleRemoveItemBtn = (id, price)=>{
    const remainingItems = uniqueItemsArr.filter(item=> item.product_id !== id);
    setUniqueItemsArr(remainingItems);
    setRemovedItemsPrice(price);
  }

  return(
    <>
      <div className="flex flex-col gap-4 mx-5 md:mx-20">
        {
          uniqueItemsArr.map((item, index)=> <SingleATCItem 
          key={index} 
          item={item} 
          handleRemoveItemBtn={handleRemoveItemBtn}
          ></SingleATCItem>)
        }
      </div>
    </>
  )
}