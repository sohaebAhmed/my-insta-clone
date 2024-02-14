import React from 'react'
import "./Auth.css"
import Signin from '../../Components/Register/Signin'
import { useLocation } from 'react-router-dom'

const Auth = () => {
    const location = useLocation()
    return (
        <div>
            <div className='flex items-center justify-center h-[100vh] space-x-5'>
                <div className='relative hidden lg:block'>
                    <div className='h-[35.3rem] w-[23rem]'>
                        <img className='h-full w-full' src="" alt="" />
                    </div>
                    <div className='mobileWallpaper h-[33rem] w-[15.7rem] absolute top-6 right-3'>

                    </div>
                </div>
                <div className='w-[40vw] lg:w-[23vw]'>
                    {location.pathname === "/login" ? <Signin /> : <Signup />}
                </div>
            </div>
        </div>
    )
}

export default Auth