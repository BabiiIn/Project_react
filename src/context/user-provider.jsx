import { useState } from 'react';
import { UserContext } from './user-context';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => setUser({ id: '1', name: 'NotOlga' });
  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
