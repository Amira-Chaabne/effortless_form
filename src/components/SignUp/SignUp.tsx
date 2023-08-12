import { Text } from "@mantine/core";
import AlreadyMember from "../AlreadyMember/AlreadyMember";
import SignUpForm from "../SignUpForm/SignUpForm";

export default function SignUp() {
  return (
    <div>
      <AlreadyMember />
      <div className="w-full md:max-w-2xl mx-auto">
        <Text className="text-3xl font-bold my-12">Create an Account</Text>
        <SignUpForm />
      </div>
    </div>
  );
}
