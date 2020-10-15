import axios from 'axios';
// import { "AUTH_USER", "AUTH_ERROR" } from './types';


const rejectPromise = (resError) => {
  let error = {};

  if (resError && resError.response && resError.response.data) {
    error = resError.response.data;
  } else {
    error = resError;
  }

  return Promise.reject(error);
}


const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1",

});


export const  signup =async formProps => {
  const url = '/signup';

  return await axiosInstance.post(url, formProps)
    .then(response => response)
    .catch(error => rejectPromise(error))

}



export const signin = async data => {
  console.log('signin '+data.user);
    return await axiosInstance.post(
      '/signin',
      data
    ).then(response => response)
    .catch(error => rejectPromise(error))

};

// export const signout = () => {
//   localStorage.removeItem('token');

//   return {
//     type: AUTH_USER,
//     payload: ''
//   };
// };
