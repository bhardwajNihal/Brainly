
import { useEffect, useState } from "react"
import { Card } from "./Card"
import axios from "axios"
import { BACKEND_URL } from "../../../config"

export function MainArea() {

   const [contents, setContents] = useState([])

    async function  fetchuserContent() {

    const token = localStorage.getItem("token")

    const response = await axios.get(BACKEND_URL + "/api/v1/content",{
        headers : {
            authorization : token
        }
    })
    // console.log(response.data.content);
    setContents(response.data.content)
   }

   useEffect(() => {
    fetchuserContent()
   },[])

//    useEffect(() => {
//     console.log(contents);          //state update is asynchronous, thus contents are not set immediately
//    },[contents])

    return <div>
         
         <div className="heading fixed text-xl font-normal text-gray-500 left-1/5 top-16 z-40 bg-gray-300 rounded-tr-full w-48 text-center">
            <h2>All Content</h2>
         </div>

         <div className="min-h-[calc(100vh-6em)]  w-[calc(100svw-4rem)] md:w-[calc(100svw-12rem)] bg-gray-200 flex flex-col justify-start items-center gap-4 py-4 px-4 lg:px-8 absolute top-24 left-12 md:left-40 box-border overflow-hidden overflow-y-auto rounded-lg">

    {/* Card Section */}
        <div className="card-section flex gap-8 flex-wrap justify-start absolute top-0 lg:px-12">

            {contents.map((content,index) => <Card key={index} type={content.type} title={content.title} link={content.link} />)}
           
        </div>
    </div>
    </div>
}