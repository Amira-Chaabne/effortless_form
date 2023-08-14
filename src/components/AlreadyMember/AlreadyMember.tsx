import { Text } from "@mantine/core";
import Link from "next/link";

export default function AlreadyMember({ flag }: { flag?: boolean }) {
  return (
    <div className="flex justify-end">
      {
        flag ?
          <Text size="xs">
            <span>Already a member? </span>
            <Link href="#" className="font-bold text-teal-600 hover:text-teal-500 transition-colors">Sign in</Link>
          </Text> :
          <Text size="xs">
            <span>Don't have an account yet? </span>
            <Link href="#" className="font-bold text-teal-600 hover:text-teal-500 transition-colors">Sign Up Now</Link>
          </Text>
      }

    </div>
  );
}
