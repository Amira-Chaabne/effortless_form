import { Text } from "@mantine/core";
import AlreadyMember from "../AlreadyMember/AlreadyMember";
import { SignInForm } from "./SignInForm";
import { useAppContext } from "@/contexts/AppContext";
import Appreciation from "../Appreciation/Appreciation";

export default function SignIn() {
  const { formSubmitted } = useAppContext();

  return (
    <>
      {formSubmitted ? (
        <Appreciation />
      ) : (
        <>
          <AlreadyMember />
          <div className="w-full md:max-w-2xl mx-auto">
            <Text className="text-3xl font-bold my-12">
              Sign In to Help Save Nature
            </Text>
            <SignInForm />
          </div>
        </>
      )}
    </>
  );
}
