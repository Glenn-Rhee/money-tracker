"use client";
import { InputHTMLAttributes, useState } from "react";
import Input from "../Input";

export default function PasswordGroup(
  props: InputHTMLAttributes<HTMLInputElement>
) {
  const [isPasswordOpen, setIsPasswordOpen] = useState<boolean>(false);

  return (
    <div className="relative w-full ">
      <Input {...props} type={isPasswordOpen ? "text" : props.type} />
      {isPasswordOpen ? (
        <i
          onClick={() => setIsPasswordOpen(false)}
          color="#1d293d"
          className="absolute cursor-pointer top-1/2 -translate-y-[50%] right-4 ri-eye-line"
        ></i>
      ) : (
        <i
          onClick={() => setIsPasswordOpen(true)}
          color="#1d293d"
          className="ri-eye-off-line absolute cursor-pointer top-1/2 -translate-y-[50%] right-4"
        ></i>
      )}
    </div>
  );
}
