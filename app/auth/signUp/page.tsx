"use client";
import { authClient } from "@/app/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";

const SignUp = () => {

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const Formdata: Record<string, string> = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      Formdata[key] = value.toString();
    });
    alert(`Form submitted with: ${JSON.stringify(Formdata, null, 2)}`);

    const { data, error } = await authClient.signUp.email({
      name: Formdata.name,
      email: Formdata.email,
      password: Formdata.password,
      callbackURL: "/",

    });

    console.log("Sign up response:", { data, error });

  };

  return (
    <div className="w-full h-screen mx-auto flex items-center justify-center flex-col">
      <h3 className="text-2xl font-bold mb-4">Please sign up</h3>
      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        {/* name field  */}
        <TextField
          isRequired
          name="name"
          validate={(value) => {
            if (value.length < 3) {
              return "Name must be at least 3 characters";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input name="name" placeholder="Enter your name" />
          <FieldError />
        </TextField>
        {/* email field */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input name="email" placeholder="Enter your email" />
          <FieldError />
        </TextField>
        {/* password field */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input name="password" placeholder="Enter your password" />
          <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
          <FieldError />
        </TextField>
        {/* buttons  */}
        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default SignUp;
