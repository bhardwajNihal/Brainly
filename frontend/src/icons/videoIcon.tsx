import {FaYoutube} from "react-icons/fa";

interface videoprop{
    size: "sm" |"md" |"lg"
}

const videosize = { 
    sm : "15px",
    md : "20px",
    lg : "25px",
}

export function VideoIcon(prop:videoprop){

    return <FaYoutube size={videosize[prop.size]}/>
}