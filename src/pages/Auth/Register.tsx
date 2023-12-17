import { Button, PasswordInput, TextInput } from "@mantine/core";

import { supabase } from "@/supabase/client";
import { useForm } from "@mantine/form";

const Register = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
    },
  });

  const register = (email: string, password: string) =>
    supabase.auth.signUp({ email, password });

  const handleSubmit = form.onSubmit(async (formData) => {
    const { email, password } = formData;
    const { data, error } = await register(email, password);

    if (!error && data) {
    }

    console.log(data, error);
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-2">
        <TextInput
          label="Email"
          className="space-y-1"
          placeholder="Input placeholder"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          label="password"
          placeholder="Input placeholder"
          className="space-y-1"
          {...form.getInputProps("password")}
        />
        <PasswordInput
          label="Reapeat password"
          placeholder="Input placeholder"
          className="space-y-1"
          {...form.getInputProps("confirmPassword")}
        />
      </div>
      <Button type="submit" className="w-full mt-5 block">
        Submit
      </Button>
    </form>
  );
};

export default Register;
