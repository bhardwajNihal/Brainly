
import { addModalAtom } from "../../Atoms/AddModalAtom"
import { CrossIcon } from "../../icons/crossIcon"
import { useRecoilValue,useSetRecoilState } from "recoil"

export function AddModalPopup() {

    const isModalOpen = useRecoilValue(addModalAtom)
    const AddModalState = useSetRecoilState(addModalAtom)
    
    function setAddModalState(){
        AddModalState(curr => !curr)
    }

    return <div>
        {isModalOpen && <div className="bg-white h-64 w-80 absolute z-40 rounded-lg top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 py-6 px-4 flex flex-col justify-evenly items-center">

            <div className="absolute top-0 right-0 hover:bg-gray-300 m-2 rounded-md cursor-pointer" onClick={setAddModalState}><CrossIcon size="md" /></div>

            <input type="text" placeholder="Title" className="w-full bg-gray-300 shadow-md rounded-lg h-9 px-3 placeholder:text-gray-600" />

            <div className="w-full bg-gray-300 border rounded-lg h-9 
                            px-3 placeholder:text-gray-600 text-center shadow-md">
                <select className="h-full w-full bg-gray-300" name="type" id="type">
                    <option value="tweet">Tweet</option>
                    <option value="youtube">Youtube</option>
                    <option value="document">Document</option>
                    <option value="document">Others</option>
                </select>
            </div>

            <input className="w-full bg-gray-300 shadow-md rounded-lg h-9 px-3 placeholder:text-gray-600" type="text" placeholder="Link" />

            <button className="bg-purple-600 text-white h-9 w-1/2 rounded-lg">Add</button>

        </div>}
    </div>
}