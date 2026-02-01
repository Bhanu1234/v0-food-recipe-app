"use client";

import React from "react"

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative py-20 px-4 bg-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="container mx-auto max-w-4xl relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
            Discover Delicious Recipes
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Explore thousands of recipes from around the world. Find your next
            favorite dish and start cooking today.
          </p>
          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for recipes, ingredients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base bg-card border-border"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Search
            </Button>
          </form>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
            <span>Popular:</span>
            <button
              onClick={() => router.push("/?search=pasta")}
              className="hover:text-primary transition-colors"
            >
              Pasta
            </button>
            <span>•</span>
            <button
              onClick={() => router.push("/?search=chicken")}
              className="hover:text-primary transition-colors"
            >
              Chicken
            </button>
            <span>•</span>
            <button
              onClick={() => router.push("/?search=healthy")}
              className="hover:text-primary transition-colors"
            >
              Healthy
            </button>
            <span>•</span>
            <button
              onClick={() => router.push("/?search=quick")}
              className="hover:text-primary transition-colors"
            >
              Quick Meals
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
