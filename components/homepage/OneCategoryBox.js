
export default function OneCategoryBox(props) {
  return (
    <div>
<section class="text-gray-600 body-font">
  <div class="flex flex-row container px-2 py-3 mx-auto">
    <div class=" -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-12 w-20 md:h-24 md:w-48 rounded">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={props.imageUrl}/>
          <h3 class="text-gray-500 text-xs mt-1 text-center tracking-widest title-font">{props.categoryName}</h3>
        </a>
   
      </div>
    
    </div>
  </div>
</section>
    </div>
  )
}
