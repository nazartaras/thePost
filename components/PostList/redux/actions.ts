import {FETCH_POSTS, CREATE_POST} from './actionTypes';

export const fetchPosts = () => {
    return {
        type: FETCH_POSTS,
    };
};

export const createPost = (title, body) => {
    return {
        type: CREATE_POST,
        payload: {title, body},
    };
};
