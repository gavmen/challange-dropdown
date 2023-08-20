// import { initAuth0 } from '@auth0/nextjs-auth0';

// export default initAuth0({
//   secret: "a365c3082520e24c3fe37fc87e8b8100c525bfaac5349c41a6a097b690921188",
//   baseURL: process.env.BASE_URL || "http://localhost:3000",
//   issuerBaseURL: process.env.AUTH0_DOMAIN,
//   clientID: process.env.AUTH0_CLIENT_ID,
//   clientSecret: process.env.AUTH0_CLIENT_SECRET,
//   authorizationParams: {
//     scope: "openid profile email",
//     // audience: process.env.AUTH0_AUDIENCE,
//     response_type: "code",
//     response_mode: "query"
//   },
//   routes: {
//     callback: "/api/callback",
//     postLogoutRedirect: "/"
//   },
//   session: {
//     rollingDuration: 60 * 60 * 24,
//     absoluteDuration: 60 * 60 * 24 * 7
//   }
// });
