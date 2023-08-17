import { Text } from "@mantine/core";
import AlreadyMember from "../AlreadyMember/AlreadyMember";
import SignUpForm from "../SignUpForm/SignUpForm";
import Appreciation from "../Appreciation";
import { useAppContext } from "@/contexts/AppContext";

export default function SignUp() {
  const { formSubmitted } = useAppContext();

  return (
    <>
      {formSubmitted ? (
        <Appreciation />
      ) : (
        <>
          <AlreadyMember flag={true} />
          <div className="w-full md:max-w-2xl mx-auto">
            <Text className="text-3xl font-bold my-12">Create an Account</Text>
            <SignUpForm />
          </div>
        </>
      )}
    </>
  );
}
