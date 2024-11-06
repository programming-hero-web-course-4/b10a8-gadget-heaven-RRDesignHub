import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../componenets/Footer";
import Navbar from "../componenets/Navbar";
import { createContext, useContext, useState } from "react";


// Add to card function contextAPI & Add to wishlist function contextapi
export const AddedToCardItem = createContext();
export const useAddedToCardItem = ()=> useContext(AddedToCardItem);

//set to dashboard add to card item
export const SetAddedItemDashboard = createContext();
export const useSetAddedItemDashboard = ()=> useContext(SetAddedItemDashboard);


//All data provider contextapi
export const AllGadgetData = createContext();
export const useAllGadgetData = ()=> useContext(AllGadgetData);


export default function Main() {
  const [addToCardItems, setAddToCardItems] = useState([]);
  const [addToWishlists, setAddToWishlists] = useState([]);
  const gadgetData = useLoaderData();
  const sharedAddToCardFunction = (type,item) => {
    
    if(type === "Add To Card"){
      setAddToCardItems([...addToCardItems, item])
    }else if(type === "Wishlist"){
      setAddToWishlists(item)
    }
  };



  
  return(
    <>
      <AddedToCardItem.Provider value={{sharedAddToCardFunction}}>
        <SetAddedItemDashboard.Provider value={{addToCardItems}}>
          <AllGadgetData.Provider value={{gadgetData}}>
            {/* Navbar */}
            <Navbar></Navbar>

            {/* Dynamic part */}
            <div className="">
                <Outlet ></Outlet>
            </div>

            {/* Footer */}
            <Footer></Footer>
          </AllGadgetData.Provider>
        </SetAddedItemDashboard.Provider>
      </AddedToCardItem.Provider>
    </>
  )
}