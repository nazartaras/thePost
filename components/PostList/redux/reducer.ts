import { SAVE_POSTS, SAVE_SELECTED_POST } from './actionTypes';
import { IPost } from '../IPost';

export interface IPostInitialState {
    posts?: Array<IPost>,
    selectedPost?: IPost
}

export const postInitialState: IPostInitialState = {
    posts: null,
    selectedPost: null
}

export default function (state = postInitialState, action) {
    switch (action.type) {
        case SAVE_POSTS: {
            return {
                ...state,
                posts: action.payload
            }
        }
        case SAVE_SELECTED_POST: {
            return {
                ...state,
                selectedPost: action.payload
            }
        }
        default: {
            return state;
        }
    }
}