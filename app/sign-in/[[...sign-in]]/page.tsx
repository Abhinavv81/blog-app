import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center  items-center m-16     ">
      <div className="flex ">
        <SignIn />
      </div>
    </div>
  );
}
