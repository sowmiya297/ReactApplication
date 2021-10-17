import { FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR } from './PostType'
import axios from 'axios'

export const fetchPostsSuccess = posts => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

export const fetchPostsError = error => {
    return {
        type: FETCH_POSTS_ERROR,
        payload: error
    }
}

export const fetchPosts = () => {
    return (dispatch) => {
        axios.get('https://gorest.co.in/public/v1/posts')
            .then(response => {
                const posts = response.data.data;
                dispatch(fetchPostsSuccess(posts))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchPostsError(errorMsg))
            })
    }
}
