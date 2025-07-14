import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  currentSection?: string;
}

const Navigation = ({ currentSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/6f3c0c3c-ffad-41df-bd8b-3be9f0de6d68.png" 
              alt="JP Engineering Works Logo" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">JP Engineering Works</h1>
              <p className="text-xs text-muted-foreground -mt-1">Precision In Every Task</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`nav-link ${
                  currentSection === item.href.slice(1) ? 'text-primary' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('#contact')}
              className="btn-primary"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-t border-border">
            <div className="py-4 px-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 px-4 text-foreground hover:text-primary hover:bg-accent rounded-lg transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('#contact')}
                className="btn-primary w-full mt-4"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;