import { initPost } from '../../../../actions/postAction';
import { createLike, deleteLike, getAllPost } from '../../../../api/post';
import { useAuth } from '../../../../contexts/AuthContext';
import { usePost } from '../../../../contexts/PostContext';

function PostResponse({ showComment, likes, postId }) {
  const { user } = useAuth();

  const isLiked = likes.find((like) => {
    return like.userId === user.id;
  });
  const { dispatch } = usePost();

  const handleClickLike = async () => {
    try {
      if (isLiked) {
        await deleteLike(postId);
      } else {
        await createLike(postId);
      }
      const res = await getAllPost();
      dispatch(initPost(res.data.posts));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex space-x-1 py-1">
      <button
        className={`btn  flex-1 d-flex align-items-center space-x-2 justify-content-center hover-bg-gray-200 text-${
          isLiked ? 'primary' : 'muted'
        }`}
        onClick={handleClickLike}
      >
        <i className="fa-regular fa-thumbs-up" />
        <small className="fw-bold">Like</small>
      </button>
      <button
        className="btn text-muted flex-1 d-flex align-items-center space-x-2 justify-content-center hover-bg-gray-200"
        onClick={showComment}
      >
        <i className="fa-regular fa-message" />
        <small className="fw-bold">Comment</small>
      </button>
    </div>
  );
}

export default PostResponse;
