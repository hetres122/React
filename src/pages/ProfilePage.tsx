import React from 'react';
import Profile from '../components/Profile';
import Loading from '../components/Loading';
import { Outlet, useNavigation } from 'react-router-dom';

const ProfilePage = () => {
  const navigation = useNavigation();

  return (
    <>
      <section className=" mt-14 flex flex-col justify-center md:flex-row   ">
        <Profile />
        {navigation.state === 'loading' ? <Loading /> : <Outlet />}
      </section>
    </>
  );
};

export default ProfilePage;
