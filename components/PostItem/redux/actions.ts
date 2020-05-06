import { FETCH_POSTS, CREATE_POST, FETCH_POST_BY_ID, CREATE_COMMENT } from './actionTypes';

export const fetchPosts = (): {
    type: typeof FETCH_POSTS,
} => {
    return {
        type: FETCH_POSTS,
    };
};

export const fetchPostById = (id: string): {
    type: typeof FETCH_POST_BY_ID,
    payload: {
        id: string,
    },
} => {
    return {
        type: FETCH_POST_BY_ID,
        payload: { id },
    };
};

export const createPost = (title: string, body: string): {
    type: typeof CREATE_POST,
    payload: {
        title: string,
        body: string,
    },
} => {
    return {
        type: CREATE_POST,
        payload: { title, body },
    };
};

export const createComment = (postId: string, body: string): {
    type: typeof CREATE_COMMENT,
    payload: {
        postId: string,
        body: string,
    },
} => {
    return {
        type: CREATE_COMMENT,
        payload: { postId, body },
    };
};
