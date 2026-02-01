export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  cuisine: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  tags: string[];
}

export const categories = [
  { name: "All", icon: "🍽️" },
  { name: "Breakfast", icon: "🥞" },
  { name: "Lunch", icon: "🥗" },
  { name: "Dinner", icon: "🍝" },
  { name: "Desserts", icon: "🍰" },
  { name: "Snacks", icon: "🍿" },
  { name: "Drinks", icon: "🥤" },
  { name: "Vegetarian", icon: "🥬" },
];

export const cuisines = [
  "All",
  "Italian",
  "Mexican",
  "Asian",
  "American",
  "Mediterranean",
  "Indian",
  "French",
];

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Classic Margherita Pizza",
    description:
      "A traditional Italian pizza with fresh tomatoes, mozzarella, and basil on a crispy thin crust.",
    image:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800&q=80",
    category: "Dinner",
    cuisine: "Italian",
    prepTime: 30,
    cookTime: 15,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "500g pizza dough",
      "200g San Marzano tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
      "1 tsp dried oregano",
    ],
    instructions: [
      "Preheat your oven to 475°F (245°C) with a pizza stone inside.",
      "Crush the tomatoes by hand and season with salt.",
      "Stretch the dough into a 12-inch circle on a floured surface.",
      "Spread the tomato sauce evenly, leaving a 1-inch border.",
      "Tear the mozzarella and distribute over the pizza.",
      "Drizzle with olive oil and add oregano.",
      "Slide onto the hot pizza stone and bake for 12-15 minutes.",
      "Top with fresh basil leaves before serving.",
    ],
    nutrition: {
      calories: 285,
      protein: "12g",
      carbs: "36g",
      fat: "10g",
    },
    tags: ["pizza", "italian", "vegetarian", "cheese"],
  },
  {
    id: "2",
    title: "Fluffy Pancakes",
    description:
      "Light and fluffy buttermilk pancakes perfect for a lazy weekend breakfast.",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
    category: "Breakfast",
    cuisine: "American",
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "2 cups all-purpose flour",
      "2 tbsp sugar",
      "2 tsp baking powder",
      "1 tsp baking soda",
      "1/2 tsp salt",
      "2 cups buttermilk",
      "2 large eggs",
      "1/4 cup melted butter",
      "Maple syrup for serving",
    ],
    instructions: [
      "Mix flour, sugar, baking powder, baking soda, and salt in a bowl.",
      "In another bowl, whisk buttermilk, eggs, and melted butter.",
      "Pour wet ingredients into dry and stir until just combined.",
      "Heat a griddle over medium heat and lightly grease.",
      "Pour 1/4 cup batter per pancake onto the griddle.",
      "Cook until bubbles form on surface, then flip.",
      "Cook another 1-2 minutes until golden brown.",
      "Serve warm with butter and maple syrup.",
    ],
    nutrition: {
      calories: 320,
      protein: "9g",
      carbs: "45g",
      fat: "12g",
    },
    tags: ["breakfast", "sweet", "american", "quick"],
  },
  {
    id: "3",
    title: "Thai Green Curry",
    description:
      "Aromatic Thai curry with coconut milk, vegetables, and your choice of protein.",
    image:
      "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80",
    category: "Dinner",
    cuisine: "Asian",
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "400ml coconut milk",
      "3 tbsp green curry paste",
      "500g chicken or tofu",
      "1 cup bamboo shoots",
      "1 red bell pepper, sliced",
      "1 cup Thai basil",
      "2 tbsp fish sauce",
      "1 tbsp palm sugar",
      "4 kaffir lime leaves",
    ],
    instructions: [
      "Heat a wok over high heat with a splash of oil.",
      "Add curry paste and stir for 1 minute until fragrant.",
      "Pour in half the coconut milk and stir well.",
      "Add protein and cook until nearly done.",
      "Add remaining coconut milk, bamboo shoots, and bell pepper.",
      "Season with fish sauce and palm sugar.",
      "Add lime leaves and simmer for 10 minutes.",
      "Stir in Thai basil and serve over jasmine rice.",
    ],
    nutrition: {
      calories: 380,
      protein: "28g",
      carbs: "15g",
      fat: "24g",
    },
    tags: ["thai", "curry", "spicy", "asian"],
  },
  {
    id: "4",
    title: "Caesar Salad",
    description:
      "Crisp romaine lettuce with homemade Caesar dressing, croutons, and Parmesan.",
    image:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80",
    category: "Lunch",
    cuisine: "American",
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "2 heads romaine lettuce",
      "1/2 cup olive oil",
      "2 anchovy fillets",
      "2 garlic cloves",
      "1 egg yolk",
      "2 tbsp lemon juice",
      "1 tsp Dijon mustard",
      "1/2 cup Parmesan, shaved",
      "2 cups croutons",
    ],
    instructions: [
      "Make dressing: blend anchovies, garlic, egg yolk, lemon, and mustard.",
      "Slowly drizzle in olive oil while blending.",
      "Season with salt and pepper.",
      "Wash and chop romaine into bite-sized pieces.",
      "Toss lettuce with dressing in a large bowl.",
      "Add croutons and half the Parmesan, toss again.",
      "Top with remaining Parmesan shavings.",
      "Serve immediately while croutons are crisp.",
    ],
    nutrition: {
      calories: 290,
      protein: "8g",
      carbs: "18g",
      fat: "22g",
    },
    tags: ["salad", "healthy", "quick", "lunch"],
  },
  {
    id: "5",
    title: "Chocolate Lava Cake",
    description:
      "Decadent individual chocolate cakes with a molten center that flows when cut.",
    image:
      "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&q=80",
    category: "Desserts",
    cuisine: "French",
    prepTime: 15,
    cookTime: 12,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "200g dark chocolate",
      "100g unsalted butter",
      "2 whole eggs",
      "2 egg yolks",
      "1/4 cup sugar",
      "2 tbsp flour",
      "Pinch of salt",
      "Vanilla ice cream for serving",
    ],
    instructions: [
      "Preheat oven to 425°F (220°C). Butter 4 ramekins.",
      "Melt chocolate and butter together, let cool slightly.",
      "Whisk eggs, yolks, and sugar until thick and pale.",
      "Fold chocolate mixture into eggs.",
      "Sift in flour and salt, fold gently.",
      "Divide batter among ramekins.",
      "Bake for 12 minutes until edges are set but center jiggles.",
      "Invert onto plates and serve immediately with ice cream.",
    ],
    nutrition: {
      calories: 420,
      protein: "7g",
      carbs: "32g",
      fat: "30g",
    },
    tags: ["chocolate", "dessert", "french", "elegant"],
  },
  {
    id: "6",
    title: "Fish Tacos",
    description:
      "Crispy beer-battered fish with tangy slaw and creamy chipotle sauce in warm tortillas.",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80",
    category: "Lunch",
    cuisine: "Mexican",
    prepTime: 25,
    cookTime: 15,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "500g white fish fillets",
      "1 cup flour",
      "1 cup beer",
      "8 corn tortillas",
      "2 cups shredded cabbage",
      "1/2 cup sour cream",
      "2 tbsp chipotle in adobo",
      "Lime wedges",
      "Fresh cilantro",
    ],
    instructions: [
      "Mix flour, beer, and salt to make batter.",
      "Cut fish into strips and season.",
      "Heat oil to 375°F (190°C) for frying.",
      "Dip fish in batter and fry until golden, 3-4 minutes.",
      "Make chipotle cream by mixing sour cream with chipotle.",
      "Warm tortillas in a dry pan.",
      "Assemble tacos with fish, cabbage, and chipotle cream.",
      "Serve with lime wedges and cilantro.",
    ],
    nutrition: {
      calories: 340,
      protein: "24g",
      carbs: "35g",
      fat: "12g",
    },
    tags: ["mexican", "seafood", "tacos", "fried"],
  },
  {
    id: "7",
    title: "Mediterranean Quinoa Bowl",
    description:
      "Healthy grain bowl with chickpeas, vegetables, feta, and lemon tahini dressing.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    category: "Lunch",
    cuisine: "Mediterranean",
    prepTime: 15,
    cookTime: 20,
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "1 cup quinoa",
      "1 can chickpeas, drained",
      "1 cucumber, diced",
      "1 cup cherry tomatoes",
      "1/2 red onion, sliced",
      "100g feta cheese",
      "1/4 cup tahini",
      "2 tbsp lemon juice",
      "Kalamata olives",
    ],
    instructions: [
      "Cook quinoa according to package instructions.",
      "Roast chickpeas at 400°F with olive oil and spices for 20 minutes.",
      "Make dressing by whisking tahini, lemon juice, and water.",
      "Dice cucumber and halve cherry tomatoes.",
      "Divide quinoa between bowls.",
      "Top with chickpeas, vegetables, olives, and feta.",
      "Drizzle with tahini dressing.",
      "Garnish with fresh herbs and serve.",
    ],
    nutrition: {
      calories: 450,
      protein: "18g",
      carbs: "52g",
      fat: "20g",
    },
    tags: ["healthy", "vegetarian", "mediterranean", "bowl"],
  },
  {
    id: "8",
    title: "Beef Burger",
    description:
      "Juicy homemade beef patty with all the classic toppings on a brioche bun.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    category: "Dinner",
    cuisine: "American",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "500g ground beef (80/20)",
      "4 brioche buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion rings",
      "Pickles",
      "Ketchup and mustard",
      "Salt and pepper",
    ],
    instructions: [
      "Divide beef into 4 portions and form into patties.",
      "Season generously with salt and pepper.",
      "Heat a cast iron skillet over high heat.",
      "Cook patties 3-4 minutes per side for medium.",
      "Add cheese in last minute and cover to melt.",
      "Toast buns on the pan.",
      "Assemble burgers with all toppings.",
      "Serve immediately with fries.",
    ],
    nutrition: {
      calories: 580,
      protein: "32g",
      carbs: "38g",
      fat: "34g",
    },
    tags: ["burger", "american", "beef", "classic"],
  },
  {
    id: "9",
    title: "Mango Smoothie Bowl",
    description:
      "Tropical smoothie bowl topped with fresh fruits, granola, and coconut flakes.",
    image:
      "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80",
    category: "Breakfast",
    cuisine: "American",
    prepTime: 10,
    cookTime: 0,
    servings: 1,
    difficulty: "Easy",
    ingredients: [
      "2 frozen bananas",
      "1 cup frozen mango",
      "1/2 cup coconut milk",
      "Fresh berries",
      "Granola",
      "Coconut flakes",
      "Chia seeds",
      "Honey",
    ],
    instructions: [
      "Blend frozen bananas and mango with coconut milk.",
      "Blend until thick and creamy, adding more milk if needed.",
      "Pour into a bowl.",
      "Arrange toppings in rows: berries, granola, coconut.",
      "Sprinkle with chia seeds.",
      "Drizzle with honey.",
      "Serve immediately while still frozen.",
      "Enjoy with a spoon!",
    ],
    nutrition: {
      calories: 380,
      protein: "6g",
      carbs: "72g",
      fat: "10g",
    },
    tags: ["smoothie", "healthy", "tropical", "breakfast"],
  },
  {
    id: "10",
    title: "Butter Chicken",
    description:
      "Creamy and aromatic Indian curry with tender chicken in a rich tomato-based sauce.",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&q=80",
    category: "Dinner",
    cuisine: "Indian",
    prepTime: 20,
    cookTime: 30,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "600g chicken thighs, cubed",
      "1 cup tomato puree",
      "1 cup heavy cream",
      "2 tbsp butter",
      "2 tbsp garam masala",
      "1 tbsp ginger-garlic paste",
      "1 tsp turmeric",
      "1 tsp chili powder",
      "Fresh cilantro",
    ],
    instructions: [
      "Marinate chicken in yogurt and spices for 30 minutes.",
      "Sear chicken in butter until golden, set aside.",
      "Sauté ginger-garlic paste in the same pan.",
      "Add tomato puree and spices, cook 10 minutes.",
      "Pour in cream and simmer 5 minutes.",
      "Return chicken to sauce and cook 10 more minutes.",
      "Finish with a knob of butter.",
      "Garnish with cilantro, serve with naan.",
    ],
    nutrition: {
      calories: 520,
      protein: "35g",
      carbs: "12g",
      fat: "38g",
    },
    tags: ["indian", "curry", "chicken", "creamy"],
  },
  {
    id: "11",
    title: "Guacamole",
    description:
      "Fresh and zesty Mexican avocado dip with tomatoes, onions, and lime juice.",
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=800&q=80",
    category: "Snacks",
    cuisine: "Mexican",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "3 ripe avocados",
      "1 lime, juiced",
      "1 tsp salt",
      "1/2 cup diced onion",
      "3 tbsp fresh cilantro",
      "2 roma tomatoes, diced",
      "1 tsp minced garlic",
      "1 jalapeño, seeded and minced",
    ],
    instructions: [
      "Cut avocados in half and remove pit.",
      "Scoop flesh into a mixing bowl.",
      "Mash avocados with a fork to desired texture.",
      "Add lime juice and salt, mix well.",
      "Fold in onion, cilantro, tomatoes, and garlic.",
      "Add jalapeño for heat if desired.",
      "Taste and adjust seasoning.",
      "Serve immediately with tortilla chips.",
    ],
    nutrition: {
      calories: 160,
      protein: "2g",
      carbs: "9g",
      fat: "14g",
    },
    tags: ["mexican", "dip", "avocado", "vegetarian"],
  },
  {
    id: "12",
    title: "Iced Matcha Latte",
    description:
      "Refreshing Japanese green tea latte with a creamy milk base over ice.",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800&q=80",
    category: "Drinks",
    cuisine: "Asian",
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    difficulty: "Easy",
    ingredients: [
      "2 tsp matcha powder",
      "2 tbsp hot water",
      "1 cup milk of choice",
      "Ice cubes",
      "1 tbsp honey or sweetener",
      "1/4 tsp vanilla extract",
    ],
    instructions: [
      "Sift matcha powder into a bowl to remove clumps.",
      "Add hot water and whisk vigorously until smooth.",
      "Add sweetener and vanilla, mix well.",
      "Fill a glass with ice cubes.",
      "Pour cold milk over the ice.",
      "Slowly pour matcha mixture over the milk.",
      "Stir gently to combine or enjoy layered.",
      "Serve immediately.",
    ],
    nutrition: {
      calories: 120,
      protein: "4g",
      carbs: "18g",
      fat: "3g",
    },
    tags: ["drink", "matcha", "japanese", "refreshing"],
  },
  {
    id: "13",
    title: "Spaghetti Carbonara",
    description:
      "Classic Roman pasta with crispy guanciale, eggs, Pecorino Romano, and black pepper.",
    image:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
    category: "Dinner",
    cuisine: "Italian",
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "400g spaghetti",
      "200g guanciale or pancetta",
      "4 egg yolks",
      "2 whole eggs",
      "100g Pecorino Romano, grated",
      "Freshly ground black pepper",
      "Salt for pasta water",
    ],
    instructions: [
      "Bring a large pot of salted water to boil.",
      "Cut guanciale into small cubes.",
      "Cook guanciale in a pan until crispy, set aside.",
      "Mix egg yolks, eggs, and most of the cheese.",
      "Cook spaghetti until al dente, reserve 1 cup pasta water.",
      "Add hot pasta to guanciale pan (off heat).",
      "Quickly toss in egg mixture, adding pasta water as needed.",
      "Serve with remaining cheese and plenty of black pepper.",
    ],
    nutrition: {
      calories: 650,
      protein: "28g",
      carbs: "72g",
      fat: "28g",
    },
    tags: ["pasta", "italian", "classic", "eggs"],
  },
  {
    id: "14",
    title: "Greek Salad",
    description:
      "Fresh Mediterranean salad with cucumbers, tomatoes, olives, and feta cheese.",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
    category: "Lunch",
    cuisine: "Mediterranean",
    prepTime: 15,
    cookTime: 0,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "4 large tomatoes, chunked",
      "1 cucumber, sliced",
      "1 red onion, sliced",
      "200g feta cheese, cubed",
      "1 cup Kalamata olives",
      "1/4 cup olive oil",
      "2 tbsp red wine vinegar",
      "1 tsp dried oregano",
    ],
    instructions: [
      "Cut tomatoes into large chunks.",
      "Slice cucumber into half moons.",
      "Thinly slice red onion.",
      "Combine vegetables in a large bowl.",
      "Add olives and feta cheese.",
      "Whisk olive oil, vinegar, and oregano.",
      "Pour dressing over salad and toss gently.",
      "Season with salt and pepper, serve immediately.",
    ],
    nutrition: {
      calories: 280,
      protein: "9g",
      carbs: "14g",
      fat: "22g",
    },
    tags: ["greek", "salad", "healthy", "vegetarian"],
  },
  {
    id: "15",
    title: "Tiramisu",
    description:
      "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    category: "Desserts",
    cuisine: "Italian",
    prepTime: 30,
    cookTime: 0,
    servings: 8,
    difficulty: "Medium",
    ingredients: [
      "500g mascarpone cheese",
      "4 egg yolks",
      "1/2 cup sugar",
      "300g ladyfinger cookies",
      "2 cups strong espresso, cooled",
      "2 tbsp coffee liqueur",
      "Unsweetened cocoa powder",
      "Dark chocolate shavings",
    ],
    instructions: [
      "Beat egg yolks with sugar until thick and pale.",
      "Fold in mascarpone until smooth.",
      "Mix espresso with coffee liqueur.",
      "Briefly dip ladyfingers in coffee mixture.",
      "Layer soaked ladyfingers in a 9x13 dish.",
      "Spread half the mascarpone cream over ladyfingers.",
      "Repeat layers, ending with cream.",
      "Refrigerate 4 hours, dust with cocoa before serving.",
    ],
    nutrition: {
      calories: 380,
      protein: "7g",
      carbs: "32g",
      fat: "24g",
    },
    tags: ["italian", "dessert", "coffee", "no-bake"],
  },
  {
    id: "16",
    title: "Vegetable Stir Fry",
    description:
      "Quick and healthy stir-fried vegetables with a savory garlic ginger sauce.",
    image:
      "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=800&q=80",
    category: "Vegetarian",
    cuisine: "Asian",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "2 cups broccoli florets",
      "1 red bell pepper, sliced",
      "1 cup snap peas",
      "2 carrots, julienned",
      "3 tbsp soy sauce",
      "1 tbsp sesame oil",
      "2 cloves garlic, minced",
      "1 tbsp ginger, grated",
      "2 tbsp vegetable oil",
    ],
    instructions: [
      "Prep all vegetables before starting.",
      "Mix soy sauce and sesame oil for the sauce.",
      "Heat wok over high heat with vegetable oil.",
      "Add garlic and ginger, stir 30 seconds.",
      "Add carrots and broccoli, stir fry 2 minutes.",
      "Add bell pepper and snap peas, cook 2 more minutes.",
      "Pour in sauce and toss to coat.",
      "Serve immediately over steamed rice.",
    ],
    nutrition: {
      calories: 180,
      protein: "5g",
      carbs: "18g",
      fat: "10g",
    },
    tags: ["vegetarian", "healthy", "quick", "asian"],
  },
];

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}

export function getRecipesByCategory(category: string): Recipe[] {
  if (category === "All") return recipes;
  return recipes.filter((recipe) => recipe.category === category);
}

export function getRecipesByCuisine(cuisine: string): Recipe[] {
  if (cuisine === "All") return recipes;
  return recipes.filter((recipe) => recipe.cuisine === cuisine);
}

export function searchRecipes(query: string): Recipe[] {
  const lowercaseQuery = query.toLowerCase();
  return recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(lowercaseQuery) ||
      recipe.description.toLowerCase().includes(lowercaseQuery) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      recipe.ingredients.some((ing) =>
        ing.toLowerCase().includes(lowercaseQuery)
      )
  );
}
