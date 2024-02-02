import React from "react"
import { Route, Routes } from "react-router-dom"

const Router = () => {
    return (
        <div>
            <div className="flex">
                <div className="w-[20%] border border-l-slate-500 pl-10">
                    <Sidebar/>
                </div>
                <div>
                    <Routes>
                        <Route path = '/' element={<HomePage/>}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Router