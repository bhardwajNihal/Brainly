
import { Logo } from "./logo"
import { MenuIcon } from "../../icons/MenuIcon"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../../../config"
import axios from "axios"


export function Navbar(){
    // To express Date in a friendly format
    const formatDate = (date:any) => {
        const options = { 
            weekday: 'short', // Short weekday name (e.g., Sat)
            day: 'numeric',   // Day of the month (e.g., 17)
            month: 'short',   // Short month name (e.g., Jan)
            year: 'numeric',  // Full year (e.g., 2025)
        };
        
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };


    const [userName, setUserName] = useState("")

    async function fetchUserData() {
        const token = localStorage.getItem("token")
        const response = await axios.get(BACKEND_URL + "/api/v1/user/getUserData",{
            headers: {
                authorization : token
            }
        });
        // console.log(response.data.userData.firstname + " "+ response.data.userData.lastname);j
        setUserName(response.data.userData.firstname + " "+ response.data.userData.lastname);
    }

    useEffect(() => {
        fetchUserData()
    },[])

    return <div className=" h-16 w-full bg-white flex justify-between items-center px-5 fixed top-0 left-0 z-10">

        <Logo/>

    <div className="flex gap-4 justify-center items-center">
        {/* Greeting */}
        <div className="greeting mr-2 md:mr-6 text-gray-700 text-lg flex flex-col items-end">
            <h2 className="flex gap-1"><span className="hidden md:block">Welcome! </span><span className="font-medium text-purple-600">{userName}</span></h2>
            <h3 className="text-gray-500 text-base  ">{formatDate(new Date() )}</h3>
        </div>

    {/* MenuIcon */}
        <div className="menuIcon md:hidden text-purple-600">
            <MenuIcon size="md"/>
        </div>
    </div>

    </div>
}