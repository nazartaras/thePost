import { takeEvery, all, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_POSTS, SAVE_POSTS, FETCH_POST_BY_ID, SAVE_SELECTED_POST } from './actionTypes';

function* getPosts(action) {
    try {
        const { data } = yield call(axios.get, 'https://simple-blog-api.crew.red/posts');
        yield put({ type: SAVE_POSTS, payload: data })

    } catch (e) {
        console.log('Post saga error' + e.message);
    }
}

function* getPostById(action) {
    try {
        const {data} = yield call(axios.get, `https://simple-blog-api.crew.red/posts/${action.payload}?_embed=comments`);
        yield put({type: SAVE_SELECTED_POST, payload:data})

    } catch (e) {
        console.log('Post saga error' + e.message);
    }

}

function* watchGetPosts() {
    yield takeEvery(FETCH_POSTS, getPosts);
}

function* watchGetPostById() {
    yield takeEvery(FETCH_POST_BY_ID, getPostById);
}

export default function* () {
    yield all([
        watchGetPosts(),
        watchGetPostById()
    ])
}