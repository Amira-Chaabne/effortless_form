import { useAppContext } from "@/contexts/AppContext";
import { Group, Indicator, Text } from "@mantine/core";
import { IconMailFilled, IconCheck } from "@tabler/icons-react";

export default function Appreciation({ signIn }: { signIn: boolean }) {
  const { email } = useAppContext();

  return (
    <div className="mt-32 flex flex-col items-center justify-between">
      <Group position="center">
        <Indicator
          size={30}
          withBorder
          styles={{ indicator: { margin: "10px" } }}
          label={<IconCheck size={12} strokeWidth={4} />}
        >
          <IconMailFilled size={60} />
        </Indicator>
      </Group>
      <Text className="text-2xl md:text-4xl mb-6 font-bold text-center">
        Thank you for {signIn ? "signing in" : "signing up"}!
      </Text>
      <Text className="text-sm text-gray-500">
        We have sent a confirmation email to
      </Text>
      <Text className="text-sm text-cyan-600">{email}</Text>
    </div>
  );
}
