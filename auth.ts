import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectDB } from "./lib/db";
import User from "./models/user";
import { createUser } from "./actions/user";
export const { handlers, signIn, signOut, auth } = NextAuth({

  providers: [Google],
  callbacks:{
    async signIn({user,account}): Promise<any> {
      if(account?.provider === "google"){
        const { name, email } = user;
        try {
          await connectDB();
          const userExists = await User.findOne({ email });

          if (!userExists) {
            const user = await createUser( name || "", email || "");
           return user;

          
          }
        } catch (error) {
          console.log(error);
        }
      }
      return true;
    },
  }
  
});
