import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const faqs = [
  {
    question: 'How far in advance should I book my tour?',
    answer:
      'We recommend booking at least 3-6 months in advance, especially during peak seasons (June-October and December-February). For gorilla trekking permits or specific accommodations during high season, 6-12 months advance booking is advised.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept credit/debit cards (Visa, MasterCard, American Express), bank transfers, and PayPal. A deposit of 30% is required to confirm your booking, with the balance due 60 days before your arrival date.',
  },
  {
    question: 'Do I need a visa to visit East African countries?',
    answer:
      'Yes, most visitors require a visa to enter East African countries. Many countries now offer e-visas that can be obtained online before travel. The East Africa Tourist Visa allows entry to Kenya, Uganda, and Rwanda with a single visa. We can provide guidance on visa requirements based on your nationality.',
  },
  {
    question: 'What vaccinations do I need for East Africa?',
    answer:
      'Yellow fever vaccination is mandatory for most East African countries. Other recommended vaccinations include hepatitis A and B, typhoid, and tetanus. Malaria prophylaxis is also highly recommended. Please consult your doctor or travel clinic for personalized medical advice.',
  },
  {
    question: 'Is it safe to travel in East Africa?',
    answer:
      'East Africa is generally safe for tourists, especially when traveling with reputable tour companies. We prioritize your safety and only operate in secure areas. Our guides are experienced and knowledgeable about local conditions. As with travel anywhere, basic precautions and awareness are always recommended.',
  },
  {
    question: 'What should I pack for my East African trip?',
    answer:
      'Essential items include lightweight, neutral-colored clothing (for safaris), a hat, sunglasses, sunscreen, insect repellent, comfortable walking shoes, and a light jacket or sweater for evenings. Camera equipment, binoculars, and any necessary medications are also important. We provide a detailed packing list after booking.',
  },
  {
    question: 'Can you accommodate dietary restrictions?',
    answer:
      'Yes, we can accommodate most dietary requirements including vegetarian, vegan, gluten-free, and religious restrictions. Please inform us of any special dietary needs when booking so we can make appropriate arrangements with our accommodation partners.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Our standard cancellation policy provides a full refund (minus processing fees) for cancellations made more than 90 days before arrival. Cancellations made 60-90 days before arrival receive a 70% refund, 30-60 days receive a 50% refund, and less than 30 days are non-refundable. We strongly recommend comprehensive travel insurance to cover unforeseen circumstances.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about booking and traveling with SG Swake LTD in East Africa."
          centered
        />

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-4 flex justify-between items-center rounded-lg ${
                  openIndex === index
                    ? 'bg-primary-50 text-primary-900'
                    : 'bg-white hover:bg-neutral-100'
                }`}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-white border-t border-neutral-100">
                      <p className="text-neutral-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;