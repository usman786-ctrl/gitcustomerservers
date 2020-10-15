import { initAuth0 } from '@auth0/nextjs-auth0';

console.log('initAuth0 '+initAuth0);

// export default initAuth0({

//     domain="dev-flqtxyrn.us.auth0.com",
//     clientId="ZwOMP4PhIhF5pFLTj70CMk2112iWcY00",
//     redirectUri="http://localhost:3000/callback",


//   clientSecret: 'ToMOnMZdycoUelga57LDMszyop6Vq6wYqVA_uwrVngyxhJT2hO0u9t7-9lpJibGa',
//   scope: 'openid profile',
//   redirectUri: 'http://localhost:3000/api/callback',
//   postLogoutRedirectUri: 'http://localhost:3000/',
//   session: {
//     cookieSecret: 'some-very-very-very-very-very-very-very-very-long-secret',
//     cookieLifetime: 60 * 60 * 8
//   }
// });