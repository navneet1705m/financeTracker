import {useEffect, useState} from 'react';
import {projectAuth} from '../firebase/config';
import {UseAuthContext} from './useAuthContext';

export const useSignup = () => {
  // const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const {dispatch} = UseAuthContext();

  const signup = async (email, password, displayName, roomid) => {
    setError(null);
    setIsPending(true);

    try {
      // signup user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error(`Could not complete Sign Up`);
      }
      await res.user.updateProfile({displayName, roomid: roomid});
      //dispatch login information
      dispatch({type: 'LOGIN', payload: res.user});
      // if (!isCancelled) {
      setIsPending(false);
      setError(null);
      // }
    } catch (err) {
      // if (!isCancelled) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
      // }
    }
  };
  // useEffect(() => {
  //   return () => setIsCancelled(true);
  // }, []);
  return {signup, error, isPending};
};
