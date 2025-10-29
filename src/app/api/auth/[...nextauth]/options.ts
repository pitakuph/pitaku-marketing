import axios from 'axios'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const payload = credentials

        console.log('credentials', credentials)

        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `${process.env.API_BASE_URL}/api/login`,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          data: payload,
        }

        const user = axios
          .request(config)
          .then((response) => {
            console.log('USERNOW', JSON.stringify(response.data))
            return response.data
          })
          .catch((error) => {
            console.log(error)
            throw new Error(error?.message)
          })

        if (user) {
          console.log('User authenticated:', user)
          return user
        } else {
          console.log('Authentication failed')
          return null
        }
      },
    }),
  ],

  pages: {
    // signIn: '/merchants',
    signIn: '/',
  },

  session: {
    strategy: 'jwt',
    maxAge: 1800, // ⬅ logout after 10 minutes of inactivity
  },
  jwt: {
    maxAge: 1800, // ⬅ also set here for safety
  },

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.user = token
      return session
    },
  },
}
