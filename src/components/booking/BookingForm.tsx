import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const tourTypes = [
  'Safari Adventure',
  'Cultural Experience',
  'Beach Holiday',
  'Mountain Trekking',
  'Gorilla Tracking',
  'Business Travel',
  'Custom Package',
];

const countries = [
  'Kenya',
  'Tanzania',
  'Uganda',
  'Rwanda',
  'Zanzibar',
  'Multiple Countries',
];

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    tourType: '',
    destination: '',
    groupSize: '',
    arrivalDate: '',
    departureDate: '',
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Log data for debugging
    console.log('Form submitted:', formData);

    try {
      // Use the FormData API to properly handle form submission for Netlify
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      // Show success message
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        tourType: '',
        destination: '',
        groupSize: '',
        arrivalDate: '',
        departureDate: '',
        specialRequests: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          title="Book Your Tour"
          subtitle="Fill out the form below and our team will get back to you within 24 hours to help plan your perfect trip."
          centered
        />

        <div className="max-w-4xl mx-auto">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 rounded-full p-2">
                  <Check size={32} className="text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                Thank You!
              </h3>
              <p className="text-green-700 mb-6">
                Your booking request has been successfully submitted. One of our
                travel experts will contact you shortly to discuss your trip
                details.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn bg-green-600 hover:bg-green-700 text-white"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="bg-neutral-50 rounded-lg p-8 shadow-md"
              data-netlify="true"
              name="booking-form"
            >
              {/* Hidden field for Netlify Form handling */}
              <input type="hidden" name="form-name" value="booking-form" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="tourType"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Tour Type*
                  </label>
                  <select
                    id="tourType"
                    name="tourType"
                    value={formData.tourType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="" disabled>
                      Select Tour Type
                    </option>
                    {tourTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Destination*
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="" disabled>
                      Select Destination
                    </option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="groupSize"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Group Size*
                  </label>
                  <input
                    type="number"
                    id="groupSize"
                    name="groupSize"
                    value={formData.groupSize}
                    onChange={handleChange}
                    min="1"
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="arrivalDate"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Arrival Date
                  </label>
                  <input
                    type="date"
                    id="arrivalDate"
                    name="arrivalDate"
                    value={formData.arrivalDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="departureDate"
                    className="block text-sm font-medium text-neutral-700 mb-1"
                  >
                    Departure Date
                  </label>
                  <input
                    type="date"
                    id="departureDate"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="specialRequests"
                  className="block text-sm font-medium text-neutral-700 mb-1"
                >
                  Special Requests or Additional Information
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Tell us about any special requirements, preferences, or questions you have..."
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary px-8 py-3">
                  Submit Booking Request
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;