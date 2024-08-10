import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account }): Promise<any> {
      if (account?.provider === "google") {
        const { name, email } = user;
        try {
          // const userExists = await checkUser(email || "");

          // if (!userExists) {
          //   const acc = await createUser(name || "", email || "");
          // }

          return user; // don't edit this line
        } catch (error) {
          console.log(error);
        }
      }
      return true;
    },
  },
});
