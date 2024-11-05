import { useLoaderData, useParams } from "react-router-dom"
import SingleItemCard from "./SingleItemCard";
import { useEffect, useState } from "react";
import Unavailable from "./Unavailable";

export default function ItemCards() {
  const {category} = useParams();
  const gadgetData = useLoaderData();
  const [filteredItems, setFitleredItem] = useState([]);
  

  useEffect(()=>{
    if(category && category !== "All Products"){
      const filteringItmes = gadgetData.filter((item)=> item.category == category);
      setFitleredItem(filteringItmes);
    }else{
      setFitleredItem(gadgetData);
    }
  } ,[gadgetData, category])
  
  return (
    <>
      {
        category === 'Smart Watch' ? 
        <div className="flex  justify-center items-center text-center">
          <Unavailable></Unavailable>
        </div> :
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            filteredItems.map((SingleItem)=> <SingleItemCard key={SingleItem.product_id} singleItem={SingleItem}></SingleItemCard>)
          }
        </div>
      }
      
    </>
  )
}