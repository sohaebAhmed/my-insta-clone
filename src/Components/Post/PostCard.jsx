import React from 'react'

const PostCard = () => {
    const [showDropDown, setShowDropDown] = useState(false)
    const [isPostLiked, setIsPostLiked] = useState(false)
    const [isSaved, setIsSaved] = useState(false)

    const handleSavePost = () => {
        setIsSaved(!isSaved)
    }
    const handlePostLike = () => {
        setIsPostLiked(!isPostLiked)
    }
    const handleClick = () => {
        setShowDropDown(!showDropDown)
    }
    return (
        <div>
            <div className='border rounded-md w-full'>
                <div className='flex justify-between items-center w-full py-4 px-5'>
                    <div className='flex items-center'>
                        <img className='h-12 w-12 rounded-full' src="" alt="" />
                        <div className='pl-2'>
                            <p className='font-semibold text-sm'>username</p>
                            <p className='font-thin text-sm'>location</p>
                        </div>
                    </div>
                    <div className='dropdown'>
                        <BsThreeDots className='dots' onClick={handleClick}/>
                        <div className='dropdown-content'>
                            {showDropDown && <p className='b--black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                        </div>
                    </div>
                    <div className='w-full'>
                        <img className='w-full' src="" alt="" />
                    </div>

                    <div className='flex justify-between items-center w-full px-5 py-4'>
                        <div className='flex items-center space-x-2'>
                            {isPostLiked ? <AiFillHeart className="text-2xl hover:opacity-50 cursor-pointer text-red-600" onClick={handlePostLike} /> : <AiOutLineHeart className="text-xl hover:opacity-50 cursor-pointer" onClick={handlePostLike} />}
                            <FaRegComment className="text-xl hover:opacity-50 cursor-pointer"/>
                            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer"/>
                        </div>
                        <div className='cursor-pointer'>
                            {isSaved ? <BsBookMarkFill  className="text-xl hover:opacity-50 cursor-pointer"/> : <BsBookMark onClick={handleSavePost} className="text-xl hover:opacity-50 cursor-pointer"/>}
                        </div>
                    </div>
                    <div className='w-full py-2 px-5'>
                        <p>10 likes</p>
                        <p className='opcity-50 py-2 cursor-pointer'>view all 10 comments</p>
                    </div>

                    <div className='border border-t w-full'>
                        <div className='flex w-full items-center px-5'>
                            <BsEmojiSmile/>
                            <input className="commentInput" type="text" placeholder='Add a comment...'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard