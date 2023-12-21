import {useContext} from 'react';
import {AuthContext} from '../context/authContext';

export const UseAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('useAuthContext must be inside an AuthContextProvider');
  }
  return context;
};
