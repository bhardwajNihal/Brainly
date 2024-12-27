import {FaTwitter} from "react-icons/fa";

interface tweetProp{
    size: "sm" |"md" |"lg"
}

const tweetSize = { 
    sm : "15px",
    md : "20px",
    lg : "25px",
}

export function TweetIcon(prop:tweetProp){

    return <FaTwitter size={tweetSize[prop.size]}/>
}