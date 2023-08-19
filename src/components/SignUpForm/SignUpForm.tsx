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
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  termsAndPrivacy: boolean;
}

export default function SignUpForm() {
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
        /^\S+@\S+$/.test(value) ? null : "Invalid email address",
      firstName: (value) => (value ? null : "This field is required"),

      password: (value) =>
        !value
          ? "This field is required"
          : !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
          ? "Password must have minimum eight characters, at least one letter and one number."
          : null,

      confirmPassword: (value, values) =>
        !value
          ? "This field is required"
          : value !== values.password
          ? "Passwords do not match"
          : null,

      termsAndPrivacy: (value) =>
        value ? null : "You must agree to the terms and privacy policy",
    },
  });

  function handleForm(values: FormValues) {
    console.log(values);
    notifications.show({
      title: "Welcome on board!",
      message:
        "You have successfully signed up, and your data is now in the console, ready to be shipped to your backend :)",
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
            label="First Name"
            placeholder="Your first name"
            {...form.getInputProps("firstName")}
          />
          <TextInput
            label="Last Name"
            placeholder="Your last name"
            {...form.getInputProps("lastName")}
          />
        </div>

        <TextInput
          withAsterisk
          label="Email Address"
          placeholder="Your Email"
          {...form.getInputProps("email")}
          className="mb-4"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <PasswordInput
            placeholder="********"
            label="Password"
            {...form.getInputProps("password")}
            withAsterisk
          />
          <PasswordInput
            placeholder="********"
            label="Confirm Password"
            {...form.getInputProps("confirmPassword")}
            withAsterisk
          />
        </div>

        <div className="my-12">
          <Checkbox
            size="xs"
            label="By regestering you agree with our Terms, Privacy, Policy."
            {...form.getInputProps("termsAndPrivacy", { type: "checkbox" })}
          />

          <Checkbox
            mt="sm"
            size="xs"
            label="Sign up for early sale access plus tailored new arrivals and promotions."
            {...form.getInputProps("ealySaleAccess", { type: "checkbox" })}
          />
        </div>
        <Group position="right" mt="md">
          <Button type="submit" color="dark">
            Sign Up
          </Button>
        </Group>
      </form>
    </div>
  );
}
