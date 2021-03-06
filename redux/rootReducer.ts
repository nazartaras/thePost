import { combineReducers } from 'redux';
import postReducer, { postInitialState, IPostInitialState } from '../components/PostItem/redux/reducer';

export const rootInitialState: {
    postList: IPostInitialState,
} = {
    postList: postInitialState,
};

const rootReducer = combineReducers({
    postList: postReducer,
});

export default rootReducer;
