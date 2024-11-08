import { TiDelete } from "react-icons/ti";
export default function SingleWLI({item, handleRemoveItemBtn}){
  const {product_title, product_id, product_image, category, price, color ,description , Specification, rating, availability} = item;

  
  return(
    <>
    <div className="bg-white p-5 rounded-xl flex flex-row items-center justify-between gap-5 max-sm:hidden">
      <div className="flex flex-col md:flex-row max-sm:items-center gap-4">
        <div className="w-full md:w-[150px] bg-[#9c00c31a] p-4 rounded-xl">
          <img className="w-full " src={product_image} alt="" />
        </div>
        <div className="flex flex-col items-center md:items-start gap-5">
          <h3 className="text-2xl max-sm:text-center font-semibold text-dark-1">{product_title}</h3>
          <p className="font-medium max-sm:text-center text-[#09080f9c]">{description}</p>
          <h4 className="text-xl font-semibold text-[#09080fcb]">Price: $ {price}k</h4>
          <p className="font-medium max-sm:text-center text-[#09080f9c]">Rating: {rating}</p>
        </div>
      </div>
      <div className="">
        <button onClick={()=>handleRemoveItemBtn(product_id)} className="text-red-500 text-5xl"><TiDelete /></button>
      </div>
    </div>
    <div className="bg-white p-5 rounded-xl flex flex-col items-center justify-between gap-5 md:hidden">
      <div className="flex flex-col max-sm:items-center gap-4">
        <div className="flex items-center justify-between gap-3">
          <div className=" w-[100px] bg-[#9c00c31a] p-2 rounded-lg">
            <img className="w-full " src={product_image} alt="" />
          </div>
          <h3 className="text-xl  font-semibold text-dark-1">{product_title}</h3>
        </div>
        <div className="flex  items-center  gap-5">
          <h4 className="text-xl font-semibold text-[#09080fcb]">Price: $ {price}k</h4>
          <button onClick={()=>handleRemoveItemBtn(product_id)} className="text-red-500 text-5xl"><TiDelete /></button>
        </div>
      </div>
      <div>
        <h3>Rating: {rating}</h3>
      </div>
    </div>
    </>
  )
}