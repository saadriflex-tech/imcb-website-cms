import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // TODO: In Phase 2, connect this to Prisma to verify hashed passwords
        // For now, this is a secure placeholder structure for NextAuth
        if (credentials.email === "admin@imcb.edu.pk" && credentials.password === "password") {
          return { id: "1", name: "Admin", email: "admin@imcb.edu.pk", role: "admin" };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    }
  },
  session: { strategy: "jwt" },
  pages: { signIn: "/admin/login" }, // Will create this page when we build the CMS UI
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
