import { SAVE_POSTS, SAVE_SELECTED_POST, SAVE_COMMENT, SET_SELECTED_POST_ID, SAVE_CREATED_POST } from './actionTypes';
import { TPost } from '../../../types/TPost';

export interface IPostInitialState {
    posts?: TPost[];
    selectedPost?: TPost;
    selectedPostId: string;
}

export const postInitialState: IPostInitialState = {
    posts: null,
    selectedPost: null,
    selectedPostId: '',
};

export default function(state = postInitialState, action) {
    switch (action.type) {
        case SAVE_POSTS: {
            return {
                ...state,
                posts: action.payload,
            };
        }
        case SAVE_SELECTED_POST: {
            return {
                ...state,
                selectedPost: action.payload,
            };
        }
        case SAVE_COMMENT: {
            return {
                ...state,
                selectedPost : {
                    ...state.selectedPost,
                    comments: [action.payload].concat(state.selectedPost.comments),
                },
            };
        }
        case SET_SELECTED_POST_ID: {
            return {
                ...state,
                selectedPostId: action.payload.postId
            }
        }
        case SAVE_CREATED_POST: {
            return {
                ...state,
                posts: [action.payload].concat(state.posts),
            }
        }
        default: {
            return state;
        }
    }
}
