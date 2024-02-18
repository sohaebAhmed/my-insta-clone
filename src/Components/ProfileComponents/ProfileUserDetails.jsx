import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProfileUserDetails = () => {
    const { user } = useSelector(store => store)
    const navigate = useNavigate()

    return (
        <div classname='py-10'>
            <div className='flex items-center'>
                <div className='width-[15%]'>
                    <img
                        className='w-32 h-32 rounded-full'
                        src={user.reqUser?.image} />
                </div>

                <div className='w-full'>
                    <div className='flex space-x-10 items-center'>
                        <p>{user.reqUser?.username}</p>
                        <button onClick={() => navigate("/account/edit")} >Edit Profile</button>
                        <TbCircleDashed></TbCircleDashed>
                    </div>
                    <div className='flex space-x-10'>
                        <div>
                            <span className='font-semibold mr-2'>10</span>
                            <span>post</span>
                        </div>
                        <div>
                            <span className='font-semibold mr-2'>{user.reqUser?.follower.length}</span>
                            <span>follower</span>
                        </div>
                        <div>
                            <span className='font-semibold mr-2'>{user.reqUser?.following.length}</span>
                            <span>following</span>
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold'>{user.reqUser?.name}</p>
                        <p className='font-thin text-sm'>{user.reqUser?.bio}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUserDetails