import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE_CONTENT } from "@/data";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { experience } = SITE_CONTENT;

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={experience.image}
                alt={experience.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-gold/30 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:pl-8"
          >
            <span className="inline-block w-12 h-px bg-gold mb-8" />
            <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              {experience.title}
              <br />
              {experience.titleContinued}
            </h2>
            {experience.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="luxury-body text-base md:text-lg mb-8 max-w-lg"
              >
                {paragraph}
              </p>
            ))}
            <a
              href={experience.ctaHref}
              className="inline-flex items-center gap-3 text-charcoal font-sans text-sm tracking-widest uppercase group"
            >
              <span className="border-b border-charcoal pb-1 group-hover:border-gold group-hover:text-gold transition-colors duration-300">
                {experience.ctaText}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
