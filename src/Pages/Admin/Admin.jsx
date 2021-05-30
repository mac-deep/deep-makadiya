import React from 'react';
import Auth from '../../Components/Auth/Auth';
import Dashboard from '../Dashboard/Dashboard';

const Admin = () => {
  const [admin, setAdmin] = React.useState(true);

  // return <div>{admin ? <Dashboard /> : <Auth />}</div>;
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Admin;
