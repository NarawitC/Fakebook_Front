import {
  CREATE_COMMENT,
  DELETE_COMMENT,
  DELETE_POST,
  INIT,
} from '../actions/postAction';

export const initial = {
  posts: [],
  commentMapping: {},
};

export default function postReducer(state, action) {
  switch (action.type) {
    case INIT: {
      const commentMapping = action.payload.reduce((acc, el) => {
        acc[el.id] = el.Comments;
        return acc;
      }, {});
      return { ...state, posts: action.payload, commentMapping };
    }

    case CREATE_COMMENT: {
      // console.log(state.commentMapping);
      const newComments = [...state.commentMapping[action.payload.postId]];
      const r = newComments.push({
        ...action.payload.comment,
        User: action.payload.user,
      });
      // console.log(newComments);
      return {
        ...state,
        commentMapping: {
          ...state.commentMapping,
          [action.payload.postId]: newComments,
        },
      };
    }
    case DELETE_COMMENT: {
      const newComments = [
        ...state.commentMapping[action.payload.postId],
      ].filter((el) => el.id !== action.payload.commentId);
      return {
        ...state,
        commentMapping: {
          ...state.commentMapping,
          [action.payload.postId]: newComments,
        },
      };
    }
    case DELETE_POST: {
      console.log(state.posts);
      const postId = action.payload.postId;
      console.log(postId);
      const newPosts = [...state.posts].filter((el) => el.id !== postId);
      console.log({
        ...state,
        posts: newPosts,
      });
      return {
        ...state,
        posts: newPosts,
      };
    }

    default:
      return state;
  }
}
