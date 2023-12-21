import {useEffect, useState} from 'react';
import {projectAuth} from '../firebase/config';
import {UseAuthContext} from './useAuthContext';

export const UseLogin = () => {
  //   const [isCancelled, setIsCancelled] = useState(false);s
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const {dispatch} = UseAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(false);

    // sign the user out
    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password);

      // dispatch logout action
      dispatch({type: 'LOGIN', payload: res.user});

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

  return {login, error, isPending};
};
