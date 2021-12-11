export const initialState = {
  mainPosts: [
    {
      id: 1,
      user: {
        id: 1,
        nickname: "제로초",
      },
      content: "asdf #asdf #asdfasdf",
      Images: [
        {
          src: "https://dummyimage.com/600x400/000/fff",
        },
        {
          src: "https://dummyimage.com/600x400/000/fff",
        },
        {
          src: "https://dummyimage.com/600x400/000/fff",
        },
        {
          src: "https://dummyimage.com/600x400/000/fff",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
            content: "개정판이 나왔군요~",
          },
        },
        {
          User: {
            nickname: "nero",
            content: "개정판이 나왔군요~",
          },
        },
        {
          User: {
            nickname: "nero",
            content: "개정판이 나왔군요~",
          },
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

export const ADD_POST = "ADD_POST";
export const ADD_POST_ACTION = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  user: {
    id: 1,
    nickname: "제로초",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
