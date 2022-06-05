import { useLocation } from 'react-router-dom';
import FriendCard from './FriendCard';
import axios from '../../config/axios';
import { useEffect, useState } from 'react';

const getTitle = (pathname) => {
  switch (pathname) {
    case '/friend/request':
      return 'Friend Requests';
    case '/friend/suggestion':
      return 'Suggestion';
    default:
      return 'All Friend';
  }
};

const fetchUser = (pathname) => {
  // console.log(pathname);
  switch (pathname) {
    case '/friend/request':
      return axios.get('/friends?status=pending');
    case '/friend/suggestion':
      return axios.get('/friends?status=unknown');
    default:
      return axios.get('/friends');
  }
};

function FriendContainer() {
  const { pathname } = useLocation();
  const [friends, setFriends] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetchUser(pathname);

      setFriends(res.data.users);
      // console.log(res.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pathname]);

  return (
    <div className="p-3 d-none d-sm-block position-absolute tw-left-80 tw-m-5">
      <h1 className="text-5 mb-3 fw-bold">{getTitle(pathname)}</h1>
      <div className="row g-2">
        {friends.map((el) => {
          return (
            <FriendCard
              key={el.id}
              friend={el}
              fetchData={fetchData}
            ></FriendCard>
          );
        })}
      </div>
    </div>
  );
}

export default FriendContainer;
