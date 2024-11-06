import { Link } from "react-router-dom";

export default function SingleItemCard({singleItem}) {
  const {product_title, product_id, product_image, category, price, color ,description , Specification, rating, availability} = singleItem;
  return (
    <>
      <div className="card bg-base-100 p-5 lg:h-[410px]">
        <figure className="bg-[#9c00c318] rounded-xl">
          <img
            src={product_image}
            className=" h-[180px]"
            alt={product_title} />
        </figure>
        <div className="flex flex-col gap-y-3 mt-6">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-dark-1">{product_title}</h2>
          <p className="text-base lg:text-lg font-medium text-[#09080f98]">Price: {price}k</p>
          <div className="card-actions ">
            <Link to={`/product/${product_id}`}  className=" text-lg text-[#9b00c3] font-semibold bg-transparent border border-[#9b00c3] px-5 py-2 rounded-3xl hover:text-white hover:bg-[#9b00c3]">View Details</Link>
          </div>
        </div>
      </div>
    </>
  )
}