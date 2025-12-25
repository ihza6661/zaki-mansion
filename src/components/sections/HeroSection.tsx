import { motion } from "framer-motion";
import { SITE_CONTENT } from "@/data";

const HeroSection = () => {
  const { hero } = SITE_CONTENT;

  return (
    <section
      id="beranda"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Ken Burns Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-ken-burns">
          <img
            src={hero.image}
            alt={hero.imageAlt}
            className="h-full w-full object-cover"
          />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <span className="inline-block w-16 h-px bg-gold mb-8" />
            <p className="text-background/80 font-sans text-sm tracking-[0.3em] uppercase mb-4">
              {hero.location}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold text-background leading-tight mb-8"
          >
            {hero.headline}
            <br />
            <span className="text-gold-light">{hero.subheadline}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-sans text-background/80 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-12"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={hero.ctaPrimaryHref}
              className="luxury-button bg-gold text-background hover:bg-gold-light transition-all duration-300"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href={hero.ctaSecondaryHref}
              className="luxury-button border border-background/50 text-background hover:bg-background/10 transition-all duration-300"
            >
              {hero.ctaSecondary}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-background/60 text-xs font-sans tracking-widest uppercase">
            {hero.scrollText}
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-8 bg-background/40"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
