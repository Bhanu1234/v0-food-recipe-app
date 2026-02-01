"use client";

import { useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { UserInputForm, type UserInputs } from "./user-input-form";
import { AIResponseDisplay } from "./ai-response-display";
import { Button } from "@/components/ui/button";
import { RefreshCw, ChefHat } from "lucide-react";

export function FoodAssistant() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { messages, sendMessage, status, setMessages } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isLoading = status === "streaming" || status === "submitted";

  const handleFormSubmit = (inputs: UserInputs) => {
    const prompt = `Please provide personalized meal recommendations based on the following information:

**User Profile:**
- Age: ${inputs.age} years old
- Lifestyle: ${inputs.lifestyle}
- Food Preference: ${inputs.foodPreference}
- Current Mood: ${inputs.mood}
- Cooking Time Available: ${inputs.cookingTime} minutes
- Budget Level: ${inputs.budget}

**Available Ingredients:**
${inputs.ingredients || "Not specified - please suggest common Indian pantry items"}

Please provide:
1. Today's meal suggestions (breakfast, lunch, dinner)
2. At least 3 detailed Indian recipes with ingredients and step-by-step instructions
3. One healthy alternative meal
4. An explanation of why these recommendations match my mood and lifestyle
5. One recipe using leftover ingredients to reduce food waste`;

    sendMessage({ text: prompt });
    setHasSubmitted(true);
  };

  const handleReset = () => {
    setMessages([]);
    setHasSubmitted(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 rounded-full bg-primary/10">
            <ChefHat className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance">
          Smart Food Assistant
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
          Get personalized Indian meal recommendations based on your mood,
          lifestyle, available ingredients, and cooking time. Let AI help you
          decide what to cook today!
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {!hasSubmitted ? (
          <UserInputForm onSubmit={handleFormSubmit} isLoading={isLoading} />
        ) : (
          <>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">
                Your Personalized Recommendations
              </h2>
              <Button
                variant="outline"
                onClick={handleReset}
                disabled={isLoading}
                className="gap-2 bg-transparent"
              >
                <RefreshCw className="h-4 w-4" />
                Start Over
              </Button>
            </div>

            <AIResponseDisplay messages={messages} isLoading={isLoading} />
          </>
        )}
      </div>

      {/* Features Section */}
      {!hasSubmitted && (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 rounded-xl bg-card border border-border/50">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              Mood-Based Suggestions
            </h3>
            <p className="text-sm text-muted-foreground">
              Get food recommendations that match your current mood and energy
              levels
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card border border-border/50">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              Budget-Friendly
            </h3>
            <p className="text-sm text-muted-foreground">
              Recipes tailored to your budget with affordable Indian ingredients
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card border border-border/50">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              Reduce Food Waste
            </h3>
            <p className="text-sm text-muted-foreground">
              Use your leftover ingredients with smart recipe suggestions
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
