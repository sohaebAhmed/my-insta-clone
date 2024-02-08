import React from 'react'
import StoryCircle from '../../Components/Story/StoryCircle'
import PostCard from '../../Components/Post/PostCard'
import CreatePostModel from '../../Components/Post/CreatePostModel'
import { useDisclosure } from '@chakra-ui/react'

const HomePage = () => {
    const { isOpen, onOpen, onClose} = useDisclosure()
    return (
        <div>
            <div className='mt-10 flex w-[100%] justfy-center'>
                <div className='w-[44%] px-10 '>
                    <div className='stroyDiv flex spacex-x-2 border p-4 rounded-md justify-start w-full'>
                        {[1, 1, 11].map((item) => <StoryCircle />)}
                    </div>
                    <div className='spacey-y-10 w-full mt-10'>
                        {[1, 1].map((item) => <PostCard />)}
                    </div>
                </div>
                <div className='w-[35%]'>
                    <HomeRight />
                </div>
            </div>
            <CreatePostModel onClose={onClose} isOpen={isOpen}/>
        </div>
    )
}

export default HomePage