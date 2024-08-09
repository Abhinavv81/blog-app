import { SignInGoogle } from "@/actions/auth";
import { signIn } from "@/auth";
import { Button } from "../ui/button";

export function SignIn() {
  return (
    <form action={SignInGoogle}>
      <Button type="submit" variant={"default"} size={"sm"}>
        Signin with Google
      </Button>
    </form>
  );
}
