import React from "react"

const ReqUserPostCard = () => {
    return (
        <div className="p-2">
            <div className="post w-60 h-60">
                <img className="cursor-pointer" src="" alt="" />
                <div className="overlay">
                    <div className="overlay-text flex justify-between">
                        <div>
                            <AiFillHeart></AiFillHeart>
                            <span>10</span>
                        </div>
                        <div>
                            <FaComnent></FaComnent>
                            <span>30</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReqUserPostCard