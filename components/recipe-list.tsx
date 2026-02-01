"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { RecipeCard } from "./recipe-card";
import { CategoryFilter } from "./category-filter";
import { CuisineFilter } from "./cuisine-filter";
import { recipes, searchRecipes } from "@/lib/recipes";
import { Search, SlidersHorizontal } from "lucide-react";

export function RecipeList() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const categoryParam = searchParams.get("category") || "All";
  const cuisineParam = searchParams.get("cuisine") || "All";

  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedCuisine, setSelectedCuisine] = useState(cuisineParam);

  useEffect(() => {
    setSelectedCategory(categoryParam);
    setSelectedCuisine(cuisineParam);
  }, [categoryParam, cuisineParam]);

  let filteredRecipes = recipes;

  // Apply search filter
  if (searchQuery) {
    filteredRecipes = searchRecipes(searchQuery);
  }

  // Apply category filter
  if (selectedCategory !== "All") {
    filteredRecipes = filteredRecipes.filter(
      (recipe) => recipe.category === selectedCategory
    );
  }

  // Apply cuisine filter
  if (selectedCuisine !== "All") {
    filteredRecipes = filteredRecipes.filter(
      (recipe) => recipe.cuisine === selectedCuisine
    );
  }

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        {/* Filters Section */}
        <div className="mb-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-foreground">
              <SlidersHorizontal className="h-5 w-5" />
              <span className="font-semibold">Filter Recipes</span>
            </div>
            <CuisineFilter
              selectedCuisine={selectedCuisine}
              onSelectCuisine={setSelectedCuisine}
            />
          </div>
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Search Results Header */}
        {searchQuery && (
          <div className="mb-6 p-4 bg-secondary rounded-lg flex items-center gap-3">
            <Search className="h-5 w-5 text-primary" />
            <span className="text-foreground">
              Showing results for:{" "}
              <strong className="text-primary">{`"${searchQuery}"`}</strong>
            </span>
            <span className="text-muted-foreground">
              ({filteredRecipes.length} recipes found)
            </span>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredRecipes.length}{" "}
            {filteredRecipes.length === 1 ? "recipe" : "recipes"} available
          </p>
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No recipes found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or search for something else.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
