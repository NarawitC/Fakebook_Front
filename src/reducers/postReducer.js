import { INIT } from '../actions/postAction';

export const initial = {
  posts: [],
  comments: {},
};

export default function postReducer(state, action) {
  switch (action.type) {
    case INIT: {
      return { ...state, posts: action.payload };
    }

    default:
      return state;
  }
}
