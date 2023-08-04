import Header from './Header';
import { Outlet } from 'react-router';

export default function Mainn() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
