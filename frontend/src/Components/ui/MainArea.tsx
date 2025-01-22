
import { useEffect } from "react"
import { Card } from "./Card"
import axios from "axios"
import { BACKEND_URL } from "../../../config"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { ContentAtom } from "../../Atoms/ContentsAtom"

export function MainArea() {

    const contents = useRecoilValue(ContentAtom);
    const setContents = useSetRecoilState(ContentAtom)

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

    useEffect(() => {
        fetchuserContent()
    }, [])

    //    useEffect(() => {
    //     // console.log(contents);          //state update is asynchronous, thus contents are not set immediately
    //    },[contents])

    return <div>
        {/* Mainarea */}
        <div className="min-h-[calc(100vh-6em)]  w-[calc(100svw-4rem)] md:w-[calc(100svw-12rem)] bg-gray-200 absolute top-16 left-12 md:left-40 box-border overflow-hidden overflow-y-auto rounded-lg">

            {/* Card Section */}
            <div className="card-section flex gap-6 flex-wrap justify-start absolute top-0 lg:px-6 mt-4">


                {(contents.length !== 0)
                    ? contents.map((content) => <Card key={content._id} type={content.type} title={content.title} link={content.link} />)

                    : <div className=" mt-32 text-2xl text-gray-400 font-bold ">
                        <h2>No Brains yet!!!</h2>
                    </div>
                }

            </div>
        </div>
    </div>
}