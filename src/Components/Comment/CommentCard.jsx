import { useStatStyles } from '@chakra-ui/react'
import React from 'react'

const CommentCard = () => {
    const [isCommentLike, setIsCommentLike] = useState()
    const handleLikeComment = () => {
        setIsCommentLike(!isCommentLike)
    }
    return (
        <div>
            <div className='flex items-center justify-center py-5'>
                <div className='flex items-center'>
                    <div>
                        <img className='w-9 h-9 rounded-full' src="" alt="" />
                    </div>
                    <div>
                        <p>
                            <span className='font-semibold'>username</span>
                            <span className='ml-2'>nice post</span>
                        </p>
                        <div>
                            <span className='flex items-center space-x-3 text-xs opcaity-60 pt-2'>1 min ago</span>
                            <span>23 likes</span>
                        </div>
                    </div>
                </div>
                {isCommentLike ? <AiFillHeart onClick={handleLikeComment} className='text-xs hover:opacity-50 cursor-pointer text-red-600' /> : <AiOutlineHeart onClick={handleLikeComment} className='text-xs hover:opacity-50 cursor-pointer text-red-600' />}
            </div>
        </div>
    )
}

export default CommentCard