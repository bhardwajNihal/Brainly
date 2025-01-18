import { PlusIcon } from "../../icons/plusIcon"
import { ShareIcon } from "../../icons/shareIcon"
import { Button } from "./Button"
import { Card } from "./Card"
import { useSetRecoilState } from "recoil"
import { addModalAtom } from "../../Atoms/AddModalAtom"

export function MainArea(){

    const AddModalState = useSetRecoilState(addModalAtom)
    
    function setAddModalState(){
        AddModalState(curr => !curr)
    }
    
    return <div className="min-h-[calc(100vh-4em)]  w-[calc(100svw-4rem)] md:w-[calc(100svw-12rem)] bg-gray-200 flex flex-col justify-start items-center gap-4 py-4 px-4 lg:px-8 absolute top-16 left-12 md:left-40 box-border overflow-hidden overflow-y-auto rounded-lg">
        
    <h2 className="text-xl font-semibold text-gray-600">All content</h2>

    <div className="card-section w-full h-full flex gap-6 flex-wrap justify-start">

    <Card type={"tweet"} title={"An Important Tweet"} link="https://x.com/i/status/1878110938877820982"/> 

    <Card type={"youtube"} title={"How to code a 2048 game in Js"} link="https://www.youtube.com/watch?v=veMa7GPhrIg"/> 

    <Card type={"document"} title={"A document with something"}/> 
    </div>
        
    <div className="hidden md:block md:flex md:gap-4 fixed bottom-10 right-5">

            <div className="shadow-lg"><Button variant="secondary" size="sm" text="Share Brain" startIcon={<ShareIcon size="md"/>}/></div>
            
            <div className="shadow-lg shadow-gray-400"><Button variant="primary" size="sm" text="Add content" startIcon={<PlusIcon size="md" />} onclick={setAddModalState}/></div>
        </div>
        
    </div>
}