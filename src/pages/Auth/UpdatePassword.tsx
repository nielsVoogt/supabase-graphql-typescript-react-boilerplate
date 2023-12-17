import { Button, PasswordInput, TextInput } from "@mantine/core";

import { useAuth } from "@/context/AuthProvider";
import { useForm } from "@mantine/form";

const UpdatePassword = () => {
  const { updatePassword } = useAuth();

  const form = useForm({
    initialValues: {
      password: "",
      confirmPassword: "",
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  const handleSubmit = form.onSubmit(async (formData) => {
    const { password } = formData;
    const { data, error } = await updatePassword(password);

    if (error) {
      console.error(error);
    } else {
      console.log(data, "Password reset gelukt");
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <PasswordInput
        label="password"
        placeholder="Password"
        {...form.getInputProps("password")}
      />
      <PasswordInput
        label="Confirm password"
        placeholder="Confirm password"
        {...form.getInputProps("confirmPassword")}
      />
      <Button type="submit">Reset password</Button>
    </form>
  );
};

export default UpdatePassword;
