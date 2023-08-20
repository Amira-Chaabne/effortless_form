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
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  termsAndPrivacy: boolean;
}

export default function SignUpForm() {
  const { t } = useTranslation();
  const { setFormSubmitted, setEmail } = useAppContext();

  const form = useForm<FormValues>({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      termsAndPrivacy: false,
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : t("validation.invalid_email"),
      firstName: (value) => (value ? null : t("validation.required_field")),

      password: (value) =>
        !value
          ? t("validation.required_field")
          : !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
          ? t("password_validation")
          : null,

      confirmPassword: (value, values) =>
        !value
          ? t("validation.required_field")
          : value !== values.password
          ? t("password_match")
          : null,

      termsAndPrivacy: (value) =>
        value ? null : t("validation.required_terms"),
    },
  });

  function handleForm(values: FormValues) {
    console.log(values);
    notifications.show({
      title: t("notification.sign_up.title"),
      message: t("notification.sign_up.message"),
      color: "green",
    });
    form.reset();
    setEmail(values.email);
    setFormSubmitted(true);
  }

  return (
    <div>
      <form onSubmit={form.onSubmit((values) => handleForm(values))}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <TextInput
            withAsterisk
            label={t("firstname_label")}
            placeholder={t("firstname_placeholder")}
            {...form.getInputProps("firstName")}
          />
          <TextInput
            label={t("lastname_label")}
            placeholder={t("lastname_placeholder")}
            {...form.getInputProps("lastName")}
          />
        </div>

        <TextInput
          withAsterisk
          label={t("email_placeholder")}
          placeholder={t("email_placeholder")}
          {...form.getInputProps("email")}
          className="mb-4"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <PasswordInput
            placeholder="********"
            label={t("password")}
            {...form.getInputProps("password")}
            withAsterisk
          />
          <PasswordInput
            placeholder="********"
            label={t("confirm_password")}
            {...form.getInputProps("confirmPassword")}
            withAsterisk
          />
        </div>

        <div className="my-12">
          <Checkbox
            size="xs"
            label={t("privacy_label")}
            {...form.getInputProps("termsAndPrivacy", { type: "checkbox" })}
          />

          <Checkbox
            mt="sm"
            size="xs"
            label={t("sign_up_benefits")}
            {...form.getInputProps("ealySaleAccess", { type: "checkbox" })}
          />
        </div>
        <Group position="right" mt="md">
          <Button type="submit" color="dark">
            {t("sign_up_btn")}
          </Button>
        </Group>
      </form>
    </div>
  );
}
