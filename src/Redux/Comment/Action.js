import { CREATE_COMENT, GET_POST_COMENT, LIKE_COMENT, UNLIKE_COMENT } from "./ActionType"

const BASE_API = "http://localhost:5454/api"

export const createCommentAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API}/comments/create/${data.postId}`, {
            method: "POST",
            headers: {
                "Content-TYPE": "application/json",
                Authorization: "Bearer " + data.jwt
            },
            body: JSON.stringify(data.data)
        })

        const comment = await res.json()
        console.log("Created comment :", comment)
        dispatch({ type: CREATE_COMENT, payload: comment })
    } catch (error) {
        console.log("catch ", error)
    }
}

export const findPostCommentAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API}/comments/${data.postId}`, {
            method: "GET",
            headers: {
                "Content-TYPE": "application/json",
                Authorization: "Bearer " + data.jwt
            },
        })

        const comment = await res.json()
        console.log("find post comment :", comment)
        dispatch({ type: GET_POST_COMENT, payload: comment })
    } catch (error) {
        console.log("catch ", error)
    }
}

export const likeCommentAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API}/comments/like/${data.commentId}`, {
            method: "PUT",
            headers: {
                "Content-TYPE": "application/json",
                Authorization: "Bearer " + data.jwt
            },
        })

        const comment = await res.json()
        console.log("like comment :", comment)
        dispatch({ type: LIKE_COMENT, payload: comment })
    } catch (error) {
        console.log("catch ", error)
    }
}

export const unlikeCommentAction = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API}/comments/unlike/${data.commentId}`, {
            method: "PUT",
            headers: {
                "Content-TYPE": "application/json",
                Authorization: "Bearer " + data.jwt
            },
        })

        const comment = await res.json()
        console.log("unlike comment :", comment)
        dispatch({ type: UNLIKE_COMENT, payload: comment })
    } catch (error) {
        console.log("catch ", error)
    }
}