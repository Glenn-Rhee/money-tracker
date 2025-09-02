"use client";

import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="text-2xl text-bggreen-whiteletter"
    >
      <i className="ri-arrow-left-line"></i>
    </button>
  );
}
