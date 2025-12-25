import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const nearbyPlaces = [
    { name: "Bandara Supadio", distance: "15 menit" },
    { name: "Mall Transmart", distance: "10 menit" },
    { name: "RS Antonius", distance: "8 menit" },
    { name: "Sekolah Internasional", distance: "5 menit" },
  ];

  return (
    <section id="lokasi" className="py-24 lg:py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block w-12 h-px bg-gold mb-8" />
            <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl mb-6">
              Lokasi Strategis
            </h2>
            <p className="luxury-body text-base md:text-lg mb-8 max-w-lg">
              Terletak di kawasan premium Kota Pontianak dengan akses mudah ke
              berbagai fasilitas umum, pusat perbelanjaan, sekolah, dan rumah
              sakit terkemuka.
            </p>

            {/* Nearby Places */}
            <div className="space-y-4 mb-10">
              {nearbyPlaces.map((place, index) => (
                <motion.div
                  key={place.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center justify-between py-3 border-b border-border"
                >
                  <span className="font-sans text-charcoal">{place.name}</span>
                  <span className="font-sans text-sm text-gold tracking-wider">
                    {place.distance}
                  </span>
                </motion.div>
              ))}
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-charcoal font-sans text-sm tracking-widest uppercase group"
            >
              <span className="border-b border-charcoal pb-1 group-hover:border-gold group-hover:text-gold transition-colors duration-300">
                Lihat di Maps
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-muted rounded-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772082095!2d109.26539!3d-0.02123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d5987fd61ee53%3A0x88b38f3d04c3adac!2sPontianak%2C%20Pontianak%20City%2C%20West%20Kalimantan!5e0!3m2!1sen!2sid!4v1703000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Zaki Mansion"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-gold/30 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
