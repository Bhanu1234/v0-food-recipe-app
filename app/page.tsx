import { Suspense } from "react";
import { Header } from "@/components/header";
import { FoodAssistant } from "@/components/food-assistant";
import { RecipeList } from "@/components/recipe-list";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* AI Food Assistant Section */}
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <FoodAssistant />
        </section>

        {/* Divider */}
        <div className="relative py-12">
          <div className="absolute inset-0 flex items-center px-4">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-background text-muted-foreground text-sm">
              Or browse our recipe collection
            </span>
          </div>
        </div>

        {/* Recipe Browser Section */}
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
