import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../contexts/AuthContext';
import UserIcon from '../../../common/UserIcon';
import { createComment } from '../../../../api/post';
import { useError } from '../../../../contexts/ErrorContext';
import { usePost } from '../../../../contexts/PostContext';
import { createCommentAction } from '../../../../actions/postAction';

function NewCommentBox() {
  const [title, setTitle] = useState('');
  const { user } = useAuth();
  const { id, profilePic } = user;
  const { setError } = useError();
  const { dispatch } = usePost();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createComment({
        postId: id,
        title,
      });
      dispatch(
        createCommentAction({ comment: res.data.comment, postId: id, user })
      );
      setTitle('');
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };
  return (
    <div className="d-flex pt-1">
      <Link to={'/profile/' + id}>
        <UserIcon src={profilePic} size="32"></UserIcon>
      </Link>
      <form className="flex-grow-1 ms-2" onSubmit={handleSubmit}>
        <input
          className="form-control rounded-pill ms-2 shadow-none border-0 bg-gray-200 focus-bg-gray-200 h-9 text-3.5"
          placeholder="Write a comment..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
}

export default NewCommentBox;
