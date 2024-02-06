import React from 'react'

const PostCard = () => {
    const [showDropDown, setShowDropDown] = useState(false)
    const handleClick = () => {
        setShowDropDown(!setShowDropDown)
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
                    <div>
                        <BsThreeDots/>
                        <div onClick={handleClick} className='dropdown-content'>
                            <p className='b--black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard