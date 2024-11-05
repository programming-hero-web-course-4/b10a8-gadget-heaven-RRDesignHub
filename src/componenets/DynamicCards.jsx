import { useLoaderData, Outlet } from "react-router-dom"
import Categories from "./Categories";
export default function DynamicCards() {
  const categoriesData = useLoaderData();
  
  return(
    <>
      <div className="my-28 mx-3 md:mx-10 lg:mx-20">
        <h2 className="text-4xl font-bold text-dark-1 text-center">Explore Cutting-Edge Gadgets</h2>
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          <div>
            <Categories categories={categoriesData}></Categories>
          </div>
          
          {/* Dunamic items sections */}
          <Outlet></Outlet>
        </div>
      </div>
    </>
  )
}