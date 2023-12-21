import {useEffect, useState} from 'react';
import {projectAuth} from '../firebase/config';
import {UseAuthContext} from './useAuthContext';

export const UseLogout = () => {
  //   const [isCancelled, setIsCancelled] = useState(false);s
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const {dispatch} = UseAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(false);

    // sign the user out
    try {
      await projectAuth.signOut();

      // dispatch logout action
      dispatch({type: 'LOGOUT'});

      //   set state
      //   if (!isCancelled) {
      setIsPending(false);
      setError(null);
      //   }
    } catch (err) {
      //   if (!isCancelled) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
      //   }
    }
  };

  //   useEffect(() => {
  //     return () => setIsCancelled(true);
  //   }, []);

  return {logout, error, isPending};
};
