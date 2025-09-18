import DotGrid from "@/components/DotGrid";
import Hero from "@/components/Hero";
import Header from "@/components/shared/organisms/Header";
import ContainerCard from "@/components/ContainerCard";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import Footer from "@/components/shared/organisms/Footer";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-gray-400">
      <DotGrid
        dotSize={3}
        gap={25}
        baseColor="#333333"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col gap-8 max-h-[100vh] py-8 overflow-y-auto scrollbar-hide">
        <Header />
        <Hero />

        <ContainerCard className="rounded-t-none -mt-8">
          <div className="bg-gray-200 rounded-lg -mx-4 p-4">
            <h2 className="text-gray-50 flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 bg-gray-50 rounded"></div>
              My Notes
            </h2>

            <div className="flex flex-col gap-4">
              <Link href="https://medium.com/@aliparvizidev/what-i-discovered-in-code-reviews-5a55ddff6df4">
                <ArticleCard
                  title="What I Discovered in Code Reviews"
                  image="/images/article-3.webp"
                />
              </Link>
              <Link href="/articles/mjml-email-templates">
                <ArticleCard
                  title="MJML: Streamlining Responsive Email Creation"
                  image="/images/article-2.webp"
                />
              </Link>
              <Link href="https://medium.com/@aliparvizidev/web-components-21679d6d72dd">
                <ArticleCard
                  title="Web Components: The Future of Web Development"
                  image="/images/article-1.webp"
                />
              </Link>
            </div>
          </div>
        </ContainerCard>

        <Footer />
      </div>
    </main>
  );
}
