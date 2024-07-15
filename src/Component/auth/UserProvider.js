import React from 'react';
import UserContext from './UserContext';

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState('');
  const [catergory, setCatergory] = React.useState('');
  console.log(user);

  return (
    <UserContext.Provider value={{ user, setUser,catergory,setCatergory }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
