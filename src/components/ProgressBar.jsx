export default function ProgressBar({ progress }) {
  return (
    <div className="w-full h-1 bg-gray-100 mb-12">
      <div
        className="h-full bg-orange-500 transition-all duration-500 ease-in-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
