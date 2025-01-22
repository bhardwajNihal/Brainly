import { TweetIcon } from "../../icons/tweetIcon"
import { VideoIcon } from "../../icons/videoIcon"
import { DocumentIcon } from "../../icons/documentIcon"
import { ShareIcon } from "../../icons/shareIcon"
import { DeleteIcon } from "../../icons/deleteIcon"
import { useEffect, useRef } from "react"
import axios from "axios"
import { BACKEND_URL } from "../../../config"
import { toast } from "react-toastify"
import { useSetRecoilState } from "recoil"
import { ContentAtom } from "../../Atoms/ContentsAtom"

interface cardProps{
    title: string,
    link?: string,
    type: "Tweet" | "Youtube"
}

export function Card({type,title,link}:cardProps){

    const shareRef = useRef<HTMLButtonElement>(null);
    const cardRef = useRef<HTMLDivElement>(null)

    const setContents = useSetRecoilState(ContentAtom)

    async function deleteCard() {
        // console.log(cardRef.current?.textContent);
        const title = cardRef.current?.textContent;
        const token = localStorage.getItem("token")

    // fetching Content ID: 
        try {
            const response = await axios.post(BACKEND_URL + "/api/v1/content/getCardData",{
                title
            },{
                headers:{
                    authorization : token
                }
            })
            // console.log(response.data.response[0]._id);
            const contentId = response.data.response[0]._id

    // Deleting Content with given ID
        const deleteResponse = await axios.delete(BACKEND_URL + `/api/v1/content/${contentId}`,{
            headers : {                // axios.delete doesn's accept body, Id should be passed as parameters
                authorization : token
            }
        })
        // console.log(deleteResponse.data.message);
        setContents((prevcontents) => prevcontents.filter((c) => c._id != contentId))
        toast.success(deleteResponse.data.message)
    
        } catch (error) {
            console.log("Error Deleting Content!",error);
            toast.error("Error Deleting Content!")   
        }
        
    }

// solution provided by chatgpt, for twitter loading fails : 
useEffect(() => {
    if (type === "Tweet" && window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load(cardRef.current); // Trigger widget re-render for this specific card
    }
}, [type, link]); // Run effect whenever type or link changes





    return <div ref={cardRef} className="h-full min-w-32 rounded-lg bg-white shadow-md px-1 py-3">
        
        <div className="cardHead flex justify-between items-center text-gray-500">

            <div className="flex justify-center items-center">
                <div>
                {
                (type==="Tweet" && <TweetIcon size="sm"/>) || 
                (type==="Youtube" && <VideoIcon size="sm"/>)
                }
                </div> 

                <div className="text-gray-700 w-32 text-sm font-medium ml-2 mr-3">
                    {title}
                </div>
            </div>

            <div className="flex justify-center items-center gap-2">
                <div className="hover:bg-gray-300 p-1 rounded cursor-pointer">
                    <button ref={shareRef}><ShareIcon size="md"/></button>
                </div>
                <div className="hover:bg-gray-300 p-1 rounded">
                    <button 
                    onClick={deleteCard}
                    ><DeleteIcon size="sm"/></button>
                </div>
            </div>

        </div>

        <div className="cardMain my-2 mx-1">

            {(type==="Youtube" &&
                <iframe className="w-full" src={link?.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>)
                
            || (type==="Tweet" &&
                <blockquote className="twitter-tweet">
                <a href={link?.replace("x.com","twitter.com")}></a> 
                </blockquote>)    

            }

        </div>


        <div className="cardFoot">

        </div>
    </div>
}