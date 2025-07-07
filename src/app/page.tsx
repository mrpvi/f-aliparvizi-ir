import Hero from "@/components/Hero";
import ArticlePreview from "@/components/shared/molecules/ArticlePreview";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="my-32">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-2xl font-bold">Latest Articles</h2>
          <div className="flex flex-col gap-4">
            <ArticlePreview
              title="Web Components: Building Modular and Reusable Components"
              description="I have been working on ‘web components’ for a while now, as I am trying to find a solution for one of the project issues I’m involved in. In this article, I will provide a summary of the knowledge I have acquired about this technology."
              imageUrl="/images/article-1.webp"
              imageAlt="Web Components: Building Modular and Reusable Components"
              url="https://medium.com/@aliparvizidev/web-components-21679d6d72dd"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
