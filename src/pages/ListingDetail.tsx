
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Heart, 
  Share, 
  Star, 
  MapPin, 
  Users, 
  Bed, 
  Bath, 
  Tv, 
  Wifi, 
  Utensils, 
  Car, 
  Check,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { getListingById } from '@/data/listings';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';

const amenities = [
  { name: "Free WiFi", icon: <Wifi className="h-5 w-5" /> },
  { name: "TV", icon: <Tv className="h-5 w-5" /> },
  { name: "Kitchen", icon: <Utensils className="h-5 w-5" /> },
  { name: "Parking", icon: <Car className="h-5 w-5" /> }
];

const ListingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const listing = getListingById(id || "");
  
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);

  if (!listing) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Listing not found</h1>
          <Button onClick={() => navigate('/listings')}>
            View all listings
          </Button>
        </div>
      </Layout>
    );
  }

  const handleBook = () => {
    if (!checkInDate || !checkOutDate) {
      toast({
        title: "Missing dates",
        description: "Please select check-in and check-out dates",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Booking request sent!",
      description: `Your stay at ${listing.title} has been requested.`,
    });
  };

  const dummyImages = [
    listing.imageUrl,
    "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200",
    "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&q=80&w=1200"
  ];
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Back button and actions */}
        <div className="flex justify-between items-center mb-6">
          <Button 
            variant="ghost" 
            className="glass-morphism" 
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="glass-morphism"
              onClick={() => {
                toast({
                  title: "Added to favorites",
                  description: `${listing.title} has been added to your favorites.`,
                });
              }}
            >
              <Heart className="h-4 w-4 mr-2" />
              Save
            </Button>
            
            <Button 
              variant="outline" 
              className="glass-morphism"
              onClick={() => {
                toast({
                  title: "Link copied",
                  description: "Listing link copied to clipboard.",
                });
              }}
            >
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
        
        {/* Title and rating */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-1" />
              <span className="font-medium">{listing.rating}</span>
              <span className="text-muted-foreground ml-1">({listing.reviewCount} reviews)</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>{listing.location}</span>
            </div>
            {listing.tags && listing.tags.map((tag, i) => (
              <React.Fragment key={tag}>
                <span className="text-muted-foreground">•</span>
                <Badge variant="outline" className="glass-morphism">
                  {tag}
                </Badge>
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
          <div 
            className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
            onClick={() => {
              setCurrentImage(0);
              setImageModalOpen(true);
            }}
          >
            <img 
              src={dummyImages[0]} 
              alt={listing.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {dummyImages.slice(1, 5).map((image, index) => (
              <div 
                key={index} 
                className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => {
                  setCurrentImage(index + 1);
                  setImageModalOpen(true);
                }}
              >
                <img 
                  src={image} 
                  alt={`${listing.title} - image ${index + 2}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Details */}
          <div className="lg:col-span-2">
            {/* Host and basic info */}
            <div className="glass-morphism rounded-xl p-6 mb-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-semibold mb-1">
                    Entire home hosted by John
                  </h2>
                  <div className="text-muted-foreground flex gap-4">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" /> 6 guests
                    </span>
                    <span className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" /> 3 bedrooms
                    </span>
                    <span className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" /> 2 baths
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Host" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <p>
                  Experience luxury and comfort in this stunning property. Perfect for family 
                  getaways or working remotely with high-speed internet and dedicated workspace.
                </p>
                <p>
                  Enjoy breathtaking views, premium amenities, and a prime location just minutes 
                  from local attractions, restaurants, and shopping.
                </p>
              </div>
            </div>
            
            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {amenities.map((amenity, index) => (
                  <div 
                    key={index} 
                    className="glass-morphism rounded-xl p-4 flex flex-col items-center text-center"
                  >
                    <div className="mb-2">{amenity.icon}</div>
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-y-2">
                {["Air conditioning", "Washing machine", "Pool", "Free parking", "Gym", "Workspace"].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Reviews summary */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                <h2 className="text-xl font-semibold">
                  {listing.rating} · {listing.reviewCount} reviews
                </h2>
              </div>
              
              <div className="glass-morphism rounded-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <img 
                      src="https://randomuser.me/api/portraits/women/44.jpg" 
                      alt="Reviewer" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium">Sarah</h4>
                      <p className="text-sm text-muted-foreground">May 2023</p>
                      <p className="mt-2">
                        Such a beautiful space! The views were amazing and the location was perfect. 
                        Would definitely stay again.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <img 
                      src="https://randomuser.me/api/portraits/men/67.jpg" 
                      alt="Reviewer" 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium">Michael</h4>
                      <p className="text-sm text-muted-foreground">June 2023</p>
                      <p className="mt-2">
                        Great amenities and very clean. Host was responsive and helpful throughout 
                        our stay. Highly recommend!
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button variant="outline" className="mt-6 w-full">
                  Show all {listing.reviewCount} reviews
                </Button>
              </div>
            </div>
            
            {/* Location */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <div className="aspect-video rounded-xl overflow-hidden glass-morphism p-1">
                <div className="w-full h-full bg-secondary/50 rounded-lg flex items-center justify-center">
                  <MapPin className="h-8 w-8 opacity-70" />
                  <span className="ml-2 text-muted-foreground">Map loading...</span>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground">
                {listing.location} - Great area with easy access to local attractions, 
                restaurants, and shopping.
              </p>
            </div>
          </div>
          
          {/* Right column - Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="glass-morphism rounded-xl p-6 mb-4">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-2xl font-bold">
                    ${listing.price} <span className="text-base font-normal text-muted-foreground">night</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-500 text-yellow-500 mr-1" />
                    <span>{listing.rating}</span>
                    <span className="text-muted-foreground ml-1">({listing.reviewCount})</span>
                  </div>
                </div>
                
                <div className="mb-4 glass-morphism rounded-lg overflow-hidden">
                  <div className="grid grid-cols-2">
                    <div className="p-3 border-r border-white/10">
                      <label className="text-xs font-medium">CHECK-IN</label>
                      <Input
                        type="date"
                        value={checkInDate}
                        onChange={(e) => setCheckInDate(e.target.value)}
                        className="border-0 bg-transparent p-0 h-6 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                    <div className="p-3">
                      <label className="text-xs font-medium">CHECKOUT</label>
                      <Input
                        type="date"
                        value={checkOutDate}
                        onChange={(e) => setCheckOutDate(e.target.value)}
                        className="border-0 bg-transparent p-0 h-6 focus-visible:ring-0 focus-visible:ring-offset-0"
                      />
                    </div>
                  </div>
                  <div className="p-3 border-t border-white/10">
                    <label className="text-xs font-medium">GUESTS</label>
                    <div className="flex items-center justify-between">
                      <Input
                        type="number"
                        min="1"
                        max="10"
                        value={guests}
                        onChange={(e) => setGuests(parseInt(e.target.value))}
                        className="border-0 bg-transparent p-0 h-6 focus-visible:ring-0 focus-visible:ring-offset-0 w-12"
                      />
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-7 w-7" 
                          onClick={() => setGuests(prev => Math.max(1, prev - 1))}
                          disabled={guests <= 1}
                        >
                          -
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-7 w-7" 
                          onClick={() => setGuests(prev => Math.min(10, prev + 1))}
                          disabled={guests >= 10}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full mb-4 gap-2" 
                  onClick={handleBook}
                >
                  <Calendar className="h-4 w-4" />
                  Reserve
                </Button>
                
                <div className="text-center text-sm text-muted-foreground">
                  You won't be charged yet
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between">
                    <span>${listing.price} x 5 nights</span>
                    <span>${listing.price * 5}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cleaning fee</span>
                    <span>$75</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>$125</span>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${(listing.price * 5) + 75 + 125}</span>
                  </div>
                </div>
              </div>
              
              <div className="dark-glass rounded-xl p-6 text-center">
                <span className="text-sm">
                  Report this listing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full image modal */}
      <Dialog open={imageModalOpen} onOpenChange={setImageModalOpen}>
        <DialogContent className="max-w-5xl bg-background/95 backdrop-blur-xl">
          <DialogHeader>
            <DialogTitle>{listing.title}</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <img 
              src={dummyImages[currentImage]} 
              alt={`${listing.title} - full view`} 
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {dummyImages.map((_, index) => (
                <button 
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImage ? 'bg-white' : 'bg-white/30'
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default ListingDetail;
