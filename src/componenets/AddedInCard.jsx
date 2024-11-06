import { useEffect, useState } from "react";
import { useSetAddedItemDashboard } from "../layouts/Main"
import SingleATCItem from "./SingleATCItem";
export default function AddedInCard(){
  const {addToCardItems} = useSetAddedItemDashboard();
  const [uniqueItemsArr, setUniqueItemsArr] = useState([]);
  
  useEffect(()=>{
    const uniqueItems = addToCardItems.filter((item, ind, arr)=>arr.indexOf(item) === ind);
    setUniqueItemsArr(uniqueItems)
  },[addToCardItems])

  console.log(uniqueItemsArr)
  return(
    <>
      <div className="flex flex-col gap-4 mx-5 md:mx-20">
        {
          uniqueItemsArr.map((item, index)=> <SingleATCItem key={index} item={item}></SingleATCItem>)
        }
      </div>
    </>
  )
}