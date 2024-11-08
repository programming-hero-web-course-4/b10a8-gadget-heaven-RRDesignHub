import { useEffect, useState } from "react";
import { useSetAddedItemDashboard, useRomovedItemsByPuschase } from "../layouts/Main";
import SingleATCItem from "./SingleATCItem";
export default function AddedInCard(){
  const {addToCardItems, setUnsortedListedItem, sortedListedItem} = useSetAddedItemDashboard();
  const [uniqueItemsArr, setUniqueItemsArr] = useState([]);
  
   const {setRemovedItemPrice} = useRomovedItemsByPuschase();
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
    setRemovedItemPrice(0);
    let removedItemsPrice = 0;
    const remainingItems = uniqueItemsArr.filter(item=>item.product_id !== id);
    setUniqueItemsArr(remainingItems);
    
    const removedItems = uniqueItemsArr.filter(item=> item.product_id == id);
    removedItems.map(item=> removedItemsPrice = item.price);
    setRemovedItemPrice(removedItemsPrice);
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