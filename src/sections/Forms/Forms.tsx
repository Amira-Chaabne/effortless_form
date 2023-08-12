import { Text } from "@mantine/core";
import AlreadyMember from "../../components/AlreadyMember/AlreadyMember"
import SignUp from "@/components/SignUp/SignUp";

export default function Forms() {
  return (
    <div className="col-span-4 md:col-span-3 p-4 bg-white rounded-md py-12">
      <SignUp />
    </div>
  );
}
