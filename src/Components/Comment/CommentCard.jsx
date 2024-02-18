import { useStatStyles } from '@chakra-ui/react'
import React from 'react'
import { isCommentLikedByUser, timeDifference } from '../../Config/Logics'
import { useDispatch, useSelector } from 'react-redux'
import { likeCommentAction, unlikeCommentAction } from '../../Redux/Comment/Action'

const CommentCard = ({comment}) => {
    const [isCommentLike, setIsCommentLike] = useState(false)
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const {user} = useSelector(store => store)
    const data = {
        commentId:comment.id,
        jwt:token
    }

    const handleLikeComment = () => {
        setIsCommentLike(true)
        dispatch(likeCommentAction(data))
    }
    
    const handleUnlikeComment = () => {
        setIsCommentLike(false)
        dispatch(unlikeCommentAction(data))
    }

    useEffect(() => {
        setIsCommentLike(isCommentLikedByUser(comment, user.reqUser.id))
    }, [user.reqUser, comment])

    return (
        <div>
            <div className='flex items-center justify-center py-5'>
                <div className='flex items-center'>
                    <div>
                        <img className='w-9 h-9 rounded-full' src={comment.userDto.userImage} alt="" />
                    </div>
                    <div>
                        <p>
                            <span className='font-semibold'>username</span>
                            <span className='ml-2'>nice post</span>
                        </p>
                        <div className='flex items-center space-x-3 text-xs opcaity-60 pt-2'>
                            <span>{timeDifference(comment?.createdAt)}</span>
                            {comment?.likedByUsers?.length > 0 && <span>{comment?.likedByUsers?.length} likes</span>}
                        </div>
                    </div>
                </div>
                {isCommentLike ? (
                        <AiFillHeart onClick={handleUnlikeComment} className='text-xs hover:opacity-50 cursor-pointer text-red-600' />
                    ) : (
                        <AiOutlineHeart onClick={handleLikeComment} className='text-xs hover:opacity-50 cursor-pointer text-red-600' />
                    )}
            </div>
        </div>
    )
}

export default CommentCard