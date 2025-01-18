import { DocumentIcon } from "../../icons/documentIcon";
import { LinkIcon } from "../../icons/linkIcon";
import { LogoutIcon } from "../../icons/logoutIcon";
import { TagIcon } from "../../icons/tagIcon";
import { TweetIcon } from "../../icons/tweetIcon";
import { VideoIcon } from "../../icons/videoIcon";
import { Button } from "./Button";

export function Sidebar(){
    
    return <div className=" min-h-[100vh-4rem] w-12 md:w-40 text-gray-600 pl-2 md:px-4 pt-4 fixed left-0 top-16">
  
            <div className="tweets flex gap-2 items-center gap-2r hover:bg-gray-200 hover:cursor-pointer duration-200 w-full py-1 px-1 rounded">
                <TweetIcon size="md"/>
                <span className=" hidden text-sm md:block">Tweets</span>
            </div>

            <div className="videos flex gap-2 items-center hover:bg-gray-200 hover:cursor-pointer duration-200 w-full py-1 px-1 rounded">
                <VideoIcon size="md"/>
                <span className=" hidden text-sm md:block">Videos</span>
            </div>

            <div className="documents flex gap-2 items-center hover:bg-gray-200 hover:cursor-pointer duration-200 w-full py-1 px-1 rounded">
                <DocumentIcon size="md"/>
                <span className=" hidden text-sm md:block">Documents</span>
            </div>

            <div className="documents flex gap-2 items-center hover:bg-gray-200 hover:cursor-pointer duration-200 w-full py-1 px-1 rounded">
                <LinkIcon size="md"/>
                <span className=" hidden text-sm md:block">Links</span>
            </div>

            <div className="documents flex gap-2 items-center hover:bg-gray-200 hover:cursor-pointer duration-200 w-full py-1 px-1 rounded">
                <TagIcon size="md"/>
                <span className=" hidden text-sm md:block">Tags</span>
            </div>

        <div className="hidden md:block fixed bottom-10 left-8">
            <Button variant="primary" size="sm" text="Logout" endIcon={<LogoutIcon size="sm"/>}/>
            </div>

    </div>
}