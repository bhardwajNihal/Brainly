import { useRecoilValue, useSetRecoilState } from "recoil";
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
import { ConfirmLogout } from "./logoutConfirmation";
import { logoutConfirmation_modal } from "../../Atoms/Logoutconfirmation";
import { CheckIcon } from "../../icons/checkIcon";
import { useState } from "react";
import { ContentAtom } from "../../Atoms/ContentsAtom";
import axios from "axios";
import { BACKEND_URL } from "../../../config";

export function Sidebar() {

// add content dialog-box
    const AddModalState = useSetRecoilState(addModalAtom)
    function setAddModalState() {
        AddModalState(curr => !curr)
        console.log("modal state changed!");
    }

// open logout confirmation dialog box
    const isLogoutModalOpen = useRecoilValue(logoutConfirmation_modal);
    const setLogoutModal = useSetRecoilState(logoutConfirmation_modal);

    function openLogoutModel() {
        setLogoutModal(true)
    }


// Filtering out content, based on type to show on FE
    const [currentContent, setCurrentContent] = useState("all")

    const setContents = useSetRecoilState(ContentAtom)
    // Filtering content based on what's clicked:
    function filterContent(type: string): void {
        async function fetchuserContent() {
            const token = localStorage.getItem("token")
    
            const response = await axios.get(BACKEND_URL + "/api/v1/content", {
                headers: {
                    authorization: token
                }
            })
            // console.log(response.data.content);
            setContents(response.data.content)
        }

        if(type === "all"){
            fetchuserContent()
            return;
        }

        fetchuserContent()
        .then(() => {
            setContents((prevcontents) => prevcontents.filter((c) => c.type === type))
        })
        
    }


    return <div className="h-[calc(100vh-4rem)] w-12 md:w-40 text-gray-600 pl-2 md:px-4 pt-4 relative left-0 top-16 ">

        <div 
        style={(currentContent==="all")? {backgroundColor: "#f7f8fa", borderLeft:"solid 2px lightgray", borderBottom:"solid 2px lightgray"} : {backgroundColor: "white"}} 
        className="tweets flex gap-2 items-center gap-2r hover:cursor-pointer duration-100 w-full py-1 px-1 rounded"
        onClick={() => {
            setCurrentContent("all")
            filterContent("all")
        }}>
            <CheckIcon size="md"/>
            <span className=" hidden text-sm md:block -ml-1">All contents</span>
        </div>

        <div 
        style={(currentContent==="tweet")? {backgroundColor: "#f7f8fa", borderLeft:"solid 2px lightgray", borderBottom:"solid 2px lightgray"} : {backgroundColor: "white"}} 
        className="tweets flex gap-2 items-center gap-2r hover:bg-purple-200 hover:cursor-pointer duration-100 w-full py-1 px-1 rounded"
        onClick={() => {
            setCurrentContent("tweet")
            filterContent("Tweet")
            }}>
            <TweetIcon size="md" />
            <span className=" hidden text-sm md:block">Tweets</span>
        </div>

        <div 
        style={(currentContent==="youtube")? {backgroundColor: "#f7f8fa", borderLeft:"solid 2px lightgray", borderBottom:"solid 2px lightgray"} : {backgroundColor: "white"}} 
        className="videos flex gap-2 items-center hover:bg-purple-200 hover:cursor-pointer duration-100 w-full py-1 px-1 rounded"
        onClick={()=>{
            setCurrentContent("youtube")
            filterContent("Youtube")
            }}>
            <VideoIcon size="md" />
            <span className=" hidden text-sm md:block">Youtube</span>
        </div>



        {/* <div className="documents flex gap-2 items-center hover:bg-gray-200 hover:cursor-pointer duration-200 w-full py-1 px-1 rounded">
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
        </div> */}


        <div className="absolute bottom-5 hidden md:block">
            <div >
                <Button variant="primary" size="sm" text="Add content" startIcon={<PlusIcon size="md" />} onclick={setAddModalState} />
            </div>

            <div className=" mt-2 mb-4" >
                <Button variant="secondary" size="sm" text="Share Brain" startIcon={<ShareIcon size="md" />} />
            </div>


            {/* logout button */}
            <div >
                <Button variant="primary" size="sm" text="Logout" endIcon={<LogoutIcon size="sm" />} onclick={openLogoutModel} />
            </div>
        </div>

        {/* logout confirmation dialog box */}
        {(isLogoutModalOpen) && <ConfirmLogout />}


    </div >
}