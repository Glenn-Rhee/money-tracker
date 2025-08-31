import { useState } from "react";

type InputGroupProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  error?: string;
};

export default function InputGroup(props: InputGroupProps) {
  const { id, label, type, placeholder, error, ...rest } = props;
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-y-2">
      <label className="text-lettersIcon text-sm font-medium" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          {...rest}
          className="w-full text-sm text-lettersIcon bg-lightgreen px-6 py-3 rounded-3xl shadow-md focus:outline focus:border-0 focus:outline-darkmode-green-bar"
        />
        {type === "password" ? (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="top-[50%] right-5 -translate-y-[50%] absolute"
          >
            {showPassword ? (
              <i className="ri-eye-line"></i>
            ) : (
              <i className="ri-eye-close-line"></i>
            )}
          </button>
        ) : null}
      </div>
      <p className="text-red-500 font-medium text-sm">{error}</p>
    </div>
  );
}
