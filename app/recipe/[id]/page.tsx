import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Users,
  ChefHat,
  ArrowLeft,
  Printer,
  Share2,
  Flame,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRecipeById, recipes } from "@/lib/recipes";

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipeById(id);
  if (!recipe) {
    return { title: "Recipe Not Found" };
  }
  return {
    title: `${recipe.title} - Tastify`,
    description: recipe.description,
  };
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipeById(id);

  if (!recipe) {
    notFound();
  }

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Image Section */}
        <div className="relative h-[40vh] md:h-[50vh] w-full">
          <Image
            src={recipe.image || "/placeholder.svg"}
            alt={recipe.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto">
              <Link href="/">
                <Button
                  variant="secondary"
                  size="sm"
                  className="mb-4 bg-card/90 backdrop-blur"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Recipes
                </Button>
              </Link>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className="bg-primary text-primary-foreground">
                  {recipe.category}
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-card/90 text-card-foreground"
                >
                  {recipe.cuisine}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-card/90 text-card-foreground border-border"
                >
                  {recipe.difficulty}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground text-balance">
                {recipe.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <p className="text-lg text-muted-foreground">{recipe.description}</p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Total Time</p>
                    <p className="font-semibold text-foreground">
                      {totalTime} min
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Servings</p>
                    <p className="font-semibold text-foreground">
                      {recipe.servings}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                  <ChefHat className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Difficulty</p>
                    <p className="font-semibold text-foreground">
                      {recipe.difficulty}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-lg">
                  <Flame className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Calories</p>
                    <p className="font-semibold text-foreground">
                      {recipe.nutrition.calories}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Instructions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full font-semibold text-sm">
                          {index + 1}
                        </span>
                        <p className="text-muted-foreground pt-1">
                          {instruction}
                        </p>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag) => (
                  <Link key={tag} href={`/?search=${tag}`}>
                    <Badge
                      variant="outline"
                      className="hover:bg-secondary cursor-pointer border-border text-foreground"
                    >
                      #{tag}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent border-border text-foreground"
                >
                  <Printer className="h-4 w-4 mr-2" />
                  Print
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-transparent border-border text-foreground"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>

              {/* Ingredients */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Ingredients</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Nutrition */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">
                    Nutrition Facts
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">Per serving</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Calories</span>
                      <span className="font-semibold text-foreground">
                        {recipe.nutrition.calories}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Protein</span>
                      <span className="font-semibold text-foreground">
                        {recipe.nutrition.protein}
                      </span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">Carbs</span>
                      <span className="font-semibold text-foreground">
                        {recipe.nutrition.carbs}
                      </span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-muted-foreground">Fat</span>
                      <span className="font-semibold text-foreground">
                        {recipe.nutrition.fat}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Time Breakdown */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Time Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Prep Time</span>
                      <span className="font-semibold text-foreground">
                        {recipe.prepTime} min
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Cook Time</span>
                      <span className="font-semibold text-foreground">
                        {recipe.cookTime} min
                      </span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-border">
                      <span className="text-muted-foreground font-medium">
                        Total Time
                      </span>
                      <span className="font-bold text-primary">
                        {totalTime} min
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
