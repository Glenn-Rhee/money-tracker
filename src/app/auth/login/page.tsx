import CardAuth from "@/components/auth/CardAuth";
import ContainerAuth from "@/components/auth/ContainerAuth";
import PasswordGroup from "@/components/auth/PasswordGroup";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Link from "next/link";

export default function LoginPage() {
  return (
    <ContainerAuth>
      <h1 className="font-bold text-4xl text-center text-slate-900">
        Expanse <span className="text-green-500">Tracker</span>
      </h1>
      <CardAuth>
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-2xl text-slate-800">Welcome Back</h3>
          <span className="font-semibold text-gray-700">
            Please enter your details to login
          </span>
        </div>
        <div className="space-y-4 mt-8">
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input placeholder="examp@example.com" id="email" type="email" />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label htmlFor="password">Password</Label>
            <PasswordGroup
              id="password"
              type="password"
              placeholder="********"
            />
          </div>
          <Button className="mt-4">Login</Button>
          <span className="text-sm font-semibold text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href={"/auth/signup"}
              className="text-green-500 hover:underline"
            >
              Sign up
            </Link>
          </span>
        </div>
      </CardAuth>
    </ContainerAuth>
  );
}
