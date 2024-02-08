import React from 'react'
import StoryViwer from '../../Components/StoryCompopnents/StoryViwer'

const Story = () => {
const story = [
    {
        image: ""
    }, 
    {
        image: ""
    }, 
    {
        image: ""
    }, 
    {
        image: ""
    }, 
    {
        image: ""
    }
]

    return (
        <div>
            <StoryViwer stories={story}/>
        </div>
    )
}

export default Story