import { useAppContext } from "@/contexts/AppContext";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  PasswordInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useTranslation } from "next-i18next";

interface FormValues {
  email: string;
  password: string;
  signedIn: boolean;
}

export function SignInForm() {
  const { t } = useTranslation();
  const { setFormSubmitted, setEmail } = useAppContext();

  const audio = new Audio("/effortless_form/yay.mp3");

  const handlePlayAudio = () => {
    audio.play();
  };

  const form = useForm<FormValues>({
    initialValues: {
      email: "",
      password: "",
      signedIn: false,
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : t("validation.invalid_email"),

      password: (value) => (!value ? t("validation.required_field") : null),
    },
  });

  function handleForm(values: FormValues) {
    notifications.show({
      title: t("notification.sign_in.title"),
      message: t("notification.sign_in.message"),
      color: "green",
    });
    handlePlayAudio();
    form.reset();
    setEmail(values.email);
    setFormSubmitted(true);
  }

  return (
    <form onSubmit={form.onSubmit((values) => handleForm(values))}>
      <TextInput
        withAsterisk
        label={t("email_label")}
        placeholder={t("email_placeholder")}
        {...form.getInputProps("email")}
        className="mb-4"
      />
      <PasswordInput
        placeholder="********"
        label={t("password")}
        {...form.getInputProps("password")}
        withAsterisk
      />
      <Checkbox
        mt="sm"
        size="xs"
        label={t("keep_signed_in")}
        {...form.getInputProps("signedIn", { type: "checkbox" })}
      />

      <Group position="right" mt="md">
        <Button type="submit" color="dark">
          {t("sign_in_btn")}
        </Button>
      </Group>
    </form>
  );
}
