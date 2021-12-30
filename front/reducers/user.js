import produce from "immer";
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "./post";

export const initialState = {
  logInLoading: false,
  logInDone: false,
  logInError: false,
  logOutLoading: false,
  logOutDone: false,
  logOutError: false,
  signUpLoading: false,
  signUpDone: false,
  signUpFailure: false,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameFailure: false,
  me: null,
  signUpData: {},
  loginData: {},
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
export const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
export const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";

export const FOLLOW_REQUEST = "FOLLOW_REQUEST";
export const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
export const FOLLOW_FAILURE = "FOLLOW_FAILURE";

export const UNFOLLOW_REQUEST = "UN_FOLLOW_REQUEST";
export const UNFOLLOW_SUCCESS = "UN_FOLLOW_SUCCESS";
export const UNFOLLOW_FAILURE = "UN_FOLLOW_FAILURE";

export const logInRequestAction = (data) => {
  return {
    type: "LOG_IN_REQUEST",
    data,
  };
};

export const logOutRequestAction = () => {
  return {
    type: "LOG_OUT_REQUEST",
  };
};

const dummyUser = (data) => ({
  ...data,
  nickname: "ㅁㄴㅇㄹ",
  id: 1,
  Posts: [{ id: "asdf11" }],
  Followings: [
    { nickname: "부기초" },
    { nickname: "부기초" },
    { nickname: "부기초" },
  ],
  Followers: [
    { nickname: "부기초" },
    { nickname: "부기초" },
    { nickname: "부기초" },
  ],
});

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.me = dummyUser(action.data);
        draft.logInLoading = false;
        draft.logInDone = true;
        break;
      case LOG_IN_FAILURE:
        draft.me = null;
        draft.logInLoading = false;
        draft.logInDone = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        break;
      case LOG_OUT_SUCCESS:
        draft.me = null;
        draft.logOutLoading = false;
        draft.logInDone = false;
        break;
      case LOG_OUT_FAILURE:
        draft.logInDone = false;
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpDone = false;
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        break;
      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        break;
      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameDone = false;
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({ id: action.data });
        break;
      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
        break;
      default:
        break;
    }
  });
};

export default reducer;

// 데이터구조 명시해서 문서화
