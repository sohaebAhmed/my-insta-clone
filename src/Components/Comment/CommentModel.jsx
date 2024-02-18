import React from 'react'
import CommentCard from './CommentCard'
import './CommentModel.css'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { findPostCommentAction } from '../../Redux/Comment/Action'
import { findPostByIdAction } from '../../Redux/Post/Action'

const ComentModel = ({ onClose, isOpen, isSaved, isPostLiked, handlePostLike, handleSavePost }) => {
    const [commentContent, setCommentContent] = useState("")
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const { postId } = useParams()
    const { comment, post, user } = useSelector(store => store)

    useEffect(() => {
        const data = {
            jwt: token, postId
        }
        if (postId) {
            dispatch(findPostByIdAction(data))
        }
    }, [comment.createdComment, postId])

    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>

                    <ModalBody>
                        <div className='flex h-[75wh]'>
                            <div className='w-[45%] flex flex-col justify-center'>
                                <img className='max-h-full w-full' src={post.singlePost?.image} alt="" />
                            </div>
                            <div className='w-[55%] pl-10'>
                                <div className='flex justify-between items-center py-5'>
                                    <div className='flex items-center'>
                                        <div>
                                            <img className='w-9 h-9 rounded-full' src={user.reqUser.image} alt="" />
                                        </div>
                                        <div className='ml-2'>
                                            <p>{user.reqUser.username}</p>
                                        </div>
                                    </div>
                                    <BsThreeDots />
                                </div>
                                <hr />
                                <div>
                                    {comment.postComment?.map((item) => <CommentCard />)}
                                </div>
                                <div className='flex justify-between items-center w-full py-4'>
                                    <div className='flex items-center'>
                                        <img className='h-12 w-12 rounded-full' src="" alt="" />
                                        <div className='pl-2'>
                                            <p className='font-semibold text-sm'>username</p>
                                            <p className='font-thin text-sm'>location</p>
                                        </div>
                                    </div>
                                    <div className='dropdown'>
                                        <BsThreeDots className='dots' onClick={handleClick} />
                                        <div className='dropdown-content'>
                                            {showDropDown && <p className='b--black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                                        </div>
                                    </div>
                                    <div className='w-full'>
                                        <img className='w-full' src="" alt="" />
                                    </div>

                                    <div className='flex justify-between items-center w-full py-4'>
                                        <div className='flex items-center space-x-2'>
                                            {isPostLiked ? <AiFillHeart className="text-2xl hover:opacity-50 cursor-pointer text-red-600" onClick={handlePostLike} /> : <AiOutLineHeart className="text-xl hover:opacity-50 cursor-pointer" onClick={handlePostLike} />}
                                            <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
                                            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
                                        </div>
                                        <div className='cursor-pointer'>
                                            {isSaved ? <BsBookMarkFill className="text-xl hover:opacity-50 cursor-pointer" /> : <BsBookMark onClick={handleSavePost} className="text-xl hover:opacity-50 cursor-pointer" />}
                                        </div>
                                    </div>

                                    <div className='w-full py-2 px-5'>
                                        <p>10 likes</p>
                                        <p className='opcity-50 py-2 cursor-pointer'>view all 10 comments</p>
                                    </div>

                                    <div className='w-full py-2 px-5'>
                                        {post.singlePost.likedByUsers.length > 0 && <p>{post.singlePost.likedByUsers.length} likes</p>}
                                        <p className='opcity-50 py-2 cursor-pointer'>view all 10 comments</p>
                                    </div>

                                    <div className='border border-t w-full'>
                                        <div className='flex w-full items-center px-5'>
                                            <BsEmojiSmile />
                                            <input
                                                className="commentInputs"
                                                type="text"
                                                placeholder='Add a comment...'
                                                onChange={(e) => setCommentContent(e.target.value)}
                                                value={commentContent}
                                                onKeyPress={(e) => {
                                                    if (e.key === "Enter") {
                                                        const data = {
                                                            postId, jwt: token, data: {
                                                                content: commentContent
                                                            }
                                                        }
                                                        dispatch(createCommentAction(data))
                                                        setCommentContent("")
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </div>
    )
}

export default ComentModel