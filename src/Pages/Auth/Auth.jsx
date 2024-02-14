import React from 'react'
import "./Auth.css"
import Signin from '../../Components/Register/Signin'

const Auth = () => {
    return (
        <div>
            <div className='flex items-center justify-center h-[100vh]'>
                <div className='relative hidden lg:block'>
                    <div className='h-[35.3rem] w-[23rem]'>
                        <img className='h-full w-full' src="" alt="" />
                    </div>
                    <div className='mobileWallpaper h-[33rem] w-[15.7rem] absolute top-6 right-3'>

                    </div>
                </div>
                <div>
                    <Signin />
                </div>
            </div>
        </div>
    )
}

export default Auth