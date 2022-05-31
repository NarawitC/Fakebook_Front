import { Link } from 'react-router-dom';
import { timeSince } from '../../../../services/dateFormat';
import UserIcon from '../../../common/UserIcon';

function PostHeader({ post }) {
  const {
    User: { id, firstName, lastName, profilePic },
    updatedAt,
  } = post;
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
        <button className="dropdown-item" type="button">
          Edit
        </button>
        <button className="dropdown-item" type="button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default PostHeader;
