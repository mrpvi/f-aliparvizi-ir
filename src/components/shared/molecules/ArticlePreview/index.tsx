import Image from "next/image";

interface ArticlePreviewProps {
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
}

export default function ArticlePreview({ title, description, imageUrl, imageAlt }: ArticlePreviewProps) {
    return (
        <article className="flex gap-4 p-4 border-l-4 border-blue-500 bg-white rounded-lg rounded-l-none shadow-sm hover:shadow-md transition-shadow items-center">
            <div className="flex-shrink-0">
                <Image 
                    src={imageUrl} 
                    alt={imageAlt} 
                    width={96} 
                    height={72} 
                    className="rounded-md object-cover"
                />
            </div>
            <div className="flex flex-col gap-1">
                <h3 className="text-lg font-bold text-gray-900 hover:text-blue-500 transition-colors">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
            </div>
        </article>
    );
} 