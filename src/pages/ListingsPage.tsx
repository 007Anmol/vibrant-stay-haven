
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import ListingCard from '@/components/ListingCard';
import ListingFilters from '@/components/ListingFilters';
import { filterListings } from '@/data/listings';
import { ListingProps } from '@/components/ListingCard';

const ListingsPage = () => {
  const [searchParams] = useSearchParams();
  const locationParam = searchParams.get('location') || '';

  const [filteredListings, setFilteredListings] = useState<ListingProps[]>([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 1000] as [number, number],
    location: locationParam,
    selectedTags: [] as string[],
  });

  useEffect(() => {
    if (locationParam) {
      setFilters(prev => ({ ...prev, location: locationParam }));
    }
  }, [locationParam]);

  useEffect(() => {
    const listings = filterListings(
      filters.priceRange[0],
      filters.priceRange[1],
      filters.location,
      filters.selectedTags
    );
    setFilteredListings(listings);
  }, [filters]);

  const handleFilterChange = (newFilters: {
    priceRange: [number, number];
    location: string;
    selectedTags: string[];
  }) => {
    setFilters(newFilters);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            {filters.location 
              ? `Stays in ${filters.location}` 
              : "All Listings"}
          </h1>
          <p className="text-muted-foreground">
            {filteredListings.length} properties found
            {filters.location && ` in ${filters.location}`}
          </p>
        </div>

        <ListingFilters onFilterChange={handleFilterChange} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
          
          {filteredListings.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <h3 className="text-xl font-semibold mb-2">No listings found</h3>
              <p className="text-muted-foreground">
                Try adjusting your filters or search criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ListingsPage;
