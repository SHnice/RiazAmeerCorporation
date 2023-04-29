
import Slider from "@/components/homepage/Slider"
import ProductList from "@/components/homepage/ProductList"
import CategoriesList from "@/components/homepage/CategoriesList"

export default function index() {
  return (
    <div>
      <Slider />
      <CategoriesList/>
      <ProductList/>
    </div>
  )
}
