export default function ErrorComponent({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="w-screen h-screen flex justify-center items-center mb-4">
      <div className="">
        <h1 className="text-lettersIcon font-bold text-2xl text-center">
          {title}
        </h1>
        <p className="font-medium text-darkmode-green-bar text-2xl text-center">
          {desc}
        </p>
      </div>
    </div>
  );
}
