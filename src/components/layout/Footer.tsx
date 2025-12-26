import { PROPERTY_DETAILS, NAV_LINKS, CONTACT_CONFIG, SOCIAL_LINKS, SITE_CONTENT } from "@/data";
import type { NavLink, SocialLink } from "@/types";

const Footer = () => {
  const { footer } = SITE_CONTENT;

  const getSocialIcon = (platform: string) => {
    const icons = {
      instagram: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
      facebook: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z",
      whatsapp: "M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"
    };
    return icons[platform as keyof typeof icons] || icons.instagram;
  };

  return (
    <footer className="bg-dark-footer py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-background mb-4">
              {PROPERTY_DETAILS.name}
            </h3>
            <p className="font-sans text-sm font-light text-background/60 leading-relaxed mb-6">
              {footer.brandDescription}
            </p>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social: SocialLink) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="w-10 h-10 flex items-center justify-center border border-background/20 text-background/60 hover:text-gold hover:border-gold transition-colors duration-300"
                  aria-label={social.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={getSocialIcon(social.platform)} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-sm font-medium tracking-widest uppercase text-background mb-6">
              {footer.quickLinksTitle}
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link: NavLink) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm font-light text-background/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans text-sm font-medium tracking-widest uppercase text-background mb-6">
              {footer.contactTitle}
            </h4>
            <ul className="space-y-3">
              <li className="font-sans text-sm font-light text-background/60">
                {CONTACT_CONFIG.address}
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_CONFIG.phone}`}
                  className="font-sans text-sm font-light text-background/60 hover:text-gold transition-colors duration-300"
                >
                  {CONTACT_CONFIG.phoneFormatted}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="font-sans text-sm font-light text-background/60 hover:text-gold transition-colors duration-300"
                >
                  {CONTACT_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <p className="font-sans text-xs text-background/40 text-center">
            © {new Date().getFullYear()} {footer.copyrightText}

            <span className="block mt-1">Build By @ihza_baker</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
