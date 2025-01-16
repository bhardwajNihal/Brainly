import { Button } from "./Button"
import { ShareIcon } from "../../icons/shareIcon"
import { PlusIcon } from "../../icons/plusIcon"
import { MenuIcon } from "../../icons/MenuIcon"
import { LogoIcon } from "../../icons/LogoIcon"
import { useSetRecoilState } from "recoil"
import { addModalAtom } from "../../Atoms/AddModalAtom"


export function Navbar(){

    const AddModalState = useSetRecoilState(addModalAtom)
    
    function setAddModalState(){
        AddModalState(curr => !curr)
    }


    return <div className=" h-16 w-full bg-white flex justify-between items-center px-5 fixed top-0 left-0 z-10">

        <div className=" text-purple-600 text-xl font-bold flex gap-1 items-center my-4"><LogoIcon size="sm"/>Brainly</div>

        <div className="menuIcon md:hidden text-purple-600">
            <MenuIcon size="md"/>
        </div>

        <div className="hidden md:block md:flex md:gap-4">

            <div><Button variant="secondary" size="sm" text="Share Brain" startIcon={<ShareIcon size="md"/>}/></div>
            
            <div><Button variant="primary" size="sm" text="Add content" startIcon={<PlusIcon size="md" />} onclick={setAddModalState}/></div>
        </div>

    </div>
}