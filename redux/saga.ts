import { all } from 'redux-saga/effects';
import postSaga from '../components/PostList/redux/saga'

export default function* rootSaga(){
    yield all([
        postSaga()
    ]);
}