import { SAVE_POSTS, SAVE_SELECTED_POST, SAVE_COMMENT } from './actionTypes';
import { TPost } from '../../../types/TPost';

export interface IPostInitialState {
    posts?: TPost[];
    selectedPost?: TPost;
}

export const postInitialState: IPostInitialState = {
    posts: null,
    selectedPost: null,
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
        default: {
            return state;
        }
    }
}
