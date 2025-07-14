import { ArrowRight, Play, Shield, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-manufacturing.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="JP Engineering Manufacturing Facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Trusted Manufacturing Partner Since 2010
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Precision 
              <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Engineering
              </span>
              Excellence
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              JP Engineering Works delivers world-class manufacturing solutions with cutting-edge technology, 
              uncompromising quality, and decades of expertise in precision engineering.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={() => scrollToSection('#services')}
                className="bg-white text-primary hover:bg-blue-50 px-8 py-3 text-lg font-semibold group"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => scrollToSection('#about')}
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold group backdrop-blur-sm"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Our Story
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center fade-in-delay">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-200 text-sm">Projects Completed</div>
              </div>
              <div className="text-center fade-in-delay">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
              <div className="text-center fade-in-delay">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-blue-200 text-sm">Quality Assurance</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="hidden lg:block slide-in-right">
            <div className="space-y-6">
              {/* Feature Card 1 */}
              <div className="card-professional bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">ISO Certified Quality</h3>
                    <p className="text-blue-100">International standards compliance</p>
                  </div>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="card-professional bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expert Team</h3>
                    <p className="text-blue-100">Skilled engineers & technicians</p>
                  </div>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="card-professional bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Advanced Technology</h3>
                    <p className="text-blue-100">State-of-the-art equipment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;