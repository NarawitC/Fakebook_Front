import { keyboard } from '@testing-library/user-event/dist/keyboard';
import { useNavigate } from 'react-router-dom';
import UserIcon from '../common/UserIcon';

function AvatarList({ friends }) {
  const navigate = useNavigate();
  return (
    <div className="pt-1 mb-3">
      {friends.slice(0, 8).map((el, idx) => (
        <span
          className={idx ? `-ms-2` : ''}
          key={el.id}
          onClick={() => navigate('/profile/' + el.id)}
          role="button"
        >
          <UserIcon src={el.profilePic} size="32" border="2"></UserIcon>
        </span>
      ))}
    </div>
  );
}

export default AvatarList;
