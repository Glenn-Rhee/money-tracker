export default function ProgressBar() {
  return (
    <div className="w-full mt-2 bg-darkmode-green-bar rounded-xl relative px-5">
      <div className="w-[70%] absolute top-0 right-0 bottom-0 rounded-xl bg-bggreen-whiteletter flex items-center justify-end">
        <span className="text-sm font-medium text-bgdarkmode-letter pe-4 italic">
          Rp 20.000.000
        </span>
      </div>
      <span className="text-sm font-medium text-bggreen-whiteletter">30%</span>
    </div>
  );
}
