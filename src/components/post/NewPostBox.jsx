import UserIcon from '../common/UserIcon';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import Modal from '../ui/Modal';
import PostForm from './form/PostForm';

function NewPostBox() {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="border bg-white rounded-lg shadow-sm px-3 tw-py-3">
      <div className="d-flex space-x-2">
        <Link to={`/profile/${user.id}`}>
          <UserIcon src={user.profilePic} size="40"></UserIcon>
        </Link>

        <button
          className="btn btn-gray-200 rounded-pill text-muted flex-1 text-start"
          onClick={() => setOpen(true)}
        >
          What's on your mind, {user.firstName}?
        </button>
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
    </div>
  );
}

export default NewPostBox;
