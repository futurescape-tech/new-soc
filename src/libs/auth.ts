// Third-party Imports
import CredentialProvider from 'next-auth/providers/credentials'
import type { NextAuthOptions } from 'next-auth'
import axios from 'axios'

export const authOptions: NextAuthOptions = {
  // ** Configure one or more authentication providers
  // ** Please refer to https://next-auth.js.org/configuration/options#providers for more `providers` options
  providers: [
    CredentialProvider({
      // ** The name to display on the sign in form (e.g. 'Sign in with...')
      // ** For more details on Credentials Provider, visit https://next-auth.js.org/providers/credentials
      name: 'Credentials',
      type: 'credentials',

      /*
       * As we are using our own Sign-in page, we do not need to change
       * username or password attributes manually in following credentials object.
       */
      credentials: {},
      async authorize(credentials) {
        /*
         * You need to provide your own logic here that takes the credentials submitted and returns either
         * an object representing a user or value that is false/null if the credentials are invalid.
         * For e.g. return { id: 1, name: 'J Smith', username: 'jsmith@example.com' }
         * You can also use the `req` object to obtain additional parameters (i.e., the request IP address)
         */
        const { username, password } = credentials as { username: string; password: string }

        try {
          // ** Login API Call to match the user credentials and receive user data in response along with his role
          const res = await axios.post(`${process.env.SSO_BASEPATH}/login`, {
            username, password
          }, {
            validateStatus: status => status < 500
          })

          if (res.status === 401 || !res?.data?.success) {
            throw new Error(res?.data?.message || 'Invalid credentials')
          }

          if (res.status !== 200) return null

          /*
           * Please unset all the sensitive information of the user either from API response or before returning
           * user data below. Below return statement will set the user object in the token and the same is set in
           * the session which will be accessible all over the app.
           */
          const userInfo = res.data.data?.user_info || {}
          return {
            id: userInfo.user_id,
            name: `${userInfo.first_name} ${userInfo.last_name}`,
            email: userInfo.email,
            username: userInfo.username,
            mobile: userInfo.mobile,
            role: userInfo.role
          }
        } catch (e: any) {
          throw new Error(e.message)
        }
      }
    }),

    // ** ...add more providers here
  ],

  // ** Please refer to https://next-auth.js.org/configuration/options#session for more `session` options
  session: {
    /*
     * Choose how you want to save the user session.
     * The default is `jwt`, an encrypted JWT (JWE) stored in the session cookie.
     * If you use an `adapter` however, NextAuth default it to `database` instead.
     * You can still force a JWT session by explicitly defining `jwt`.
     * When using `database`, the session cookie will only contain a `sessionToken` value,
     * which is used to look up the session in the database.
     * If you use a custom credentials provider, user accounts will not be persisted in a database by NextAuth.js (even if one is configured).
     * The option to use JSON Web Tokens for session tokens must be enabled to use a custom credentials provider.
     */
    strategy: 'jwt',

    // ** Seconds - How long until an idle session expires and is no longer valid
    maxAge: 30 * 24 * 60 * 60 // ** 30 days
  },

  // ** Please refer to https://next-auth.js.org/configuration/options#pages for more `pages` options
  pages: {
    signIn: '/login'
  },

  // ** Please refer to https://next-auth.js.org/configuration/options#callbacks for more `callbacks` options
  callbacks: {
    /*
     * While using `jwt` as a strategy, `jwt()` callback will be called before
     * the `session()` callback. So we have to add custom parameters in `token`
     * via `jwt()` callback to make them accessible in the `session()` callback
     */
    async jwt({ token, user }) {
      console.log('JWT Callback', user, token)
      if (user) {
        /*
         * For adding custom parameters to user in session, we first need to add those parameters
         * in token which then will be available in the `session()` callback
         */
        token.name = user.name
      }

      return token
    },
    async session({ session, token }) {
      console.log('Session Callback', session, token)
      if (session.user) {
        // ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter
        session.user.name = token.name
      }

      return session
    }
  }
}
