import { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AuthLayout from '../components/layout/AuthLayout';
import Sidebar from '../components/layout/sidebar/Sidebar';
import { AuthContext } from '../contexts/AuthContext';
import FriendPage from '../pages/FriendPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';

function Router() {
  const { user } = useContext(AuthContext);
  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<AuthLayout></AuthLayout>}>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="friend" element={<Sidebar></Sidebar>}>
              <Route path="" element={<FriendPage></FriendPage>}></Route>
              <Route path="request" element={<FriendPage></FriendPage>}></Route>
              <Route
                path="suggestion"
                element={<FriendPage></FriendPage>}
              ></Route>
            </Route>
            <Route
              path="profile/:id"
              element={<ProfilePage></ProfilePage>}
            ></Route>
          </Route>
          <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="*" element={<Navigate to="/login"></Navigate>}></Route>
        </>
      )}
    </Routes>
  );
}
export default Router;
