
import React from 'react';
import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

export interface ListingProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  isFeatured?: boolean;
  tags?: string[];
}

const ListingCard: React.FC<ListingProps> = ({
  id,
  title,
  location,
  price,
  rating,
  reviewCount,
  imageUrl,
  isFeatured,
  tags
}) => {
  return (
    <div className={`group rounded-xl overflow-hidden ${isFeatured ? 'vibrant-glow' : ''} transition-all duration-300 hover:transform hover:translate-y-[-4px]`}>
      <Link to={`/listing/${id}`} className="block">
        <div className="relative">
          <AspectRatio ratio={4/3}>
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          </AspectRatio>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <Button 
            size="icon" 
            variant="ghost" 
            className="absolute top-2 right-2 rounded-full bg-black/30 backdrop-blur-sm hover:bg-black/50 border border-white/10"
          >
            <Heart className="h-4 w-4 text-white" />
          </Button>

          {isFeatured && (
            <Badge className="absolute top-2 left-2 bg-accent/80 backdrop-blur-sm text-white">
              Featured
            </Badge>
          )}

          {tags && tags.length > 0 && (
            <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-black/50 backdrop-blur-sm text-white text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
        
        <div className="p-3">
          <div className="flex justify-between items-start">
            <h3 className="font-medium truncate flex-1">{title}</h3>
            <div className="flex items-center gap-1 text-xs">
              <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
              <span>{rating}</span>
              <span className="text-muted-foreground">({reviewCount})</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm">{location}</p>
          <p className="mt-2 font-semibold">
            ${price} <span className="text-muted-foreground font-normal text-sm">/ night</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
