"use server"
import { signIn,signOut } from "@/auth";

export const SignInGoogle = async() => {
    await signIn("google");
};
export const SignOut = async() => {
    await signOut();
}



