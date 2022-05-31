import { Link } from 'react-router-dom';
import { deleteCommentAction } from '../../../../actions/postAction';
import { deleteComment } from '../../../../api/post';
import { useAuth } from '../../../../contexts/AuthContext';
import { usePost } from '../../../../contexts/PostContext';
import { timeSince } from '../../../../services/dateFormat';
import UserIcon from '../../../common/UserIcon';

function CommentItem({ comment }) {
  // console.log(comment);
  const { User, updatedAt, title, postId, id: commentId } = comment;
  // console.log(User);
  const { id, firstName, lastName, profilePic } = User;

  const { user } = useAuth();
  const { dispatch } = usePost();

  const handleClickDelete = async () => {
    try {
      await deleteComment(postId, commentId);
      dispatch(deleteCommentAction({ postId, commentId }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex">
      <Link to={'/profile' + id}>
        <UserIcon src={profilePic} size={32} />
      </Link>

      <div className="d-flex flex-column ms-2">
        <div className="d-flex align-items-center">
          <div className="d-flex flex-column align-items-start tw-py-2 tw-px-3 bg-gray-200 rounded-2xl">
            <Link
              to={'/profile' + id}
              className="text-dark text-3 fw-bold no-underline hover-underline"
            >
              {firstName} {lastName}
            </Link>
            <small>{title}</small>
          </div>

          {user.id === id && (
            <div className="dropdown ms-1">
              <button
                className="btn rounded-circle h-8 w-8 position-relative hover-bg-gray-200 shadow-none"
                data-bs-toggle="dropdown"
              >
                <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
              </button>
              <div className="dropdown-menu">
                <button className="dropdown-item" type="button">
                  Edit
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={handleClickDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>

        <span className="text-muted ms-2 text-3">{timeSince(updatedAt)}</span>
      </div>
    </div>
  );
}

export default CommentItem;
