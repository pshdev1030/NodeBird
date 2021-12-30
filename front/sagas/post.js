import { all, fork, delay, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_TO_ME,
  REMOVE_POST_FAILURE,
  REMOVE_POST_OF_ME,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_REQUEST,
  LOAD_POST_FAILURE,
  LOAD_POST_REQUEST,
  LOAD_POST_SUCCESS,
  generateDummyPost,
} from "../reducers/post";
import shortId from "shortid";

function addPostAPI() {
  return axios.post("/api/post");
}

function* addPost(action) {
  try {
    const id = shortId.generate();
    yield delay(1000);
    yield put({
      type: ADD_POST_SUCCESS,
      data: { content: action.data },
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: id,
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function addCommentAPI() {
  return axios.post(`/api/${data.id}/comment`);
}

function* addComment(action) {
  try {
    yield delay(1000);
    const id = shortId.generate();
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: {
        id,
        content: action.data,
      },
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    });
  }
}

function* removePost(action) {
  try {
    yield delay(1000);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: action.data,
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function* loadPost() {
  try {
    yield delay(1000);
    yield put({
      type: LOAD_POST_SUCCESS,
      data: generateDummyPost(10),
    });
  } catch (error) {
    yield put({
      type: LOAD_POST_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLoadPost() {
  yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment),
    fork(watchRemovePost),
    fork(watchLoadPost),
  ]);
}
