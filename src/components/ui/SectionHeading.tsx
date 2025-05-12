import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) => {
  const alignClass = centered ? 'text-center mx-auto' : '';
  const textColor = light ? 'text-white' : 'text-primary-900';
  const subtitleColor = light ? 'text-neutral-200' : 'text-neutral-600';

  return (
    <div className={`max-w-3xl mb-12 ${alignClass}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`section-title ${textColor}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`section-subtitle ${subtitleColor}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;