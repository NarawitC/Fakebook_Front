import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import UserIcon from '../common/UserIcon';
import AvatarList from './AvatarList';
import ModalProfile from './ModalProfile';

function ProfileDetail({ userProfile }) {
  const [open, setOpen] = useState(false);
  const { profilePic, firstName, lastName, friends, friendStatus, id } =
    userProfile;
  const { user } = useContext(AuthContext);
  let mode = 'UNKNOWN';
  if (user.id === id) {
    mode = 'ME';
  } else if (friendStatus) {
    if (friendStatus.status === 'ACCEPTED') {
      mode = 'ACCEPTED';
    } else {
      if (friendStatus.requestToId === user.id) {
        mode = 'PENDING';
      } else {
        mode = 'REQUESTED';
      }
    }
  }

  return (
    <div className="d-flex flex-column flex-md-row align-items-center align-items-md-stretch mx-auto px-3 max-w-266 space-x-4">
      <div className="-mt-20 -mt-md-10 z-10">
        <UserIcon src={profilePic} size="168" border="4"></UserIcon>
      </div>

      <div className="mt-3 flex-grow-1 d-flex flex-column align-items-center d-md-block">
        <h2 className="fw-bold mb-0">
          {firstName} {lastName}
        </h2>
        <span className="d-inline-block text-muted pt-1">
          {friends.length} Friends
        </span>
        {friends.length > 0 && <AvatarList friends={friends}></AvatarList>}
      </div>

      <div className="d-flex align-items-end mb-3">
        {mode === 'REQUESTED' && (
          <>
            <button className="btn btn-gray-200" onClick={() => setOpen(true)}>
              <i className="fa-solid fa-user-trash" /> Cancel Request
            </button>
          </>
        )}
        {mode === 'PENDING' && (
          <div className="5">
            <button className="btn btn-gray-200" onClick={() => setOpen(true)}>
              <i className="fa-solid fa-user-plus" /> Confirm
            </button>

            <button className="btn btn-gray-200" onClick={() => setOpen(true)}>
              <i className="fa-solid fa-user-trash" /> Delete
            </button>
          </div>
        )}
        {mode === 'UNKNOWN' && (
          <>
            <button className="btn btn-gray-200" onClick={() => setOpen(true)}>
              <i className="fa-solid fa-user-plus" /> Add friend
            </button>
          </>
        )}
        {mode === 'ACCEPTED' && (
          <>
            <button className="btn btn-gray-200" onClick={() => setOpen(true)}>
              <i className="fa-solid fa-trash" /> Delete Friend
            </button>
          </>
        )}
        {mode === 'ME' && (
          <>
            <button className="btn btn-gray-200" onClick={() => setOpen(true)}>
              <i className="fa-solid fa-pen" /> Edit Profile
            </button>
            <ModalProfile
              open={open}
              onClose={() => setOpen(false)}
            ></ModalProfile>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileDetail;
