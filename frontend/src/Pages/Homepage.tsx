import { LogoIcon } from "../icons/LogoIcon";
import { MenuIcon } from "../icons/MenuIcon";
import { Link } from "react-router-dom"


export function Homepage() {

    return <div >

        <div className="w-full h-20 flex justify-between items-center px-3 py-4 sm:px-12">

            <div className="logo text-gray-600 flex justify-center items-center">
                <LogoIcon size="lg" />
                <h2 className="text-purple-600 text-2xl font-medium">Brainly</h2>
            </div>


            <div className="hidden md:block" >
                <button className="bg-purple-600 text-white h-12 w-24 rounded-l-full mr-2"><Link to="/signup">Sign Up</Link></button>
                <button className="border border-gray-500  h-12 w-24 rounded-r-full"><Link to="/signin">Login</Link></button>
            </div>

            <div className="md:hidden">
                <MenuIcon size="md"/>
            </div>

        </div >

        <div className="h-svh flex flex-col justify-center items-center">
            <h2 className="font-bold text-5xl text-center">Welcome to <span className="text-purple-600">Brainly</span></h2>
            <h3 className="font-medium text-xl w-2/3  lg:w-1/2 mt-6 text-center text-gray-500">Organize your scrolls, your references, anything that interests you and resonate with your thought process at One Place.</h3>

        </div>


    </div>
}