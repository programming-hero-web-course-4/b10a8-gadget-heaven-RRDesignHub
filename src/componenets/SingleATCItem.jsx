export default function SingleATCItem({item}){
  const {product_title,  product_image, category, price, color ,description , Specification, rating, availability} = item;
  return(
    <>
    <div className="bg-white p-8 rounded-xl flex flex-col md:flex-row items-center md:items-start gap-5">
      <div className="w-full md:w-[180px] bg-[#9c00c31a] p-5 rounded-xl">
        <img className="w-full " src={product_image} alt="" />
        </div>
      <div className="flex flex-col items-center md:items-start gap-5">
        <h3 className="text-2xl max-sm:text-center font-semibold text-dark-1">{product_title}</h3>
        <p className="font-medium max-sm:text-center text-[#09080f9c]">{description}</p>
        <h4 className="text-xl font-semibold text-[#09080fcb]">Price: $ {price}k</h4>
      </div>
    </div>
    </>
  )
}