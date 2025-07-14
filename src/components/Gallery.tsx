import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentCategory, setCurrentCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'cnc', name: 'CNC Machining' },
    { id: 'fabrication', name: 'Fabrication' },
    { id: 'assembly', name: 'Assembly' },
    { id: 'facility', name: 'Our Facility' }
  ];

  const galleryItems = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80',
      title: 'Precision CNC Components',
      category: 'cnc',
      description: 'High-precision aluminum components machined to ±0.005mm tolerance'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80',
      title: 'Manufacturing Floor',
      category: 'facility',
      description: 'State-of-the-art manufacturing facility with modern CNC equipment'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80',
      title: 'Custom Steel Fabrication',
      category: 'fabrication',
      description: 'Heavy-duty steel fabrication for industrial applications'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250e8f8?auto=format&fit=crop&w=800&q=80',
      title: 'Quality Control Lab',
      category: 'facility',
      description: 'Advanced metrology and quality assurance laboratory'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      title: 'Automated Assembly Line',
      category: 'assembly',
      description: 'Robotic assembly systems for high-volume production'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
      title: 'Precision Aerospace Parts',
      category: 'cnc',
      description: 'Critical aerospace components with stringent quality requirements'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      title: 'Advanced Machining Center',
      category: 'facility',
      description: '5-axis CNC machining center for complex geometries'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=800&q=80',
      title: 'Welded Assemblies',
      category: 'fabrication',
      description: 'Complex welded assemblies for heavy machinery'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
      title: 'Medical Device Components',
      category: 'cnc',
      description: 'FDA-compliant medical device manufacturing'
    }
  ];

  const filteredItems = currentCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === currentCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = selectedImage;
    const maxIndex = filteredItems.length - 1;
    
    if (direction === 'prev') {
      setSelectedImage(currentIndex > 0 ? currentIndex - 1 : maxIndex);
    } else {
      setSelectedImage(currentIndex < maxIndex ? currentIndex + 1 : 0);
    }
  };

  return (
    <section id="gallery" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Project <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of precision manufacturing projects and get a glimpse 
            of our state-of-the-art facilities and capabilities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 fade-in">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={currentCategory === category.id ? "default" : "outline"}
              onClick={() => setCurrentCategory(category.id)}
              className={`px-6 py-2 ${
                currentCategory === category.id 
                  ? 'btn-primary' 
                  : 'hover:bg-primary/10 hover:border-primary hover:text-primary'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group cursor-pointer fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(index)}
            >
              <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:shadow-xl transition-all duration-500">
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Maximize className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Image */}
              <img 
                src={filteredItems[selectedImage]?.image}
                alt={filteredItems[selectedImage]?.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
                <h3 className="text-xl font-semibold mb-2">{filteredItems[selectedImage]?.title}</h3>
                <p className="text-gray-200">{filteredItems[selectedImage]?.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16 fade-in">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Want to See Your Project Here?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your manufacturing vision to life with 
            the same precision and quality showcased in our portfolio.
          </p>
          <Button 
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary px-8 py-3 text-lg"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;