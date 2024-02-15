import { CREATE_COMENT, GET_POST_COMENT, LIKE_COMENT, UNLIKE_COMENT } from "./ActionType"

const initialValue = {
    createdComment: null,
    postComment: null,
    likeComment: null,
    unlikeComment: null,
}

export const CommentReducer = (store = initialValue, { type, payload }) => {
    if (type === CREATE_COMENT) {
        return { ...store, createdComment: payload }
    } else if (type === GET_POST_COMENT) {
        return { ...store, postComment: payload }
    } else if (type === LIKE_COMENT) {
        return { ...store, likeComment: payload }
    } else if (type === UNLIKE_COMENT) {
        return { ...store, unlikeComment: payload }
    }
}