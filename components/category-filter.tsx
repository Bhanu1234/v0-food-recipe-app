"use client";

import { Button } from "@/components/ui/button";
import { categories } from "@/lib/recipes";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <Button
          key={category.name}
          variant={selectedCategory === category.name ? "default" : "outline"}
          size="sm"
          onClick={() => onSelectCategory(category.name)}
          className={cn(
            "rounded-full transition-all",
            selectedCategory === category.name
              ? "bg-primary text-primary-foreground"
              : "bg-card text-foreground hover:bg-secondary"
          )}
        >
          <span className="mr-1">{category.icon}</span>
          {category.name}
        </Button>
      ))}
    </div>
  );
}
