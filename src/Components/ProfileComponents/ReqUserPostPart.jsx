import React from "react"
import ".ReqUserPostCard.css"
import { useDispatch, useSelector } from "react-redux"
import { reqUserPostAction } from "../../Redux/Post/Action"
const ReqUserPostPart = () => {

    const [activeTab, setActiveTab] = useState()
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const { user, post } = useSelector(store => store)

    const tabs = [
        {
            tab: "Post",
            icon: <AiOutlineTable></AiOutlineTable>,
            activeTab: ""
        },
        {
            tab: "Reels",
            icon: <RiVideoAddLine></RiVideoAddLine>
        },
        {
            tab: "Saved",
            icon: <BiBookmark></BiBookmark>
        },
        {
            tab: "Tagged",
            icon: <AiOutlineUser></AiOutlineUser>
        }
    ]

    useEffect(() => {
        const data = {
            jwt: token,
            userId: user.reqUser?.id
        }
        dispatch(reqUserPostAction(data))
    }, [])

    return (
        <div>
            <div className="flex space-x-14 border-t relative">
                {tabs.map((item) =>
                    <div onClick={() => setActiveTab(item.tab)} className={`${activeTab === item.tab ? "border-t border-black" : "opacity-60"} flex item-center cursor-pounter py-2 text-sm`}>
                        <p>{item.icon}</p>
                        <p className="ml-1">{item.tab}</p>
                    </div>
                )}
            </div>
            <div>
                <div className="flex flex-wrap">
                    {[1, 1, 1,].map((item) => <ReqUserPostCard />)}
                </div>
            </div>
        </div>
    )
}

export default ReqUserPostPart