"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  User,
  Activity,
  Utensils,
  Heart,
  ShoppingBag,
  Clock,
  Wallet,
  Sparkles,
} from "lucide-react";

export interface UserInputs {
  age: string;
  lifestyle: string;
  foodPreference: string;
  mood: string;
  ingredients: string;
  cookingTime: string;
  budget: string;
}

interface UserInputFormProps {
  onSubmit: (inputs: UserInputs) => void;
  isLoading: boolean;
}

export function UserInputForm({ onSubmit, isLoading }: UserInputFormProps) {
  const [inputs, setInputs] = useState<UserInputs>({
    age: "",
    lifestyle: "",
    foodPreference: "",
    mood: "",
    ingredients: "",
    cookingTime: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputs);
  };

  const isFormValid =
    inputs.age &&
    inputs.lifestyle &&
    inputs.foodPreference &&
    inputs.mood &&
    inputs.cookingTime &&
    inputs.budget;

  return (
    <Card className="border-border/50 shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-xl text-foreground">
          <Sparkles className="h-5 w-5 text-primary" />
          Tell us about yourself
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          We&apos;ll create personalized meal recommendations just for you
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Age */}
            <div className="space-y-2">
              <Label
                htmlFor="age"
                className="flex items-center gap-2 text-foreground"
              >
                <User className="h-4 w-4 text-primary" />
                Age
              </Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter your age"
                value={inputs.age}
                onChange={(e) => setInputs({ ...inputs, age: e.target.value })}
                className="bg-background"
              />
            </div>

            {/* Lifestyle */}
            <div className="space-y-2">
              <Label
                htmlFor="lifestyle"
                className="flex items-center gap-2 text-foreground"
              >
                <Activity className="h-4 w-4 text-primary" />
                Lifestyle
              </Label>
              <Select
                value={inputs.lifestyle}
                onValueChange={(value) =>
                  setInputs({ ...inputs, lifestyle: value })
                }
              >
                <SelectTrigger id="lifestyle" className="bg-background">
                  <SelectValue placeholder="Select lifestyle" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student">Student</SelectItem>
                  <SelectItem value="working">Working Professional</SelectItem>
                  <SelectItem value="active">Active / Athletic</SelectItem>
                  <SelectItem value="homemaker">Homemaker</SelectItem>
                  <SelectItem value="retired">Retired</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Food Preference */}
            <div className="space-y-2">
              <Label
                htmlFor="food-preference"
                className="flex items-center gap-2 text-foreground"
              >
                <Utensils className="h-4 w-4 text-primary" />
                Food Preference
              </Label>
              <Select
                value={inputs.foodPreference}
                onValueChange={(value) =>
                  setInputs({ ...inputs, foodPreference: value })
                }
              >
                <SelectTrigger id="food-preference" className="bg-background">
                  <SelectValue placeholder="Select preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                  <SelectItem value="eggetarian">Eggetarian</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Mood */}
            <div className="space-y-2">
              <Label
                htmlFor="mood"
                className="flex items-center gap-2 text-foreground"
              >
                <Heart className="h-4 w-4 text-primary" />
                Current Mood
              </Label>
              <Select
                value={inputs.mood}
                onValueChange={(value) => setInputs({ ...inputs, mood: value })}
              >
                <SelectTrigger id="mood" className="bg-background">
                  <SelectValue placeholder="How are you feeling?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="happy">Happy</SelectItem>
                  <SelectItem value="tired">Tired</SelectItem>
                  <SelectItem value="stressed">Stressed</SelectItem>
                  <SelectItem value="hungry">Very Hungry</SelectItem>
                  <SelectItem value="relaxed">Relaxed</SelectItem>
                  <SelectItem value="energetic">Energetic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Cooking Time */}
            <div className="space-y-2">
              <Label
                htmlFor="cooking-time"
                className="flex items-center gap-2 text-foreground"
              >
                <Clock className="h-4 w-4 text-primary" />
                Cooking Time Available
              </Label>
              <Select
                value={inputs.cookingTime}
                onValueChange={(value) =>
                  setInputs({ ...inputs, cookingTime: value })
                }
              >
                <SelectTrigger id="cooking-time" className="bg-background">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes or less</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="45">45 minutes</SelectItem>
                  <SelectItem value="60">1 hour</SelectItem>
                  <SelectItem value="90">1.5 hours or more</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Budget */}
            <div className="space-y-2">
              <Label
                htmlFor="budget"
                className="flex items-center gap-2 text-foreground"
              >
                <Wallet className="h-4 w-4 text-primary" />
                Budget Level
              </Label>
              <Select
                value={inputs.budget}
                onValueChange={(value) =>
                  setInputs({ ...inputs, budget: value })
                }
              >
                <SelectTrigger id="budget" className="bg-background">
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low (Budget-friendly)</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High (Premium)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Available Ingredients */}
          <div className="space-y-2">
            <Label
              htmlFor="ingredients"
              className="flex items-center gap-2 text-foreground"
            >
              <ShoppingBag className="h-4 w-4 text-primary" />
              Available Ingredients (what&apos;s in your kitchen?)
            </Label>
            <Textarea
              id="ingredients"
              placeholder="E.g., rice, onions, tomatoes, potatoes, eggs, paneer, dal, wheat flour, milk..."
              value={inputs.ingredients}
              onChange={(e) =>
                setInputs({ ...inputs, ingredients: e.target.value })
              }
              className="min-h-[100px] bg-background"
            />
            <p className="text-xs text-muted-foreground">
              List the ingredients you have available, separated by commas
            </p>
          </div>

          <Button
            type="submit"
            disabled={!isFormValid || isLoading}
            className="w-full"
            size="lg"
          >
            {isLoading ? (
              <>
                <span className="animate-spin mr-2">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                </span>
                Creating Your Personalized Recommendations...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Get Personalized Meal Recommendations
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
