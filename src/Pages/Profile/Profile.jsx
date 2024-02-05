import React from 'react'
import ProfileUserDetails from '../../Components/ProfileComponents/ProfileUserDetails'

const Profile = () => {
    return (
        <div>
            <div className='px-20'>
                <div className=''>
                    <ProfileUserDetails/>
                </div>
            </div>
            <div>
                <RequestUderPostPart></RequestUderPostPart>
            </div>
        </div>
    )
}

export default Profile