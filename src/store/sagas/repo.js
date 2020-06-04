import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../services/api';

import { Actions, Types } from '../ducks/repo';

export function* getRepo({ payload }) {
	try {
		const {
			data: { data },
		} = yield call(api.get, '/repos', payload.data);
		yield put(Actions.getRepoSuccess(data));
	} catch (err) {
		console.log(err.response);
		yield put(Actions.getRepoError());
	}
}

export default function* rootSaga() {
	yield all([takeLatest(Types.GET_REPO_REQUEST, getRepo)]);
}
