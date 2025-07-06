import Hero from "@/components/Hero";
import ArticlePreview from "@/components/shared/molecules/ArticlePreview";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="my-32">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold">Latest Articles</h2>
          <div className="flex flex-col gap-4">
            <ArticlePreview
              title="Article 1"
              description="This is a description of article 1"
              imageUrl="/images/profile.webp"
              imageAlt="Article 1"
            />
            <ArticlePreview
              title="Article 2"
              description="This is a description of article 2"
              imageUrl="/images/profile.webp"
              imageAlt="Article 2"
            />
            <ArticlePreview
              title="Article 3"
              description="This is a description of article 3"
              imageUrl="/images/profile.webp"
              imageAlt="Article 3"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
