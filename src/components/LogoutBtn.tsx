"use client";

import { ResponseError } from "@/error/Response-Error";
import { ResponsePayload } from "@/types";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function LogoutBtn() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/auth/logout", { method: "DELETE" });
      const responseJson = (await response.json()) as ResponsePayload;
      if (responseJson.status === "failed") {
        throw new ResponseError(responseJson.statusCode, responseJson.message);
      }

      toast.success(responseJson.message);
      router.push("/boarding");
    } catch (error) {
      if (error instanceof ResponseError) {
        toast.error(error.message);
        return;
      }

      toast.error("An error occured!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <button
      onClick={handleLogout}
      type="button"
      disabled={isLoading}
      className={clsx(
        "text-lg transition-colors duration-200 rounded-full aspect-square w-[30px] h-[30px] flex items-center justify-center",
        isLoading
          ? "text-slate-200"
          : "text-darkmode-green-bar active:bg-slate-300 active:scale-95 hover:bg-lightgreen"
      )}
    >
      <i className="ri-logout-box-r-line"></i>
    </button>
  );
}
