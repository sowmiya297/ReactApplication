import { FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from './PostType'

const initialState = {
    posts: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_SUCCESS:
            return {
                posts: action.payload,
                error: ''
            }
        case FETCH_POSTS_ERROR:
            return {
                posts: [],
                error: action.payload
            }
        default: return state
    }
}

export default reducer;