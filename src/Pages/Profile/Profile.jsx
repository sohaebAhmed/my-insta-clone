import React from 'react'
import ProfileUserDetails from '../../Components/ProfileComponents/ProfileUserDetails'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { isFollowing, isReqUser } from '../../Config/Logics'
import { findUserByUserNameAction, getUserProfileAction } from '../../Redux/User/Action'

const Profile = () => {
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const { username } = useParams()
    const { user } = useSelector(store => store)

    const isRequser = isReqUser(user.reqUser?.id, user.findByUsername?.id)
    const isFollowing = isFollowing(user.reqUser, user.findByUsername)

    useEffect(() => {
        const data = {
            token,
            username
        }
        dispatch(getUserProfileAction(token))
        dispatch(findUserByUserNameAction(data))
    }, [username, user.follower, user.following])

    return (
        <div className='px-20'>
            <div className=''>
                <ProfileUserDetails user = {isRequser?user.reqUser:user.findByUsername} isFollowing={isFollowed} isRequesr={isRequesr} />
            </div>
            <div>
                <RequestUderPostPart user = {isRequser?user.reqUser:user.findByUsername} />
            </div>
        </div>
    )
}

export default Profile