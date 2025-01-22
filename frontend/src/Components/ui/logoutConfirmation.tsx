import { useSetRecoilState } from "recoil";
import { logoutConfirmation_modal } from "../../Atoms/Logoutconfirmation";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export function ConfirmLogout(){

    const setLogoutModal = useSetRecoilState(logoutConfirmation_modal)

    function closeLogoutModalState(){
        setLogoutModal(false)
    }

    const navigate = useNavigate();
    function logout(){
        localStorage.removeItem("token");
        navigate("/")
        toast.success("You Logged out!")
    }



    return <div className="parent h-svh w-full fixed z-50 top-0 left-0 flex justify-center items-center">

    {/* background */}
        <div className="fixed top-0 left-0 bg-black opacity-50 h-full w-full"></div>

    {/* logout-box */}
        <div className="h-36 w-80 text-center bg-white rounded-md relative flex flex-col justify-center items-center border border-gray-500">
        
        <h2>Are you sure, you want to Logout?</h2>

        <div className="options flex gap-2 justify-end w-full pr-10 pt-2">
            <button className="bg-purple-600 hover:bg-blue-600 text-sm text-white py-1 px-4 rounded-md"
            onClick={logout}
            >Yes</button>

            <button className="bg-purple-200 hover:bg-blue-100 text-sm text-purple-600 py-1 px-4 rounded-md" 
            onClick={closeLogoutModalState}
            >No</button>
        </div>
    </div>
    </div>
}