import Image from "next/image";

export default function ArticleCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <div className="py-2 px-4 bg-gray-100 rounded-lg shadow-2xl flex items-center gap-4">
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        className="w-14 h-14 object-cover rounded-full"
      />
      <h2 className="text-[#c5c5c5] flex items-center gap-2 text-md font-bold">
        {title}
      </h2>
    </div>
  );
}
