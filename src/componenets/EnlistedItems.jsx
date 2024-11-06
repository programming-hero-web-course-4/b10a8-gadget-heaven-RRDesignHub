import { Link, useParams } from "react-router-dom"
import AddedInCard from "./AddedInCard";
import Wishlist from "./Wishlist";
export default function EnlistedItems(){
  const {addedItem} = useParams();
 
  return(
    <>
      <div>
          {
            addedItem === 'card' ?
            <AddedInCard></AddedInCard> :
            <Wishlist></Wishlist>
          }
      </div>
    </>
  )
}