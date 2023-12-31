import { Button, PasswordInput, TextInput } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthProvider";
import { useForm } from "@mantine/form";

const Register = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "n.voogt@gmail.com",
      password: "test12",
    },

    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
    },
  });

  const handleSubmit = form.onSubmit(async (formData) => {
    const { email, password } = formData;
    const {
      data: { user, session },
      error,
    } = await login(email, password);
    if (error) console.error(error);
    if (user && session) {
      navigate("/home");
    }
  });

  return (
    <>
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
            className="space-y-1"
            placeholder="Input placeholder"
            {...form.getInputProps("password")}
          />
        </div>

        <Button type="submit" className="w-full mt-5 block">
          Login
        </Button>
      </form>
      <div>
        <Link to="/reset-password">I forgot my password</Link>
      </div>
      <div>
        <Link to="/register">Create account</Link>
      </div>
    </>
  );
};

export default Register;
