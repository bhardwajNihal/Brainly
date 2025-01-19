import { CrossIcon } from "../../icons/crossIcon";

export function ConfirmLogout(){

    return <div className="h-36 w-80 text-center bg-white rounded-md relative flex flex-col justify-center items-center border border-gray-500">
        
        <div className="absolute top-0 right-0 hover:bg-gray-300 p-2 m-1 rounded-md">
        <CrossIcon size="sm"/>
        </div>
        
        <h2>Are you sure, you want to Logout?</h2>

        <div className="options flex gap-2 justify-end w-full pr-10 pt-2">
            <button className="bg-purple-600 hover:bg-blue-600 text-sm text-white py-1 px-4 rounded-md">Yes</button>
            <button className="bg-purple-200 hover:bg-blue-100 text-sm text-purple-600 py-1 px-4 rounded-md">No</button>
        </div>
    </div>
}