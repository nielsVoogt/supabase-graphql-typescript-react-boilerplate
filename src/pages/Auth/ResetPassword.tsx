import { Button, PasswordInput, TextInput } from "@mantine/core";

import { useAuth } from "../../context/AuthProvider";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { passwordReset } = useAuth();
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "n.voogt@gmail.com",
    },

    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
    },
  });

  const handleSubmit = form.onSubmit(async (formData) => {
    const { email } = formData;
    const { error } = await passwordReset(email);

    if (error) {
      console.error(error);
    } else {
      console.log("password reset link sent");
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="Email"
        description="Input description"
        placeholder="Input placeholder"
        {...form.getInputProps("email")}
      />
      <Button type="submit">Reset password</Button>
    </form>
  );
};

export default ResetPassword;
