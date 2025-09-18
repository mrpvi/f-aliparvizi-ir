export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <button
      className={`bg-gray-100 text-white px-4 py-2 rounded-md shadow-md ${className || ""}`}
    >
      {children}
    </button>
  );
}
