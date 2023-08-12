import { Text } from "@mantine/core";
import Link from "next/link";

export default function AlreadyMember() {
  return (
    <div className="flex justify-end">
      <Text size="xs">
        <span>Already a member ? </span>
        <Link href="#" className="font-bold text-teal-600 hover:text-teal-500 transition-colors">Sign in</Link>
      </Text>
    </div>
  );
}
