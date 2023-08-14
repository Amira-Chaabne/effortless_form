import { Text } from "@mantine/core";
import AlreadyMember from "../AlreadyMember/AlreadyMember";
import { SignInForm } from "./SignInForm";

export default function SignIn() {
    return (
        <div>
            <AlreadyMember />
            <div className="w-full md:max-w-2xl mx-auto">
                <Text className="text-3xl font-bold my-12">Sign In to Help Save Nature</Text>
                <SignInForm />
            </div>
        </div>
    );
}
