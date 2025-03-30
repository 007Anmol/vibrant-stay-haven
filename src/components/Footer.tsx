
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Twitter, Facebook, Instagram, Github } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-secondary/50 border-t border-white/10 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-md">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center">
                <Home className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-gradient">StayVibrant</span>
            </div>
            <p className="text-muted-foreground">
              Find the perfect place to stay with our premium selection of properties 
              around the world. Discover amazing experiences and create memories.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-accent/20 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-accent/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-accent/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-secondary hover:bg-accent/20 transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold mb-2">Explore</h3>
              <Link to="/listings" className="text-muted-foreground hover:text-accent transition-colors">
                All destinations
              </Link>
              <Link to="/cities" className="text-muted-foreground hover:text-accent transition-colors">
                Cities
              </Link>
              <Link to="/experiences" className="text-muted-foreground hover:text-accent transition-colors">
                Experiences
              </Link>
              <Link to="/beach" className="text-muted-foreground hover:text-accent transition-colors">
                Beach houses
              </Link>
            </div>
            
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold mb-2">Company</h3>
              <Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">
                About us
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">
                Contact
              </Link>
              <Link to="/careers" className="text-muted-foreground hover:text-accent transition-colors">
                Careers
              </Link>
              <Link to="/blog" className="text-muted-foreground hover:text-accent transition-colors">
                Blog
              </Link>
            </div>
            
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold mb-2">Support</h3>
              <Link to="/help" className="text-muted-foreground hover:text-accent transition-colors">
                Help center
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-accent transition-colors">
                Terms of service
              </Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
                Privacy policy
              </Link>
              <Link to="/trust" className="text-muted-foreground hover:text-accent transition-colors">
                Trust & safety
              </Link>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/10" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2023 StayVibrant. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Terms
            </Link>
            <Link to="/sitemap" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
