import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account }): Promise<any> {
      if (account?.provider === "google") {
        const { name, email } = user;
        try {
          const a = await fetch("http://localhost:3000/api/createuser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email }),
          });

          return user; // don't edit this line
        } catch (error) {
          console.log(error);
        }
      }
      return true;
    },
  },
});
