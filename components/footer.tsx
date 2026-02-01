import Link from "next/link";
import { ChefHat } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <ChefHat className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Tastify</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Your go-to destination for delicious recipes from around the
              world. Discover new flavors, learn cooking techniques, and create
              memorable meals.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/?category=Breakfast"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Breakfast
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=Lunch"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Lunch
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=Dinner"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Dinner
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=Desserts"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Desserts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4">Cuisines</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/?cuisine=Italian"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Italian
                </Link>
              </li>
              <li>
                <Link
                  href="/?cuisine=Asian"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Asian
                </Link>
              </li>
              <li>
                <Link
                  href="/?cuisine=Mexican"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Mexican
                </Link>
              </li>
              <li>
                <Link
                  href="/?cuisine=Mediterranean"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Mediterranean
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© 2026 Tastify. All rights reserved. Made with love for food.</p>
        </div>
      </div>
    </footer>
  );
}
