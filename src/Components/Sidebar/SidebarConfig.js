import { AiOutlineHome } from "react-icons/ai";

export const mainu = [
    {
        title: "Home", icon: <AiOutlineHome />, iactiveicon: <AiFillHome></AiFillHome>
    },
    {
        title: "Search", icon:<AiOutlineSearch></AiOutlineSearch>, activeIcon:<AiOutlineSearch></AiOutlineSearch>
    },
    {
        title: "Explorer", icon: <AiOutlineCompass></AiOutlineCompass>, activeIcon: <AiFillCompass></AiFillCompass>
    },
    {
        title: "Reels", icon: <RiVideoLine></RiVideoLine>, activeIcon: <RiVideoFill></RiVideoFill>
    },
    {
        title: "Message",
        icon: <AiOutlineMessage></AiOutlineMessage>,
        activeIcon: <AiFillMessage></AiFillMessage>
    },
    {
        title: "Notificatiion",
        icon: <AiOutlineHeart></AiOutlineHeart>,
        activeIcon: <AiFillHeart></AiFillHeart>
    }, 
    {
        title: "Create",
        icon: <AiOutlinePlusCircle></AiOutlinePlusCircle>,
        activeIcon: <AiFillPlusCircle></AiFillPlusCircle>
    }, 
    {
        title: "Profile",
        icon: <CgProfile></CgProfile>,
        activeIcon: <CgProfile></CgProfile>
    }
]