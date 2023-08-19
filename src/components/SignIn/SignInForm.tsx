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

interface FormValues {
  email: string;
  password: string;
  signedIn: boolean;
}

export function SignInForm() {
  const { setFormSubmitted, setEmail } = useAppContext();

  const form = useForm<FormValues>({
    initialValues: {
      email: "",
      password: "",
      signedIn: false,
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address",

      password: (value) => (!value ? "This field is required" : null),
    },
  });

  function handleForm(values: FormValues) {
    console.log(values);
    notifications.show({
      title: "Welcome on board!",
      message:
        "Your data is now in the console, ready to be shipped to your backend :)",
      color: "green",
    });
    form.reset();
    setEmail(values.email);
    setFormSubmitted(true);
  }

  return (
    <form onSubmit={form.onSubmit((values) => handleForm(values))}>
      <TextInput
        withAsterisk
        label="Email Address"
        placeholder="Your Email"
        {...form.getInputProps("email")}
        className="mb-4"
      />
      <PasswordInput
        placeholder="********"
        label="Password"
        {...form.getInputProps("password")}
        withAsterisk
      />
      <Checkbox
        mt="sm"
        size="xs"
        label="Keep me signed in"
        {...form.getInputProps("signedIn", { type: "checkbox" })}
      />

      <Group position="right" mt="md">
        <Button type="submit" color="dark">
          Sign Up
        </Button>
      </Group>
    </form>
  );
}
