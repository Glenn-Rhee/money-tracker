"use client";
import Button from "@/components/Button";
import Drawer from "@/components/Drawer";
import AuthShell from "@/components/pages/auth/AuthShell";
import InputGroup from "@/components/pages/auth/InputGroup";
import Title from "@/components/pages/auth/Title";
import { AuthValidation } from "@/Validation/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";

export default function LoginPage() {
  const form = useForm<z.infer<typeof AuthValidation.LOGIN>>({
    resolver: zodResolver(AuthValidation.LOGIN),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleSubmit(values: z.infer<typeof AuthValidation.LOGIN>) {
    console.log(values);
  }

  return (
    <AuthShell>
      <Title>Welcome</Title>
      <Drawer className="justify-start items-start overflow-hidden pt-18 px-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit(handleSubmit)();
          }}
          className="w-full space-y-4"
        >
          <InputGroup
            {...form.register("email")}
            id="email"
            label="Email"
            type="email"
            placeholder="example@example.com"
            error={form.formState.errors.email?.message}
          />
          <InputGroup
            {...form.register("password")}
            id="password"
            label="Password"
            type="password"
            placeholder="*******"
            error={form.formState.errors.password?.message}
          />

          <Button
            onSubmit={() => form.handleSubmit(handleSubmit)()}
            onClick={() => form.handleSubmit(handleSubmit)()}
            type="submit"
            className="w-full mt-6"
          >
            Login
          </Button>
          <span className="text-sm block text-center font-medium text-lettersIcon">
            Don&apos;t have an account?{" "}
            <Link
              href={"/auth/signup"}
              className="text-blue-btn hover:underline"
            >
              Sign Up
            </Link>
          </span>
        </form>
      </Drawer>
    </AuthShell>
  );
}
