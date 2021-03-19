import React from 'react';
import Auth from '../../Components/Auth/Auth';
import Dashboard from '../Dashboard/Dashboard';

const Admin = () => {
  // const [admin, setAdmin] = React.useState(true);
  const admin = true;

  return <div>{admin ? <Dashboard /> : <Auth />}</div>;
};

export default Admin;
