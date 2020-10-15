// import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const INITIAL_STATE = {
    authenticated: '',
    errorMessage: ''
  };
  
  export default function(state = INITIAL_STATE, action) {
    const {type,payload}=action
    // console.log('action '+type,payload);
    switch (action.type) {
      case "AUTH_USER":
        return { ...state, authenticated: action.payload };
      case "AUTH_ERROR":
        return { ...state, errorMessage: action.payload };
      default:
        return state;
    }
  }