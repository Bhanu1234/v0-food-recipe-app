import { Suspense } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { RecipeList } from "@/components/recipe-list";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <Suspense
          fallback={
            <div className="py-12 px-4 text-center">
              <div className="animate-pulse">Loading recipes...</div>
            </div>
          }
        >
          <RecipeList />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
