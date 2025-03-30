
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ListingCard from '@/components/ListingCard';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Search, 
  ChevronRight, 
  Bed, 
  Wifi, 
  Tv, 
  Utensils 
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { listings, getFeaturedListings } from '@/data/listings';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const featuredListings = getFeaturedListings();
  const popularListings = listings.slice(0, 8);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000')" 
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-filter backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4">
              Find your vibrant getaway
            </h1>
            <p className="text-xl mb-8 text-white/80">
              Discover unique stays to live, work, or relax - anywhere in the world
            </p>
            
            <div className="glass-morphism p-1 rounded-lg max-w-lg">
              <div className="flex items-center">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Where are you going?"
                    className="border-0 bg-transparent pl-10 focus-visible:ring-0 focus-visible:ring-offset-0"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Link to={`/listings?location=${searchQuery}`}>
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Why choose <span className="text-gradient-accent">StayVibrant</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-morphism p-6 rounded-xl text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/30 flex items-center justify-center">
              <Bed className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Unique stays</h3>
            <p className="text-muted-foreground">
              Find one-of-a-kind places to stay, from tree houses to luxury villas.
            </p>
          </div>
          
          <div className="glass-morphism p-6 rounded-xl text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/30 flex items-center justify-center">
              <Wifi className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Connected spaces</h3>
            <p className="text-muted-foreground">
              All our listings come with high-speed WiFi and modern amenities.
            </p>
          </div>
          
          <div className="glass-morphism p-6 rounded-xl text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/30 flex items-center justify-center">
              <Utensils className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Curated experiences</h3>
            <p className="text-muted-foreground">
              Enjoy local activities and dining experiences hand-picked by our team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">
              Featured getaways
            </h2>
            <Link to="/listings">
              <Button variant="ghost" className="group">
                View all 
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Listings */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Popular destinations
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {popularListings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/listings">
            <Button size="lg">
              Explore all listings
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=2000')" 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for your next adventure?
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Join thousands of travelers finding their perfect getaway with StayVibrant
            </p>
            <div className="flex gap-4">
              <Button size="lg">Sign up</Button>
              <Link to="/listings">
                <Button size="lg" variant="outline">
                  Browse listings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
