import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const team = [
  {
    name: 'David Omondi',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: `With over 15 years of experience in tourism, David founded SG Swake to share his passion for East Africa with the world.`,
  },
  {
    name: 'Amina Wanjiku',
    role: 'Head of Operations',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: `Amina ensures all our tours run smoothly, coordinating with local partners to create seamless experiences.`,
  },
  {
    name: 'Michael Rutahirwa',
    role: 'Senior Tour Guide',
    image: 'https://images.pexels.com/photos/7400263/pexels-photo-7400263.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: `An expert in East African wildlife and history, Michael has led tours across the region for over a decade.`,
  },
  {
    name: 'Sarah Nantongo',
    role: 'Client Relations Manager',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: `Sarah specializes in creating personalized itineraries tailored to each client's preferences and needs.`,
  },
];

const OurTeam = () => {
  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <SectionHeading
          title="Meet Our Team"
          subtitle="Our diverse team of experienced professionals is passionate about East Africa and dedicated to making your journey exceptional."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-primary-900">
                  {member.name}
                </h3>
                <p className="text-accent-600 font-medium mb-3">{member.role}</p>
                <p className="text-neutral-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;