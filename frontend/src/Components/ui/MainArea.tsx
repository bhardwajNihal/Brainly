
import { useEffect } from "react"
import { Card } from "./Card"
import axios from "axios"
import { BACKEND_URL } from "../../../config"

export function MainArea() {

    // async function fetchContent(){
    //     try {
    //         const token = localStorage.getItem("token");

    //         if (!token) {
    //             console.error("Token not found in localStorage");
    //             return;
    //         }
    //         const response = await axios.get(BACKEND_URL + "/api/v1/content",{
    //             headers : {
    //                 authorization: token
    //             }
    //         })
    //         console.log("getting response!");
    //         console.log(response);
    //     } catch (error) {
    //         console.log("Error fetching data!",error);   
    //     }
        
    // }

    // useEffect(() => {
    //     fetchContent()
    // },[])

    return <div>
         
         <div className="heading fixed text-xl font-normal text-gray-500 left-1/5 top-16 z-40 bg-gray-300 rounded-tr-full w-48 text-center">
            <h2>All Content</h2>
         </div>

         <div className="min-h-[calc(100vh-6em)]  w-[calc(100svw-4rem)] md:w-[calc(100svw-12rem)] bg-gray-200 flex flex-col justify-start items-center gap-4 py-4 px-4 lg:px-8 absolute top-24 left-12 md:left-40 box-border overflow-hidden overflow-y-auto rounded-lg">

    {/* Card Section */}
        <div className="card-section flex gap-6 flex-wrap justify-center absolute top-0">

            <Card type={"tweet"} title={"An Important Tweet"} link="https://x.com/i/status/1878110938877820982" />

            {/* <Card type={"tweet"} title={"An Important Tweet"} link="https://x.com/arjvnz/status/1880192178468843944/photo/1" />
            <Card type={"tweet"} title={"An Important Tweet"} link="https://x.com/flyingbeast320/status/1880543240879006080" />


            <Card type={"youtube"} title={"How to code a 2048 game in Js"} link="https://www.youtube.com/watch?v=veMa7GPhrIg" />
            <Card type={"youtube"} title={"How to code a 2048 game in Js"} link="https://www.youtube.com/watch?v=zOE8HgCz5J4" />
            <Card type={"youtube"} title={"How to code a 2048 game in Js"} link="https://www.youtube.com/watch?v=UVAItmSkkvE" />

            <Card type={"document"} title={"A document with something"} /> */}

        </div>
    </div>
    </div>
}