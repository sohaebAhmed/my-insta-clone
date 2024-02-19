import React from 'react'
import SuggestionCard from './SuggestionCard'

const HomeRight = () => {
    const { user, post } = useSelector((store) => store)

    return (
        <div className=''>
            <div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div>
                            <img className='w-12 h-12 rounded-full' src={user.reqUser?.image} alt="" />
                        </div>
                        <div className='ml-3'>
                            <p>{user.reqUser?.name}</p>
                            <p className='opacity-70'>{user.username}</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-blue-700 font-semibold'>switch</p>
                    </div>
                </div>
                <div className='space-y-5 mt-10'>
                    {user.popularUsers?.map((item) =>
                        <SuggestionCard user={item} />
                    )}
                </div>
            </div>
        </div>
    )
}