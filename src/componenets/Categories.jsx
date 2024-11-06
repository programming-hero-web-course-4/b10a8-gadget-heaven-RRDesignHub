import { NavLink, useLocation } from "react-router-dom"

export default function Categories({categories}) {
  const location = useLocation();
  
  return(
   
    <>
      <div role="tablist" className="tabs tabs-boxed flex flex-row flex-wrap md:flex-col justify-center items-start gap-y-6 bg-white p-6 rounded-3xl">
      {categories.map((category) => {
        const isAllProducts = category.category === "All Products";
        const isActive = location.pathname === "/" && isAllProducts;

        return (
          <NavLink
            to={`/${isAllProducts ? "All Products" : category.category}`}
            key={category.category}
            role="tab"
            className={({ isActive: navIsActive }) =>
              `text-lg font-bold w-full px-5 py-4 rounded-[32px] ${
                navIsActive || isActive
                  ? "bg-[#9b00c3] no-underline text-white"
                  : "bg-[#09080f0c] text-[#09080f98]"
              }`
            }
          >
            {category.category}
          </NavLink>
        );
      })}
             {/* <NavLink to={`/${category.category}`}  key={category.category} role="tab" className={({isActive}) => `text-lg font-bold w-full px-5 py-4 rounded-[32px] ${isActive ? "bg-[#9b00c3] no-underline text-white" : " bg-[#09080f0c] text-[#09080f98]"}`}>{category.category}</NavLink> */}
          
      </div>
    </>
  )
}