"use client";
import Image from "next/image";

export default function PhotoProfile() {
  return (
    <>
      <div className="relative w-fit mx-auto rounded-full">
        <Image
          src={"/prof-exmple.jpg"}
          width={120}
          height={120}
          className="rounded-full mx-auto aspect-square"
          alt="Profile User"
        />
      </div>
      <div className="space-y-1 w-full text-center">
        <h4 className="text-darkmode-green-bar text-lg font-semibold">
          John Smith
        </h4>
      </div>
    </>
  );
}
