import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../componenets/Footer";
import Navbar from "../componenets/Navbar";
import { createContext, useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Add to card function contextAPI & Add to wishlist function contextapi
export const AddedToCardItem = createContext();
export const useAddedToCardItem = ()=> useContext(AddedToCardItem);

//set to dashboard add to card item
export const SetAddedItemDashboard = createContext();
export const useSetAddedItemDashboard = ()=> useContext(SetAddedItemDashboard);

//total price counting contextapi
export const AddedItemsPrice = createContext();
export const useAddedItemsPrice = ()=> useContext(AddedItemsPrice);

//count added item quentity
export const QountAddedItem = createContext();
export const useQountAddedItem = ()=> useContext(QountAddedItem);

//removed items price subtract context api
export const RomovedItemsPrice = createContext();
export const useRomovedItemsPrice = ()=> useContext(RomovedItemsPrice);


//removed items by clicking puschase btn context api
export const RomovedItemsByPuschase = createContext();
export const useRomovedItemsByPuschase = ()=> useContext(RomovedItemsByPuschase);

export default function Main() {
  const [addToCardItems, setAddToCardItems] = useState([]);
  const [addToWishlists, setAddToWishlists] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [addedItmeQuentity, setAddedItmeQuentity] = useState(0);
  const [removedItems, setRemovedItems] = useState([]);
  const [unsortedListedItem, setUnsortedListedItem] = useState([]);
  const [sortedListedItem, setSortedListedItem] = useState([]);
  const [removedItemPrice, setRemovedItemPrice] = useState(0);
  const sharedAddToCardFunction = (type,item, setDisabledBtn) => {
    if(type === "Add To Card"){
      setAddToCardItems([...addToCardItems, item]);
      setTotalPrice(totalPrice + item.price);
      toast.success('Added To the Card!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      setAddedItmeQuentity(addedItmeQuentity + 1);
    }else if(type === "Wishlist"){
      setAddToWishlists([...addToWishlists, item])
      setDisabledBtn(true);
      toast.info('Added To the Wishlist!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }
  };

const handleSortListedItem = ()=>{
  const decendingSrted = unsortedListedItem.sort((a, b)=> b.price - a.price);
  setSortedListedItem(decendingSrted);
} 


const handleClearAllListedItems = (setIsDisabled)=>{
  setTotalPrice(0)
  setAddToCardItems([]);
  setIsDisabled(true);
}

useEffect(()=>{
  setTotalPrice(totalPrice - removedItemPrice);
},[removedItemPrice])


  
  return(
    <>
      <AddedToCardItem.Provider value={{sharedAddToCardFunction}}>
        <SetAddedItemDashboard.Provider value={{addToCardItems,setUnsortedListedItem, sortedListedItem, addToWishlists}}>
          <AddedItemsPrice.Provider value={{totalPrice, setTotalPrice, handleSortListedItem}}>
            <QountAddedItem.Provider value={{addedItmeQuentity, setAddedItmeQuentity}}>
              <RomovedItemsPrice.Provider value={{removedItems, setRemovedItems}}>
                <RomovedItemsByPuschase.Provider value={{ handleClearAllListedItems, setRemovedItemPrice}}>
                {/* Navbar */}
                <Navbar></Navbar>

                {/* Dynamic part */}
                <div className="">
                    <Outlet ></Outlet>
                </div>

                {/* Footer */}
                <Footer></Footer>
                <ToastContainer
                  position="top-right"
                  autoClose={2000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                  />
                  </RomovedItemsByPuschase.Provider>
              </RomovedItemsPrice.Provider>
            </QountAddedItem.Provider>
          </AddedItemsPrice.Provider>
        </SetAddedItemDashboard.Provider>
      </AddedToCardItem.Provider>
      
    </>
  )
}