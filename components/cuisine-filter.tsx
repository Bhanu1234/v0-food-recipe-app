"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cuisines } from "@/lib/recipes";

interface CuisineFilterProps {
  selectedCuisine: string;
  onSelectCuisine: (cuisine: string) => void;
}

export function CuisineFilter({
  selectedCuisine,
  onSelectCuisine,
}: CuisineFilterProps) {
  return (
    <Select value={selectedCuisine} onValueChange={onSelectCuisine}>
      <SelectTrigger className="w-[180px] bg-card">
        <SelectValue placeholder="Select cuisine" />
      </SelectTrigger>
      <SelectContent>
        {cuisines.map((cuisine) => (
          <SelectItem key={cuisine} value={cuisine}>
            {cuisine === "All" ? "All Cuisines" : cuisine}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
