import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Profile from "../Profile/Profile"
import Auth from "../Auth/Auth";
import HomePage from "../HomePage/HomePage";
import EditAccountDetails from "../../Components/ProfileComponents/EditAccount/EditAccountDetails";

const Router = () => {
    const location = useLocation();
    return (
        <div>
            {(location.pathname !== "/login" && location.pathname !== "signup") && (
                <div className="flex">
                    <div className="w-[20%] border border-l-slate-500 pl-10">
                        <Sidebar />
                    </div>
                    <div>
                        <Routes>
                            <Route path='/' element={<HomePage />}></Route>
                            <Route path='/:username' element={<Profile />}></Route>
                            <Route path="/story" element={<Story />}></Route>
                            <Route path="/comment/:postId" element={<HomePage />}></Route>
                            <Route path="/account/edit" element={<EditAccountDetails />}></Route>
                        </Routes>
                    </div>
                </div>
            )} {(location.pathname === "/login" || location.pathname === "signup") && (
                <div>
                    <Routes>
                        <Route path='/signup' element={<Auth />}></Route>
                        <Route path="/login" element={<Auth />}></Route>
                    </Routes>
                </div>
            )}
        </div>
    )
}

export default Router