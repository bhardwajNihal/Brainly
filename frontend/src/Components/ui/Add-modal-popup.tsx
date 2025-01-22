
import { addModalAtom } from "../../Atoms/AddModalAtom"
import { CrossIcon } from "../../icons/crossIcon"
import { useRecoilValue,useSetRecoilState } from "recoil"
import { useRef } from "react"
import axios from "axios";
import { BACKEND_URL } from "../../../config";
import { toast } from "react-toastify";
import { ContentAtom } from "../../Atoms/ContentsAtom";



export function AddModalPopup() {

    const titleRef = useRef<HTMLInputElement>(null);
    const typeRef = useRef<HTMLSelectElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);

    const isModalOpen = useRecoilValue(addModalAtom)
    const AddModalState = useSetRecoilState(addModalAtom)

    const setContents = useSetRecoilState(ContentAtom)
    
    function setAddModalState() {
        AddModalState(curr => !curr)
    }

    async function addContent() {
        const token = localStorage.getItem("token");

        const title = titleRef.current?.value;
        const type = typeRef.current?.value;
        const link = linkRef.current?.value

        const newContent = {
            title:title,
            type:type,
            link:link
        }

        try {
            const response = await axios.post(BACKEND_URL + "/api/v1/content",newContent  
            ,{
                headers: {
                    authorization : token
                }
            })
            // console.log(response.data.message);
            setAddModalState()
            setContents((prevcontents) => [...prevcontents,newContent])
            toast.success(response.data.message)

        } catch (error) {
            toast.error("Adding content Failed!");
            console.log(error);
            
        }
    }

    return <div>
        {isModalOpen && <div className="bg-white h-64 w-80 absolute z-50 rounded-lg top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 py-6 px-4 flex flex-col justify-evenly items-center">

            <div className="absolute top-0 right-0 hover:bg-gray-300 m-2 rounded-md cursor-pointer" onClick={setAddModalState}><CrossIcon size="md" /></div>

        {/* Title Input */}
            <input ref={titleRef} type="text" placeholder="Title" className="w-full bg-gray-300 shadow-md rounded-lg h-9 px-3 placeholder:text-gray-600" />

        {/* Type Input */}
            <div className="w-full bg-gray-300 border rounded-lg h-9 
                            px-3 placeholder:text-gray-600 text-center shadow-md">
                <select ref={typeRef} className="h-full w-full bg-gray-300" name="type" id="type">
                    <option value="Tweet">Tweet</option>
                    <option value="Youtube">Youtube</option>
                </select>
            </div>

        {/* Link input */}
            <input ref={linkRef} className="w-full bg-gray-300 shadow-md rounded-lg h-9 px-3 placeholder:text-gray-600" type="text" placeholder="Link" />

            <button 
            className="bg-purple-600 hover:bg-blue-600 text-white h-9 w-1/2 rounded-lg"
            onClick={addContent}
            >Add</button>

        </div>}
    </div>
}