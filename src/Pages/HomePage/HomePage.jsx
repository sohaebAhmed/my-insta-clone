import React from 'react'
import StoryCircle from '../../Components/Story/StoryCircle'
import PostCard from '../../Components/Post/PostCard'
import CreatePostModel from '../../Components/Post/CreatePostModel'
import { useDisclosure } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { findUserPostAction } from '../../Redux/Post/Action'

const HomePage = () => {
    const { isOpen, onOpen, onClose} = useDisclosure()
    const [userIds, setUserIds] = useState()
    const {user, post} = useSelector((store) => store)
    const token = localStorage.getItem("token")
    const dispatch = useDispatch()

    useEffect(() => {
        const newIds = user.reqUser?.following?.map((user) => user.id)
        setUserIds([user.reqUser?.id, ...newIds])
    },[user.reqUser])

    useEffect(() => {
        const data = {
            jwt: token,
            userIds: [userIds].join(",")
        }
        dispatch(findUserPostAction(data))
    }, [userIds, post.createdPost, post.deletedPost])
    return (
        <div>
            <div className='mt-10 flex w-[100%] justfy-center'>
                <div className='w-[44%] px-10 '>
                    <div className='stroyDiv flex spacex-x-2 border p-4 rounded-md justify-start w-full'>
                        {[1, 1, 11].map((item) => <StoryCircle />)}
                    </div>
                    <div className='spacey-y-10 w-full mt-10'>
                        {post.usersPost.length > 0 && post.usersPost.map((item) => <PostCard />)}
                    </div>
                </div>
                <div className='w-[27%]'>
                    <HomeRight />
                </div>
            </div>
            
        </div>
    )
}

export default HomePage