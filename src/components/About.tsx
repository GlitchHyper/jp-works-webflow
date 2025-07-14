import { CheckCircle, Target, Eye, TrendingUp, Calendar } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize precision manufacturing',
      icon: Calendar
    },
    {
      year: '2013',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2015 quality management certification',
      icon: CheckCircle
    },
    {
      year: '2016',
      title: 'Facility Expansion',
      description: 'Expanded operations with state-of-the-art CNC machinery',
      icon: TrendingUp
    },
    {
      year: '2019',
      title: 'Technology Upgrade',
      description: 'Implemented Industry 4.0 solutions and automation',
      icon: Target
    },
    {
      year: '2023',
      title: 'Market Leadership',
      description: 'Became a trusted partner for 200+ manufacturing companies',
      icon: Eye
    }
  ];

  const values = [
    {
      title: 'Quality Excellence',
      description: 'Uncompromising commitment to delivering superior quality products',
      icon: CheckCircle
    },
    {
      title: 'Innovation',
      description: 'Continuous improvement and adoption of cutting-edge technologies',
      icon: TrendingUp
    },
    {
      title: 'Customer Focus',
      description: 'Building long-term partnerships through exceptional service',
      icon: Target
    },
    {
      title: 'Integrity',
      description: 'Transparent, honest, and ethical business practices',
      icon: Eye
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-gradient">JP Engineering Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over a decade of excellence in precision manufacturing, we have established ourselves 
            as a trusted partner for businesses seeking quality, reliability, and innovation.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="card-professional slide-in-left">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver exceptional manufacturing solutions that exceed customer expectations 
                  through precision engineering, innovative technology, and unwavering commitment to quality. 
                  We strive to be the preferred manufacturing partner that drives our clients' success.
                </p>
              </div>
            </div>
          </div>

          <div className="card-professional slide-in-right">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as a global leader in precision manufacturing, setting industry 
                  standards for quality, innovation, and customer satisfaction. We envision a future 
                  where our expertise shapes the manufacturing landscape.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20 fade-in">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-professional text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="fade-in">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-0.5"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 z-10 border-4 border-background">
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                  }`}>
                    <div className="card-professional">
                      <div className={`flex items-center space-x-3 mb-3 ${
                        index % 2 === 0 ? 'md:flex-row-reverse md:space-x-reverse' : ''
                      }`}>
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <milestone.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-primary">{milestone.year}</div>
                      </div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;