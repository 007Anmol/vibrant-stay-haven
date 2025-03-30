
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Menu, 
  User, 
  Home, 
  Calendar, 
  Heart, 
  X,
  MapPin
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto py-4 px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center animate-pulse-glow">
              <Home className="text-white w-4 h-4" />
            </div>
            <span className="text-xl font-bold text-gradient">StayVibrant</span>
          </Link>

          {/* Desktop Search Bar */}
          {!isMobile && (
            <div className="hidden md:flex max-w-md w-full mx-4 glass-morphism rounded-full">
              <div className="flex w-full items-center px-4">
                <Input 
                  type="text"
                  placeholder="Where are you going?"
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button size="icon" variant="ghost" className="rounded-full bg-accent text-white hover:bg-accent/80">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Mobile Search Button */}
          {isMobile && !mobileSearchOpen && (
            <Button 
              variant="ghost" 
              className="px-3 glass-morphism"
              onClick={() => setMobileSearchOpen(true)}
            >
              <Search className="h-4 w-4 mr-2" />
              <span>Search</span>
            </Button>
          )}

          {/* Mobile Search Bar */}
          {isMobile && mobileSearchOpen && (
            <div className="absolute inset-x-0 top-0 bg-background pt-4 px-4 pb-4 animate-fade-in">
              <div className="flex items-center gap-2">
                <Button 
                  size="icon" 
                  variant="ghost" 
                  onClick={() => setMobileSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
                <div className="flex-1 glass-morphism rounded-full">
                  <div className="flex w-full items-center px-4">
                    <Input 
                      type="text"
                      placeholder="Search destinations"
                      className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Button size="icon" variant="ghost" className="rounded-full bg-accent text-white hover:bg-accent/80">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Nav Items */}
          <div className="flex items-center gap-2">
            <Link to="/favorites">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Heart className="h-[18px] w-[18px]" />
              </Button>
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="rounded-full flex gap-2 dark-glass">
                  <Menu className="h-[18px] w-[18px]" />
                  <User className="h-[18px] w-[18px]" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px] bg-secondary/80 backdrop-blur-md">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link to="/" className="flex items-center gap-2 p-2 hover:bg-accent/10 rounded-md transition-colors">
                    <Home className="w-5 h-5" /> 
                    <span>Home</span>
                  </Link>
                  <Link to="/listings" className="flex items-center gap-2 p-2 hover:bg-accent/10 rounded-md transition-colors">
                    <MapPin className="w-5 h-5" /> 
                    <span>Explore</span>
                  </Link>
                  <Link to="/favorites" className="flex items-center gap-2 p-2 hover:bg-accent/10 rounded-md transition-colors">
                    <Heart className="w-5 h-5" /> 
                    <span>Favorites</span>
                  </Link>
                  <Link to="/bookings" className="flex items-center gap-2 p-2 hover:bg-accent/10 rounded-md transition-colors">
                    <Calendar className="w-5 h-5" /> 
                    <span>Bookings</span>
                  </Link>
                  <div className="mt-auto pt-4 border-t border-white/10">
                    <Button className="w-full" variant="default">Sign In</Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
