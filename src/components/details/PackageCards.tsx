import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';

const packages = [
  {
    id: 1,
    title: 'Classic East African Safari',
    description:
      `Experience the best wildlife viewing across Kenya and Tanzania, including the Maasai Mara and Serengeti.`,
    image:
      'https://images.pexels.com/photos/38295/wildlife-animals-zebras-africa-38295.jpeg?auto=compress&cs=tinysrgb&w=1600',
    duration: '10 days',
    price: '$2,899',
    highlights: [
      'Big Five wildlife viewing',
      'Great Migration (seasonal)',
      'Luxury lodge and tented camp accommodation',
      'Professional safari guides',
      'All meals and park fees included',
    ],
  },
  {
    id: 2,
    title: 'Mountain Gorilla Trek',
    description:
      `Trek through Uganda's Bwindi Impenetrable Forest to encounter endangered mountain gorillas in their natural habitat.`,
    image:
      'https://images.pexels.com/photos/2915263/pexels-photo-2915263.jpeg?auto=compress&cs=tinysrgb&w=1600',
    duration: '6 days',
    price: '$3,499',
    highlights: [
      'Gorilla trekking permit included',
      'Experienced local trackers',
      'Forest lodge accommodation',
      'Cultural village visits',
      'Chimpanzee tracking option',
    ],
  },
  {
    id: 3,
    title: 'Cultural Immersion Experience',
    description:
      `Immerse yourself in the rich cultures of East Africa, from Maasai villages to urban centers and historical sites.`,
    image:
      'https://images.pexels.com/photos/3522880/pexels-photo-3522880.jpeg?auto=compress&cs=tinysrgb&w=1600',
    duration: '8 days',
    price: '$1,999',
    highlights: [
      'Traditional community visits',
      'Cultural workshops and activities',
      'Local cuisine experiences',
      'Historical site tours',
      'Authentic craft shopping',
    ],
  },
  {
    id: 4,
    title: 'Beach & Safari Combo',
    description:
      `Combine thrilling wildlife viewing with relaxation on the pristine beaches of Zanzibar for the perfect balanced vacation.`,
    image:
      'https://images.pexels.com/photos/1006775/pexels-photo-1006775.jpeg?auto=compress&cs=tinysrgb&w=1600',
    duration: '12 days',
    price: '$3,299',
    highlights: [
      `Safari in Tanzania's northern circuit`,
      'Luxury beach resort stay',
      'Snorkeling and water activities',
      'Spice tour in Zanzibar',
      'Stone Town historical tour',
    ],
  },
  {
    id: 5,
    title: 'Business Travel Package',
    description:
      `Complete support for business travelers to East Africa, ensuring productive and comfortable business trips.`,
    image:
      'https://images.pexels.com/photos/1305657/pexels-photo-1305657.jpeg?auto=compress&cs=tinysrgb&w=1600',
    duration: 'Flexible',
    price: 'Custom',
    highlights: [
      'Airport transfers and executive transport',
      'Business-class accommodation',
      'Meeting venue arrangements',
      'Interpreter services (optional)',
      'Post-business leisure activities',
    ],
  },
  {
    id: 6,
    title: 'Luxury Photographic Safari',
    description:
      `Specifically designed for photography enthusiasts, this safari ensures optimal wildlife viewing and photographic opportunities.`,
    image:
      'https://images.pexels.com/photos/19570518/pexels-photo-19570518/free-photo-of-a-camera-on-a-tripod-in-the-wild.jpeg?auto=compress&cs=tinysrgb&w=1600',
    duration: '9 days',
    price: '$4,199',
    highlights: [
      'Professional photography guide',
      'Specially designed vehicles',
      'Extra luggage allowance for equipment',
      'Prime wildlife locations',
      'Small group size (max 6)',
    ],
  },
];

const PackageCards = () => {
  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <SectionHeading
          title="Featured Tour Packages"
          subtitle="Browse our most popular tour packages, each offering unique experiences across East Africa's most spectacular destinations."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={pkg.id} delay={index * 0.1} className="flex flex-col h-full">
              <div className="h-60 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-primary-900">
                    {pkg.title}
                  </h3>
                  <div className="flex flex-col items-end">
                    <span className="text-accent-600 font-semibold">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-neutral-500">
                      {pkg.duration}
                    </span>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4">{pkg.description}</p>
                <div className="mt-auto">
                  <h4 className="font-semibold mb-2 text-primary-800">
                    Highlights:
                  </h4>
                  <ul className="text-sm text-neutral-600 mb-6">
                    {pkg.highlights.map((highlight, i) => (
                      <li key={i} className="mb-1 flex items-start">
                        <span className="text-accent-500 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/booking"
                    className="w-full block text-center btn btn-primary"
                  >
                    Book This Tour
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageCards;