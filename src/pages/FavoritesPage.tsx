
import React from 'react';
import Layout from '@/components/Layout';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>
        
        <div className="glass-morphism rounded-xl p-12 text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
            <Heart className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-xl font-semibold mb-2">No favorites yet</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Start saving your favorite places by clicking the heart icon on any listing.
          </p>
          <Link to="/listings">
            <Button>
              Browse listings
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default FavoritesPage;
