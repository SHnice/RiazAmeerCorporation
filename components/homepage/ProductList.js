import SingleProduct from "./SingleProduct";
import { Dropdown } from "flowbite-react";

export default function ProductList() {
  return (
    <div>
       <div
        class="py-3 px-4 relative text-xl text-gray-700 bg-gray-200 dark:bg-green-200 dark:text-green-800"
        role="alert"
      >
        <span class="font-medium">All Categories</span>
        <span className="absolute right-0 mr-4">
        <Dropdown
            label="Sort By Price & Date"
            inline={true}
            size = "lg"
          
        >   
            <Dropdown.Item>
                     Price, low to high
                   </Dropdown.Item>
                   <Dropdown.Item>
                     Price, high to low
                   </Dropdown.Item>
                   <Dropdown.Item>
                     Date, old to new
                   </Dropdown.Item>
                   <Dropdown.Item>
                     Date, new to old
                   </Dropdown.Item>
        </Dropdown>
        </span>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container px-2 py-2 mx-auto">
          <div className="flex flex-wrap -m-4">
           
            <SingleProduct/>
            <SingleProduct/>
            <SingleProduct/>
            <SingleProduct/>
            <SingleProduct/>
            <SingleProduct/>
            <SingleProduct/>

          </div>
        </div>
      </section>
    </div>
  );
}
