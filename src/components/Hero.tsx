import { ArrowRight, Play, Shield, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-manufacturing.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const textHighlightVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        delay: 1.5,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: [0.4, 0, 0.2, 1] }}
      >
        <img 
          src={heroImage} 
          alt="JP Engineering Manufacturing Facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/60"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
              variants={itemVariants}
            >
              <Shield className="w-4 h-4 mr-2" />
              Precision In Every Task - Since 2010
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Precision 
                <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent relative">
                  Engineering
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/60 rounded-full"
                    variants={textHighlightVariants}
                    initial="hidden"
                    animate="visible"
                  />
                </span>
                Excellence
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl text-blue-100 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              JP Engineering Works delivers world-class manufacturing solutions with cutting-edge technology, 
              uncompromising quality, and precision in every task we undertake.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={itemVariants}
            >
              <Button 
                onClick={() => scrollToSection('#services')}
                className="bg-white text-primary hover:bg-blue-50 px-8 py-3 text-lg font-semibold group transform transition-all duration-300 hover:scale-105"
              >
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => scrollToSection('#about')}
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold group backdrop-blur-sm transform transition-all duration-300 hover:scale-105"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Our Story
              </Button>
            </motion.div>

            {/* Key Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20"
              variants={containerVariants}
            >
              <motion.div className="text-center" variants={itemVariants}>
                <motion.div 
                  className="text-3xl font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2, type: "spring" as const, stiffness: 200, damping: 10 }}
                >
                  500+
                </motion.div>
                <div className="text-blue-200 text-sm">Projects Completed</div>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <motion.div 
                  className="text-3xl font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.2, type: "spring" as const, stiffness: 200, damping: 10 }}
                >
                  15+
                </motion.div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </motion.div>
              <motion.div className="text-center" variants={itemVariants}>
                <motion.div 
                  className="text-3xl font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 2.4, type: "spring" as const, stiffness: 200, damping: 10 }}
                >
                  100%
                </motion.div>
                <div className="text-blue-200 text-sm">Quality Assurance</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Feature Card 1 */}
              <motion.div 
                className="card-professional bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg">ISO Certified Quality</h3>
                    <p className="text-blue-100">International standards compliance</p>
                  </div>
                </div>
              </motion.div>

              {/* Feature Card 2 */}
              <motion.div 
                className="card-professional bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Users className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg">Expert Team</h3>
                    <p className="text-blue-100">Skilled engineers & technicians</p>
                  </div>
                </div>
              </motion.div>

              {/* Feature Card 3 */}
              <motion.div 
                className="card-professional bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Shield className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg">Advanced Technology</h3>
                    <p className="text-blue-100">State-of-the-art equipment</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.7, 1, 0.7]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: [0.4, 0, 0.6, 1] as const
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ height: [12, 6, 12] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] as const }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;