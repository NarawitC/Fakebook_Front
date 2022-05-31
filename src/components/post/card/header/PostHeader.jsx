import { Link } from 'react-router-dom';
import { timeSince } from '../../../../services/dateFormat';
import UserIcon from '../../../common/UserIcon';
import PostForm from '../../form/PostForm';
import { useState } from 'react';
import Modal from '../../../ui/Modal';
import { deletePost } from '../../../../api/post';
import { deletePostAction } from '../../../../actions/postAction';
import { usePost } from '../../../../contexts/PostContext';

function PostHeader({ post }) {
  const { dispatch } = usePost();

  const {
    User: { id, firstName, lastName, profilePic },
    updatedAt,
    id: postId,
  } = post;

  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
  };

  const handleClickDelete = async () => {
    try {
      await deletePost(postId);
      dispatch(deletePostAction({ postId }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="d-flex align-items-center space-x-2">
      <Link to={'/profile/' + id}>
        <UserIcon src={profilePic} size={40}></UserIcon>
      </Link>
      <div className="d-flex flex-column flex-fill">
        <Link
          to={'/profile/' + id}
          className="text-dark fw-bold no-underline hover-underline text-3.5"
        >
          {firstName} {lastName}
        </Link>
        <small className="text-muted text-3">{timeSince(updatedAt)}</small>
      </div>
      <button
        className="btn rounded-circle h-9 w-9 position-relative hover-bg-gray-200 shadow-none"
        data-bs-toggle="dropdown"
      >
        <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
      </button>
      <div className="dropdown-menu dropdown-menu-end">
        <button
          className="dropdown-item"
          type="button"
          onClick={() => setOpen(true)}
        >
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
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        title={'Create post'}
      >
        <PostForm open={open} onClose={closeModal}></PostForm>
      </Modal>
    </div>
  );
}

export default PostHeader;
