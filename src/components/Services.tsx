import { 
  Cog, 
  Wrench, 
  Shield, 
  Truck, 
  Factory, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Cog,
      title: 'CNC Machining',
      description: 'Precision CNC machining services for complex components with tight tolerances',
      features: ['5-axis CNC capability', 'Aluminum & Steel machining', '±0.005mm precision', 'Prototype to production'],
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: Factory,
      title: 'Manufacturing Solutions',
      description: 'End-to-end manufacturing solutions from design to delivery',
      features: ['Design optimization', 'Process engineering', 'Quality control', 'Supply chain management'],
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: Wrench,
      title: 'Custom Fabrication',
      description: 'Specialized fabrication services for unique industrial applications',
      features: ['Welding & assembly', 'Sheet metal work', 'Custom tooling', 'Rapid prototyping'],
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Comprehensive quality control and testing services',
      features: ['ISO 9001:2015 certified', 'CMM inspection', 'Material testing', 'Documentation'],
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3250e8f8?auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: Zap,
      title: 'Automation Services',
      description: 'Industrial automation and process optimization solutions',
      features: ['Process automation', 'PLC programming', 'Sensor integration', 'Efficiency improvement'],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: Truck,
      title: 'Logistics Support',
      description: 'Complete logistics and supply chain management services',
      features: ['Just-in-time delivery', 'Inventory management', 'Global shipping', 'Tracking systems'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=500&q=80'
    }
  ];

  const industries = [
    'Automotive', 'Aerospace', 'Medical Devices', 'Energy', 'Electronics', 'Defense'
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive manufacturing solutions designed to meet your specific requirements 
            with precision, quality, and reliability at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card-professional group hover:shadow-xl overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Image */}
              <div className="h-48 overflow-hidden rounded-lg mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Service Icon & Title */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <Button 
                variant="outline" 
                onClick={scrollToContact}
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Industries Served */}
        <div className="text-center fade-in">
          <h3 className="text-3xl font-bold text-foreground mb-8">Industries We Serve</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-secondary rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                <span className="text-foreground font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center mt-16 fade-in">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our manufacturing expertise can bring your vision to life. 
            Get a free consultation and quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              className="btn-primary px-8 py-3 text-lg"
            >
              Get Free Quote
            </Button>
            <Button 
              variant="outline"
              onClick={scrollToContact}
              className="btn-secondary px-8 py-3 text-lg"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;