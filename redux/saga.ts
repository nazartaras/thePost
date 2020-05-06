import { all } from 'redux-saga/effects';
import postSaga from '../components/PostItem/redux/saga';

export default function* rootSaga() {
    yield all([
        postSaga(),
    ]);
}
