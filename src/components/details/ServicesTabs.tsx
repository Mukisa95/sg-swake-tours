import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Users, Briefcase, Calendar, Home, Map } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const tabs = [
  {
    id: 'safari',
    label: 'Safari Tours',
    icon: <Compass className="mr-2" size={20} />,
    content: {
      title: 'Unforgettable Safari Experiences',
      description:
        `Experience the majesty of East African wildlife with our expertly guided safari tours. From the iconic plains of the Serengeti to the lush landscapes of Queen Elizabeth National Park, our safari packages offer unforgettable encounters with Africa's most magnificent creatures.`,
      features: [
        'Private and group safari options available',
        'Expert guides with extensive knowledge of local wildlife',
        'Luxury and mid-range accommodations in prime locations',
        'Customizable itineraries to match your interests',
        'Wildlife photography opportunities',
        'Sustainable tourism practices that support conservation',
      ],
      image:
        'https://images.pexels.com/photos/2498546/pexels-photo-2498546.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
  },
  {
    id: 'cultural',
    label: 'Cultural Tours',
    icon: <Users className="mr-2" size={20} />,
    content: {
      title: 'Immersive Cultural Experiences',
      description:
        `Immerse yourself in the rich cultural heritage of East Africa. Our cultural tours provide authentic interactions with local communities, from Maasai villages to urban centers, giving you a deeper understanding of the region's diverse cultures, traditions, and history.`,
      features: [
        'Guided visits to traditional villages and communities',
        'Interactive cultural workshops and activities',
        'Local cuisine experiences and cooking classes',
        'Historical site tours with knowledgeable guides',
        'Music and dance performances',
        'Opportunities to purchase authentic local crafts',
      ],
      image:
        'https://images.pexels.com/photos/933624/pexels-photo-933624.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
  },
  {
    id: 'business',
    label: 'Business Travel',
    icon: <Briefcase className="mr-2" size={20} />,
    content: {
      title: 'Comprehensive Business Travel Support',
      description:
        `Our business travel services cater to professionals visiting East Africa for work. We provide seamless logistical support, comfortable accommodations, and local expertise to ensure your business trip is productive and stress-free.`,
      features: [
        'Airport transfers and executive transportation',
        'Business-focused accommodation arrangements',
        'Meeting and conference venue selection assistance',
        'Interpreters and translators when needed',
        'Networking opportunities with local business contacts',
        'Post-business leisure activity planning',
      ],
      image:
        'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
  },
  {
    id: 'custom',
    label: 'Custom Tours',
    icon: <Calendar className="mr-2" size={20} />,
    content: {
      title: 'Personalized Tour Experiences',
      description:
        `Create your dream East African adventure with our custom tour packages. Whether you're interested in specific wildlife, particular regions, adventure activities, or special cultural experiences, we'll design a personalized itinerary that matches your preferences perfectly.`,
      features: [
        'One-on-one consultation with travel experts',
        'Flexible itinerary planning to match your interests',
        'Accommodation options across all budget ranges',
        'Special occasion arrangements (honeymoons, anniversaries, etc.)',
        'Family-friendly tour options',
        'Off-the-beaten-path experiences',
      ],
      image:
        'https://images.pexels.com/photos/5257587/pexels-photo-5257587.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
  },
  {
    id: 'accommodation',
    label: 'Accommodation',
    icon: <Home className="mr-2" size={20} />,
    content: {
      title: 'Premium Accommodation Options',
      description:
        `From luxury lodges nestled in the wilderness to boutique hotels in vibrant city centers, we offer a wide range of carefully selected accommodation options. Our partnerships with quality providers ensure comfortable, authentic stays that enhance your East African experience.`,
      features: [
        'Luxury safari lodges and tented camps',
        'Boutique hotels in prime urban locations',
        'Beach resorts along the East African coast',
        'Private villas and apartments for longer stays',
        'Eco-friendly and sustainable accommodation options',
        'All accommodations personally vetted for quality and service',
      ],
      image:
        'https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
  },
  {
    id: 'transport',
    label: 'Transportation',
    icon: <Map className="mr-2" size={20} />,
    content: {
      title: 'Reliable Transportation Services',
      description:
        `Navigate East Africa comfortably with our comprehensive transportation services. From airport transfers to safari vehicles and private drivers, we ensure safe, convenient travel throughout your journey in the region.`,
      features: [
        'Airport pickups and drop-offs',
        '4x4 safari vehicles with experienced drivers',
        'Executive cars for business travelers',
        'Group transportation options',
        'Inter-city and cross-border travel arrangements',
        'Domestic flight bookings and connections',
      ],
      image:
        'https://images.pexels.com/photos/7010265/pexels-photo-7010265.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
  },
];

const ServicesTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          title="Comprehensive Services"
          subtitle="From thrilling wildlife safaris to business travel support, discover the full range of services we offer to make your East African experience exceptional."
          centered
        />

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap md:flex-nowrap mb-8 border-b overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center whitespace-nowrap px-4 py-3 text-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-primary-700 border-b-2 border-primary-700'
                    : 'text-neutral-600 hover:text-primary-600'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary-900">
                  {currentTab?.content.title}
                </h3>
                <p className="text-neutral-700 mb-6">
                  {currentTab?.content.description}
                </p>
                <ul className="space-y-2">
                  {currentTab?.content.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center text-neutral-700"
                    >
                      <span className="mr-2 text-accent-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={currentTab?.content.image}
                  alt={currentTab?.content.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;