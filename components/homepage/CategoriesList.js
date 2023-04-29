
import OneCategoryBox from "./OneCategoryBox";
import { useEffect } from "react";
import styles from "./CategoriesList.module.css"
export default function CategoriesList() {

  useEffect(() => {
    const container = document.getElementById('scroll-container');
    const leftBtn = document.getElementById('scroll-left-btn');
    const rightBtn = document.getElementById('scroll-right-btn');

    const visibleWidth = container.clientWidth;
    const itemWidth = container.children[0].clientWidth;
    const itemsPerPage = Math.floor(visibleWidth / itemWidth);
    let scrollPos = 0;

    leftBtn.addEventListener('click', () => {
      scrollPos -= itemsPerPage * itemWidth;
      container.scrollTo({ left: scrollPos, behavior: 'smooth' });
      updateButtonStates();
    });

    rightBtn.addEventListener('click', () => {
      scrollPos += itemsPerPage * itemWidth;
      container.scrollTo({ left: scrollPos, behavior: 'smooth' });
      updateButtonStates();
    });

    function updateButtonStates() {
      leftBtn.disabled = scrollPos === 0;
      rightBtn.disabled = container.scrollWidth - container.clientWidth <= scrollPos;
    }
  }, []);

  return (
    <div>
      <div
        class="py-2 px-4 text-xl text-gray-700 bg-gray-200 dark:bg-green-200 dark:text-green-800"
        role="alert"
      >
        <span class="font-medium">All Categories</span>
      </div>
      <div id="scroll-container" className={`flex flex-row ${styles.scroller} h-36 overflow-x-auto whitespace-nowrap hide-scroll-bar`} >
        
        <OneCategoryBox categoryName = " Best TV" imageUrl = "https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>

        <OneCategoryBox categoryName = " Refrigerators" imageUrl = "https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>

        <OneCategoryBox categoryName = " Best TV" imageUrl = "https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>

        <OneCategoryBox categoryName = " Best TV" imageUrl = "https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>

        <OneCategoryBox categoryName = " Best TV" imageUrl = "https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>
    
        <OneCategoryBox categoryName = " Best TV" imageUrl = "https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>

        <OneCategoryBox categoryName = " Refrigerators" imageUrl = "https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>

        <OneCategoryBox categoryName = " Best TV" imageUrl = "https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>

        <OneCategoryBox categoryName = " Best TV" imageUrl = "https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>

        <OneCategoryBox categoryName = " Best TV" imageUrl = "https://images.unsplash.com/photo-1664575197229-3bbebc281874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"/>

        <button className={`absolute left-0 ${styles.costumBtn} transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-1`} id="scroll-left-btn">
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <button class={`absolute right-0 ${styles.costumBtn} transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10`} id="scroll-right-btn">
          <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
      </div>

    </div>
  );
}
