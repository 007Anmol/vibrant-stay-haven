
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Check, Sliders } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FilterProps {
  onFilterChange: (filters: {
    priceRange: [number, number];
    location: string;
    selectedTags: string[];
  }) => void;
}

const availableTags = [
  "Beachfront", 
  "Pool", 
  "Mountain view", 
  "City view", 
  "Lake view", 
  "Ocean view",
  "Historic", 
  "Modern", 
  "Luxury", 
  "Countryside", 
  "Unique", 
  "Peaceful"
];

const ListingFilters: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [location, setLocation] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const applyFilters = () => {
    onFilterChange({
      priceRange,
      location,
      selectedTags,
    });
    setIsOpen(false);
  };

  const clearFilters = () => {
    setPriceRange([0, 1000]);
    setLocation("");
    setSelectedTags([]);
    onFilterChange({
      priceRange: [0, 1000],
      location: "",
      selectedTags: [],
    });
  };

  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {selectedTags.map(tag => (
            <Badge key={tag} variant="secondary" className="glass-morphism">
              {tag}
              <button 
                className="ml-1 hover:text-accent" 
                onClick={() => toggleTag(tag)}
              >
                ×
              </button>
            </Badge>
          ))}
          {selectedTags.length > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs" 
              onClick={clearFilters}
            >
              Clear all
            </Button>
          )}
        </div>
        
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button 
              variant="outline" 
              className="dark-glass flex gap-2"
            >
              <Sliders className="h-4 w-4" />
              Filters
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 sm:w-[450px] bg-secondary/90 backdrop-blur-lg p-5 border border-white/10">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-4">Price range</h3>
                <div className="px-2">
                  <Slider 
                    defaultValue={[0, 1000]} 
                    max={1000} 
                    step={10}
                    value={[priceRange[0], priceRange[1]]}
                    onValueChange={handlePriceChange}
                    className="my-6"
                  />
                  <div className="flex items-center justify-between">
                    <div className="glass-morphism rounded-md px-3 py-1 text-sm">
                      ${priceRange[0]}
                    </div>
                    <div className="glass-morphism rounded-md px-3 py-1 text-sm">
                      ${priceRange[1]}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Label htmlFor="location" className="mb-4 block font-medium">
                  Location
                </Label>
                <Input
                  id="location"
                  placeholder="Any location"
                  value={location}
                  onChange={handleLocationChange}
                  className="bg-secondary border-white/10 focus:border-accent/50"
                />
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="amenities" className="border-white/10">
                  <AccordionTrigger className="py-2">Property features</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {availableTags.map(tag => (
                        <Button
                          key={tag}
                          type="button"
                          variant="outline"
                          className={`justify-start text-sm h-auto py-2 ${
                            selectedTags.includes(tag) 
                              ? 'bg-accent/20 border-accent' 
                              : 'bg-secondary/80 border-white/10'
                          }`}
                          onClick={() => toggleTag(tag)}
                        >
                          {selectedTags.includes(tag) && (
                            <Check className="mr-2 h-3 w-3" />
                          )}
                          {tag}
                        </Button>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="flex justify-between pt-2 border-t border-white/10">
                <Button variant="ghost" onClick={clearFilters}>
                  Clear all
                </Button>
                <Button onClick={applyFilters}>
                  Apply filters
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default ListingFilters;
