import { Compass, Home, Calendar, Map } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const services = [
  {
    icon: <Compass size={40} className="text-primary-600" />,
    title: 'Guided Tours',
    description:
      `Expert-led tours of East Africa's most breathtaking destinations, from wildlife safaris to cultural experiences.`,
  },
  {
    icon: <Home size={40} className="text-primary-600" />,
    title: 'Premium Accommodation',
    description:
      `Handpicked luxury lodges, hotels and private villas ensuring comfort and authentic experiences throughout your stay.`,
  },
  {
    icon: <Calendar size={40} className="text-primary-600" />,
    title: 'Customized Itineraries',
    description:
      `Personalized travel plans tailored to your interests, timeframe, and budget for a perfect East African adventure.`,
  },
  {
    icon: <Map size={40} className="text-primary-600" />,
    title: 'Business Travel Support',
    description:
      `Comprehensive assistance for business travelers including transportation, accommodation and local expertise.`,
  },
];

const FeaturedServices = () => {
  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <SectionHeading
          title="Our Premium Services"
          subtitle="Experience the best of East Africa with our comprehensive tour and hosting services designed to create unforgettable memories."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;