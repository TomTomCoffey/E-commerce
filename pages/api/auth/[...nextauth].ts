import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Login",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@exmaple.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Cred | undefined) {
        // const res = await fetch("http://localhost:3000/api/auth/login", {
        //     method: "POST",
        //     body: JSON.stringify(credentials),
        //     headers: { "Content-Type": "application/json" }
        // });

        // const user = await res.json();

        // if (res.ok && user) {
        //     return user;
        // }

        // return null;
        if (!credentials || !credentials.email || !credentials.password)
          return null;

        // Access db

        // Verify Password with bcrypt
        // If good return the user without the password attached
        return {
          id: "123",
          email: "test@gmail.com",
          name: "Andrew",
        };

        // else return null
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_STRING as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_IDb as string,
      clientSecret: process.env.GITHUB_CLIENT_STRING as string,
    }),
  ],
};

interface Cred {
  email: string;
  password: string;
}

export default NextAuth(authOptions);
