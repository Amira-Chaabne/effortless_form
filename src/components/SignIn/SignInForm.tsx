import {
  TextInput,
  Checkbox,
  Button,
  Group,
  PasswordInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";

interface FormValues {
  email: string;
  password: string;
  signedIn: boolean;
}

export function SignInForm() {
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
    form.reset();
  }

  return (
    <div>
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
    </div>
  );
}
