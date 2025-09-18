export default function ContainerCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-gray-300 rounded-lg p-6 shadow-lg w-[370px] lg:w-[570px] relative z-30 ${className || ""}`}
    >
      {children}
    </div>
  );
}
