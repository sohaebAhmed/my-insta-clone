import { AiOutlineHome } from "react-icons/ai";

export const mainu = [
    {
        title: "Home", icon: <AiOutlineHome className="text-2xl mr-5" />, iactiveicon: <AiFillHome></AiFillHome>
    },
    {
        title: "Search", icon: <AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>, activeIcon: <AiOutlineSearch></AiOutlineSearch>
    },
    {
        title: "Explorer", icon: <AiOutlineCompass className="text-2xl mr-5"></AiOutlineCompass>, activeIcon: <AiFillCompass></AiFillCompass>
    },
    {
        title: "Reels", icon: <RiVideoLine className="text-2xl mr-5"></RiVideoLine>, activeIcon: <RiVideoFill></RiVideoFill>
    },
    {
        title: "Message",
        icon: <AiOutlineMessage className="text-2xl mr-5"></AiOutlineMessage>,
        activeIcon: <AiFillMessage></AiFillMessage>
    },
    {
        title: "Notificatiion",
        icon: <AiOutlineHeart className="text-2xl mr-5"></AiOutlineHeart>,
        activeIcon: <AiFillHeart></AiFillHeart>
    },
    {
        title: "Create",
        icon: <AiOutlinePlusCircle className="text-2xl mr-5"></AiOutlinePlusCircle>,
        activeIcon: <AiFillPlusCircle></AiFillPlusCircle>
    },
    {
        title: "Profile",
        icon: <CgProfile className="text-2xl mr-5"></CgProfile>,
        activeIcon: <CgProfile></CgProfile>
    }
]