
import { ListingProps } from "@/components/ListingCard";

// Mock data for listings
export const listings: ListingProps[] = [
  {
    id: "1",
    title: "Luxury Beachfront Villa with Pool",
    location: "Malibu, California",
    price: 350,
    rating: 4.9,
    reviewCount: 128,
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
    isFeatured: true,
    tags: ["Beachfront", "Pool"]
  },
  {
    id: "2",
    title: "Modern Downtown Loft",
    location: "New York, New York",
    price: 200,
    rating: 4.7,
    reviewCount: 98,
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200",
    tags: ["City view", "Modern"]
  },
  {
    id: "3",
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    price: 175,
    rating: 4.8,
    reviewCount: 74,
    imageUrl: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&q=80&w=1200",
    tags: ["Mountain view", "Fireplace"]
  },
  {
    id: "4",
    title: "Tropical Paradise Villa",
    location: "Kauai, Hawaii",
    price: 325,
    rating: 4.9,
    reviewCount: 112,
    imageUrl: "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?auto=format&fit=crop&q=80&w=1200",
    isFeatured: true,
    tags: ["Ocean view", "Private"]
  },
  {
    id: "5",
    title: "Rustic Farmhouse Retreat",
    location: "Tuscany, Italy",
    price: 150,
    rating: 4.6,
    reviewCount: 86,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    tags: ["Countryside", "Vineyard"]
  },
  {
    id: "6",
    title: "Urban Penthouse Apartment",
    location: "Chicago, Illinois",
    price: 280,
    rating: 4.7,
    reviewCount: 65,
    imageUrl: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&q=80&w=1200",
    tags: ["Skyline view", "Luxury"]
  },
  {
    id: "7",
    title: "Historic Downtown Brownstone",
    location: "Boston, Massachusetts",
    price: 225,
    rating: 4.5,
    reviewCount: 52,
    imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200",
    tags: ["Historic", "Central"]
  },
  {
    id: "8",
    title: "Lakefront Cottage",
    location: "Lake Tahoe, California",
    price: 195,
    rating: 4.8,
    reviewCount: 94,
    imageUrl: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200",
    tags: ["Lake view", "Peaceful"]
  },
  {
    id: "9",
    title: "Desert Oasis with Pool",
    location: "Scottsdale, Arizona",
    price: 210,
    rating: 4.6,
    reviewCount: 78,
    imageUrl: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=1200",
    tags: ["Pool", "Desert views"]
  },
  {
    id: "10",
    title: "Charming French Quarter Apartment",
    location: "New Orleans, Louisiana",
    price: 165,
    rating: 4.7,
    reviewCount: 63,
    imageUrl: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1200",
    tags: ["Historic", "Balcony"]
  },
  {
    id: "11",
    title: "Secluded Forest Treehouse",
    location: "Portland, Oregon",
    price: 145,
    rating: 4.9,
    reviewCount: 57,
    imageUrl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&q=80&w=1200",
    tags: ["Unique", "Nature"]
  },
  {
    id: "12",
    title: "Sleek High-Rise Condo",
    location: "Miami, Florida",
    price: 230,
    rating: 4.6,
    reviewCount: 84,
    imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1200",
    tags: ["Beach access", "Modern"]
  }
];

export const getListingById = (id: string) => {
  return listings.find(listing => listing.id === id);
};

export const getFeaturedListings = () => {
  return listings.filter(listing => listing.isFeatured);
};

export const filterListings = (
  priceMin: number = 0, 
  priceMax: number = 1000,
  location: string = '',
  tags: string[] = []
) => {
  return listings.filter(listing => {
    const matchesPrice = listing.price >= priceMin && listing.price <= priceMax;
    const matchesLocation = location ? listing.location.toLowerCase().includes(location.toLowerCase()) : true;
    const matchesTags = tags.length > 0 ? 
      tags.some(tag => listing.tags?.includes(tag)) : true;
    
    return matchesPrice && matchesLocation && matchesTags;
  });
};
