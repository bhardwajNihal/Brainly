
import { useRecoilValue, useSetRecoilState } from "recoil"
import { addModalAtom } from "../../Atoms/AddModalAtom"

export function Overlay(){

    const isModalOpen = useRecoilValue(addModalAtom)
    const AddModalState = useSetRecoilState(addModalAtom)
    
    function setAddModalState(){
        AddModalState(curr => !curr)
    }
    return <div onClick={setAddModalState}>
        {isModalOpen && <div className="h-full w-svw bg-black/50 backdrop-blur-sm absolute top-0 left-0 z-30 ">
            </div>}
    </div>
}