import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import poolImage from "@/assets/amenity-pool.jpg";
import gardenImage from "@/assets/amenity-garden.jpg";
import securityImage from "@/assets/amenity-security.jpg";

const amenities = [
  {
    title: "Keamanan 24 Jam",
    subtitle: "CCTV & Security",
    image: securityImage,
    size: "tall",
  },
  {
    title: "Taman Hijau",
    subtitle: "Green Living",
    image: gardenImage,
    size: "wide",
  },
  {
    title: "Kolam Renang",
    subtitle: "Swimming Pool",
    image: poolImage,
    size: "tall",
  },
];

const AmenitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
  } | null>(null);

  return (
    <>
      <section id="fasilitas" className="py-24 lg:py-32 bg-cream">
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
              Fasilitas Premium
            </h2>
            <p className="luxury-body text-base md:text-lg max-w-2xl mx-auto">
              Nikmati berbagai fasilitas eksklusif yang dirancang untuk
              meningkatkan kualitas hidup Anda dan keluarga
            </p>
          </motion.div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className={`relative overflow-hidden group cursor-pointer ${
                  amenity.size === "tall"
                    ? "md:row-span-2 aspect-[3/4] md:aspect-auto"
                    : "aspect-[4/3]"
                }`}
                onClick={() =>
                  setSelectedImage({ image: amenity.image, title: amenity.title })
                }
              >
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                {/* Zoom Icon on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-background"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="text-gold text-xs font-sans tracking-[0.2em] uppercase mb-2 block">
                    {amenity.subtitle}
                  </span>
                  <h3 className="font-serif text-xl lg:text-2xl font-medium text-background">
                    {amenity.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
          >
            {[
              { icon: "🏠", label: "Cluster Eksklusif" },
              { icon: "🚗", label: "Akses Mudah" },
              { icon: "🌳", label: "Area Hijau" },
              { icon: "⚡", label: "Listrik Underground" },
            ].map((feature) => (
              <div key={feature.label} className="text-center">
                <span className="text-3xl mb-3 block">{feature.icon}</span>
                <span className="font-sans text-sm tracking-wider text-charcoal-soft">
                  {feature.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center text-background/80 hover:text-background transition-colors duration-300"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" strokeWidth={1.5} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/80 to-transparent">
                <h3 className="font-serif text-2xl font-medium text-background text-center">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AmenitiesSection;
