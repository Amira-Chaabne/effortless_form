import SignIn from "@/components/SignIn/SignIn";
import SignUp from "@/components/SignUp/SignUp";

export default function Forms() {
  return (
    <div className="col-span-4 md:col-span-3 p-4 bg-white rounded-md py-12">
      <SignUp />
      {/* <SignIn /> */}
    </div>
  );
}
