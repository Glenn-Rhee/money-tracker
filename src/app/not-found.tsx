import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold text-lettersIcon">
          Oops page not found!
        </h1>
        <Link
          href={"/"}
          className="px-8 rounded-lg py-1 bg-slate-800 text-white text-lg font-semibold"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
