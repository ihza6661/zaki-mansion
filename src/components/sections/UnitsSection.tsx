import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { UNITS, SITE_CONTENT } from "@/data";
import type { UnitType } from "@/types";

const UnitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { units } = SITE_CONTENT;

  return (
    <section id="unit" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
          ref={ref}
        >
          <span className="inline-block w-12 h-px bg-gold mb-8" />
          <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl mb-6">
            {units.title}
          </h2>
          <p className="luxury-body text-base md:text-lg max-w-2xl mx-auto">
            {units.description}
          </p>
        </motion.div>

        {/* Units Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {UNITS.map((unit: UnitType, index: number) => (
            <motion.div
              key={unit.type}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`group bg-background ${
                unit.featured ? "lg:-mt-4 lg:mb-4" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={unit.image}
                  alt={unit.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {unit.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-background text-xs font-sans tracking-wider uppercase px-4 py-2">
                      Terlaris
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-medium text-charcoal">
                  {unit.type}
                </h3>
                <div className="flex items-center gap-4 text-sm font-sans text-charcoal-soft">
                  <span>{unit.area}</span>
                  <span className="w-1 h-1 rounded-full bg-gold" />
                  <span>{unit.bedrooms}</span>
                </div>
                <div className="pt-4 border-t border-border">
                  <span className="font-serif text-lg text-gold">
                    {unit.price}
                  </span>
                </div>
                <a
                  href={units.ctaHref}
                  className="inline-flex items-center gap-2 text-charcoal font-sans text-sm tracking-wider uppercase mt-4 group/link"
                >
                  <span className="border-b border-transparent group-hover/link:border-charcoal transition-colors duration-300">
                    {units.ctaText}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform group-hover/link:translate-x-1"
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnitsSection;
