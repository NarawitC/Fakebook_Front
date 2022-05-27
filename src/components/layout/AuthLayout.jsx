import { Outlet } from 'react-router-dom';
import Header from './header/Header';

function AuthLayout() {
  return (
    <>
      <Header></Header>
      <div className="min-vh-100 tw-pt-14">
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default AuthLayout;
