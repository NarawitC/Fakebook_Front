import { createContext, useContext, useEffect, useReducer } from 'react';
import { initPost } from '../actions/postAction';
import { getAllPost } from '../api/post';
import postReducer, { initial } from '../reducers/postReducer';
const PostContext = createContext();

function PostContextProvider({ children }) {
  const [{ posts }, dispatch] = useReducer(postReducer, initial);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await getAllPost();
        dispatch(initPost(res.data.posts));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);
  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
}

export default PostContextProvider;
// export { PostContext };

function usePost() {
  const ctx = useContext(PostContext);
  return ctx;
}
//* Custom hook เรียกhookใน functionนี้ได้

export { usePost };
