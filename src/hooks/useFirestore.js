import { useState, useReducer, useEffect } from 'react';
import { projectFirestore, timestamp } from '../firebase/config';

let initialState = {
  documents: [],
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { isPending: true, documents: [], success: false, error: null };
    case 'FETCHED_DOCUMENTS':
      return {
        isPending: false,
        documents: action.payload,
        success: true,
        error: null,
      };
    case 'ERROR':
      return {
        isPending: false,
        documents: [],
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const abortController = new AbortController();

  // collection ref;
  const ref = projectFirestore.collection(collection);

  // get documents
  const getDocuments = async () => {
    dispatch({ type: 'IS_PENDING' });
    try {
      const snapshot = await ref.get({ signal: abortController.signal });
      const documents = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      dispatch({ type: 'FETCHED_DOCUMENTS', payload: documents });
    } catch (err) {
      dispatch({ type: 'ERROR', payload: err.message });
    }
  };

  // add document
  const addDocument = async (doc) => {
    dispatch({ type: 'IS_PENDING' });
    try {
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await ref.add({ ...doc, createdAt }, { signal: abortController.signal });
      dispatch({ type: 'ADDED_DOCUMENT', payload: addedDocument });
    } catch (err) {
      dispatch({ type: 'ERROR', payload: err.message });
    }
  };

  // delete Document
  const deleteDocument = async (id) => {
    dispatch({ type: 'IS_PENDING' });
    try {
      const deletedDocument = await ref.doc(id).delete({ signal: abortController.signal });
      dispatch({ type: 'DELETED_DOCUMENT', payload: deletedDocument });
    } catch (error) {
      dispatch({ type: 'ERROR', payload: error.message });
    }
  };

  // cleanup function
  useEffect(() => {
    return () => {
      abortController.abort(); // cancel pending operations
    };
  }, []);

  return { addDocument, deleteDocument, getDocuments, response };
};
