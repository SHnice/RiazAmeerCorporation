import React, { useState } from 'react'
import Sidebare from '@/components/admin/Sidebare'
import cloudinary from '@/utils/cloudinary'
import axios from 'axios'

export default function SetSlider() {


    const [image,setImage] = useState(null)
    function imageHandler(e){
        setImage(e.target.files[0])
    }
    async function submitImageHandler(){
        try{
            const formData = new FormData()
            formData.append('image',image)
            // const boundary = Math.random().toString().slice(2);
            // const headers = {
            //   'Content-Type': `multipart/form-data; boundary=${boundary}`,
            // };
        
            const response = await axios.post("/api/admin/slider",formData,{
               
            })
            
            if(response.statusText == "OK"){
                console.log("successfully uploaded")
            }
            else
                console.log("error in uploading")
        }catch(error){
            console.log('error in fetching')
        }
    }

  return (

    // function uploadHandle(event){
    //     const slideImage = event.target.files[0]
    //     if (file && file.type.startsWith('image/')) {
    //         cloudinary.uploader.upload(slideImage)
    //         .then(result)
    //             console.log("uploaded to cloudinary",result.secure_url)
            
    //       } else {
    //         setImage(null);
    //       }
    // }    

  
    <div>
        <div className='flex flex-row'>
            <Sidebare/>
            <div className='flex-1 '>
                <div
                    class="py-2 px-4 text-xl h-14 text-gray-700 bg-gray-300 dark:bg-green-200 dark:text-green-800"
                        role="alert">

                    <span class="font-medium text-xl">Set Slider</span>
                    <span class="absolute right-0 mr-28"> <input onChange={imageHandler} name='slideImage' class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" accept='image/*'></input> </span>
                    <span className="absolute right-0 mr-1" mr-4><button type="button" onClick={submitImageHandler} class="text-white bg-green-500 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Upload</button></span>
                </div>
                    {/* adding pics */}
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                <th scope="col" class="px-6 py-3">
                                    Position
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Picture
                                </th>
                                
                                <th scope="col" class="px-6 py-3">
                                    edit
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Delete
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium">
                                        1
                                    </th>
                                    <td class="px-6 py-4">
                                        Silver
                                    </td>
                                    <td class="px-6 py-4">
                                         <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                    <td class="px-6 py-4">
                                        <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                


            </div>
        </div>
    </div>
  )
}

function TableBody(){

    return(
        <div>
            {data.map((row, index) => (
      <tr key={row.id}>
        <td>{index + 1}</td> {/* Display row number */}
        <td>{row.name}</td>
        <td>{row.age}</td>
        <td>{row.city}</td>
      </tr>
    ))}
        </div>
    )
}