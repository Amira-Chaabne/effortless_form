import { useAppContext } from "@/contexts/AppContext";
import { Group, Indicator, Text } from "@mantine/core";
import { IconMailFilled, IconCheck } from "@tabler/icons-react";
import { useTranslation } from "next-i18next";

export default function Appreciation({ signIn }: { signIn: boolean }) {
  const { t } = useTranslation();
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
        {t("thanks_for", {
          action: signIn ? t("signing_in") : t("signing_up"),
        })}
      </Text>
      <Text className="text-sm text-gray-500">{t("email_sent")}</Text>
      <Text className="text-sm text-cyan-600">{email}</Text>
    </div>
  );
}
