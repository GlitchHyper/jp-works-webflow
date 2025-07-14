import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'CNC Machining',
    'Custom Fabrication',
    'Quality Assurance',
    'Manufacturing Solutions',
    'Automation Services',
    'Logistics Support'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-white relative">
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 w-12 h-12 rounded-full bg-primary hover:bg-primary-dark shadow-lg"
        size="sm"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>

      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="pt-16 pb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Information */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/6f3c0c3c-ffad-41df-bd8b-3be9f0de6d68.png" 
                  alt="JP Engineering Works Logo" 
                  className="h-10 w-auto"
                />
                <div>
                  <h3 className="text-xl font-bold">JP Engineering Works</h3>
                  <p className="text-sm text-gray-300 -mt-1">Precision In Every Task</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Leading precision manufacturing company delivering exceptional quality, 
                innovation, and precision in every task for over a decade.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-105 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-300 hover:text-primary transition-colors duration-200 cursor-default">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div className="text-gray-300">
                    <p>123 Industrial Area</p>
                    <p>Manufacturing Hub</p>
                    <p>Mumbai, Maharashtra 400001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:+919876543210" className="text-gray-300 hover:text-primary transition-colors">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="mailto:info@jpengineeringworks.com" className="text-gray-300 hover:text-primary transition-colors">
                    info@jpengineeringworks.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 JP Engineering Works. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                Quality Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;