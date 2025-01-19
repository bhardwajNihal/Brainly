import { useSetRecoilState } from "recoil";
import { DocumentIcon } from "../../icons/documentIcon";
import { LinkIcon } from "../../icons/linkIcon";
import { LogoutIcon } from "../../icons/logoutIcon";
import { PlusIcon } from "../../icons/plusIcon";
import { ShareIcon } from "../../icons/shareIcon";
import { TagIcon } from "../../icons/tagIcon";
import { TweetIcon } from "../../icons/tweetIcon";
import { VideoIcon } from "../../icons/videoIcon";
import { Button } from "./Button";
import { addModalAtom } from "../../Atoms/AddModalAtom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Sidebar() {

    const AddModalState = useSetRecoilState(addModalAtom)

    function setAddModalState() {
        AddModalState(curr => !curr)
        console.log("modal state changed!");
        
    }

    const navigate = useNavigate()
    async function Logout(){
        localStorage.removeItem("token");
        await new Promise(res => setTimeout(res,2000))
        navigate("/")
        toast.success("You Logged out successfully!")
    }



    return <div className="h-[calc(100vh-4rem)] w-12 md:w-40 text-gray-600 pl-2 md:px-4 pt-4 relative left-0 top-16 ">

        <div className="tweets flex gap-2 items-center gap-2r hover:bg-gray-200 hover:cursor-pointer duration-200 w-full py-1 px-1 rounded">
            <TweetIcon size="md" />
            <span className=" hidden text-sm md:block">Tweets</span>
        </div>

        <div className="videos flex gap-2 items-center hover:bg-gray-200 hover:cursor-pointer duration-200 w-full py-1 px-1 rounded">
            <VideoIcon size="md" />
            <span className=" hidden text-sm md:block">Videos</span>
        </div>

        <div className="documents flex gap-2 items-center hover:bg-gray-200 hover:cursor-pointer duration-200 w-full py-1 px-1 rounded">
            <DocumentIcon size="md" />
            <span className=" hidden text-sm md:block">Documents</span>
        </div>

        <div className="documents flex gap-2 items-center hover:bg-gray-200 hover:cursor-pointer duration-200 w-full py-1 px-1 rounded">
            <LinkIcon size="md" />
            <span className=" hidden text-sm md:block">Links</span>
        </div>

        <div className="documents flex gap-2 items-center hover:bg-gray-200 hover:cursor-pointer duration-200 w-full py-1 px-1 rounded">
            <TagIcon size="md" />
            <span className=" hidden text-sm md:block">Tags</span>
        </div>


    <div className="absolute bottom-5 hidden md:block">
        <div >
            <Button variant="primary" size="sm" text="Add content" startIcon={<PlusIcon size="md" />} onclick={setAddModalState} />
        </div>

        <div className=" mt-2 mb-4" >
            <Button variant="secondary" size="sm" text="Share Brain" startIcon={<ShareIcon size="md" />} />
        </div>

        <div >
            <Button variant="primary" size="sm" text="Logout" endIcon={<LogoutIcon size="sm"/>} onclick={Logout}/>
        </div>
    </div>

    </div >
}