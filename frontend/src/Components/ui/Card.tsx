import { TweetIcon } from "../../icons/tweetIcon"
import { VideoIcon } from "../../icons/videoIcon"
import { DocumentIcon } from "../../icons/documentIcon"
import { ShareIcon } from "../../icons/shareIcon"
import { DeleteIcon } from "../../icons/deleteIcon"

interface cardProps{
    title: string,
    link?: string,
    type: "tweet" | "youtube" | "document" | "others"

}

export function Card({type,title,link}:cardProps){

    return <div className="h-full min-w-32 rounded-lg bg-white shadow-md px-1 py-3">
        
        <div className="cardHead flex justify-between items-center text-gray-500">

            <div className="flex justify-center items-center">
                <div>
                {(type==="tweet" && <TweetIcon size="sm"/>) 
                || (type==="youtube" && <VideoIcon size="sm"/>) 
                || (type==="document" && <DocumentIcon size="sm"/>)}
                </div> 

                <div className="text-gray-700 w-32 text-sm font-medium ml-2 mr-3">
                    {title}
                </div>
            </div>

            <div className="flex justify-center items-center gap-2">
                <div className="hover:bg-gray-300 p-1 rounded cursor-pointer">
                    <ShareIcon size="md"/>
                </div>
                <div className="hover:bg-gray-300 p-1 rounded cursor-pointer">
                    <DeleteIcon size="sm"/>
                </div>
            </div>

        </div>

        <div className="cardMain my-2 mx-1">

            {(type==="youtube" &&
                <iframe className="w-full" src={link?.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>)
                
            || (type==="tweet" &&
                <blockquote className="twitter-tweet">
                <a href={link?.replace("x.com","twitter.com")}></a> 
                </blockquote>)    

            }

        </div>


        <div className="cardFoot">

        </div>
    </div>
}