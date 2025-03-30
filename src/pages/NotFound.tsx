
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const NotFound = () => {
  const location = useLocation();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="glass-morphism rounded-xl p-12 max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">404</h1>
          <div className="w-16 h-1 bg-accent mx-auto mb-6" />
          <h2 className="text-2xl font-semibold mb-4">Page not found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
            <br />
            <span className="text-sm opacity-60">{location.pathname}</span>
          </p>
          <Link to="/">
            <Button className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Return home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
