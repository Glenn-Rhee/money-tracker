"use client";
import Button from "@/components/Button";
import Drawer from "@/components/Drawer";
import AuthShell from "@/components/pages/auth/AuthShell";
import InputGroup from "@/components/pages/auth/InputGroup";
import Title from "@/components/pages/auth/Title";
import { ResponseError } from "@/error/Response-Error";
import { AuthValidation } from "@/Validation/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import z from "zod";
import { useState } from "react";
import { ResponsePayload } from "@/types";
import { useRouter } from "next/navigation";
import { PulseLoader } from "react-spinners";

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof AuthValidation.SIGNUP>>({
    resolver: zodResolver(AuthValidation.SIGNUP),
    mode: "onChange",
    defaultValues: {
      email: "",
      confirmPassword: "",
      dateOfBirth: "",
      fullName: "",
      mobileNumber: "",
      password: "",
    },
  });

  async function handleSubmit(values: z.infer<typeof AuthValidation.SIGNUP>) {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as ResponsePayload;
      if (data.status === "failed") {
        throw new ResponseError(data.statusCode, data.message);
      }

      toast.success(data.message);
      router.push("/");
    } catch (error) {
      if (error instanceof ResponseError) {
        toast.error(error.message);
        return;
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthShell>
      <Title className="mt-14">Create Account</Title>
      <Drawer className="justify-start h-[80vh] items-start overflow-x-hidden pt-10 pb-6 px-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit(handleSubmit)();
          }}
          className="w-full space-y-2"
        >
          <InputGroup
            {...form.register("fullName")}
            id="fullname"
            label="Full Name"
            type="text"
            placeholder="example name"
            error={form.formState.errors.fullName?.message}
          />

          <InputGroup
            {...form.register("email")}
            id="email"
            label="Email"
            type="email"
            placeholder="example@example.com"
            error={form.formState.errors.email?.message}
          />

          <InputGroup
            {...form.register("mobileNumber")}
            id="mobileNumber"
            label="Mobile Number"
            type="text"
            inputMode="numeric"
            placeholder="08xxxxxxxx"
            error={form.formState.errors.mobileNumber?.message}
          />

          <InputGroup
            {...form.register("dateOfBirth")}
            id="dateOfBirth"
            label="Date Of Birth"
            type="date"
            placeholder="DD / MM / YYYY"
            error={form.formState.errors.dateOfBirth?.message}
          />

          <InputGroup
            {...form.register("password")}
            id="password"
            label="Password"
            type="password"
            placeholder="*******"
            error={form.formState.errors.password?.message}
          />

          <InputGroup
            {...form.register("confirmPassword")}
            id="confirmPassword"
            label="Confirmation Password"
            type="password"
            placeholder="*******"
            error={form.formState.errors.confirmPassword?.message}
          />

          <Button
            onSubmit={() => form.handleSubmit(handleSubmit)()}
            onClick={() => form.handleSubmit(handleSubmit)()}
            type="submit"
            disabled={loading}
            className="w-full mt-6 py-3"
          >
            {loading ? <PulseLoader /> : "Sign Up"}
          </Button>

          <span className="text-sm block text-center font-medium text-lettersIcon">
            Already have an account?{" "}
            <Link
              href={"/auth/login"}
              className="text-blue-btn hover:underline"
            >
              Login
            </Link>
          </span>
        </form>
      </Drawer>
    </AuthShell>
  );
}
