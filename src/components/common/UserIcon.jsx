import defaultPic from '../../assets/images/profileImg.png';

function UserIcon({ src, size, border }) {
  return (
    <img
      className={`rounded-circle ${
        border ? 'border border-white border-' + border : ''
      }`}
      src={src || defaultPic}
      width={size}
      height={size}
      alt="user"
    />
  );
}

export default UserIcon;
