import { SignInGoogle } from "@/actions/auth";
import { signIn } from "@/auth";

export function SignIn() {
  return (
    <form
      action={SignInGoogle}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}
