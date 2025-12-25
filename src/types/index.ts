/**
 * Type definitions for Zaki Mansion Elegance
 * 
 * This file contains all core TypeScript interfaces and types used throughout
 * the application for type safety and better developer experience.
 */

/**
 * Represents a property unit type with its specifications and pricing
 * 
 * @property type - The unit type identifier (e.g., "Type 36", "Type 54")
 * @property area - The land and building area in square meters (e.g., "36/72 m²")
 * @property bedrooms - Number of bedrooms in the unit (e.g., "2 Kamar Tidur")
 * @property price - Starting price of the unit in Indonesian Rupiah
 * @property image - URL or imported image path for the unit visualization
 * @property featured - Optional flag to highlight unit as featured/best-selling
 * @property alt - Accessibility text for the unit image
 */
export interface UnitType {
  type: string;
  area: string;
  bedrooms: string;
  price: string;
  image: string;
  featured?: boolean;
  alt: string;
}

/**
 * Represents an amenity or facility available in the property
 * 
 * @property title - The amenity name/title (e.g., "Kolam Renang", "Keamanan 24 Jam")
 * @property subtitle - Secondary descriptive text or English translation
 * @property image - URL or imported image path for the amenity visualization
 * @property size - Layout size variant for masonry grid display
 * @property alt - Accessibility text for the amenity image
 */
export interface AmenityType {
  title: string;
  subtitle: string;
  image: string;
  size: 'tall' | 'wide';
  alt: string;
}

/**
 * Represents a nearby place or point of interest
 * 
 * @property name - Name of the nearby location (e.g., "Bandara Supadio", "Mall Transmart")
 * @property distance - Travel time or distance from property (e.g., "15 menit", "2 km")
 */
export interface NearbyPlaceType {
  name: string;
  distance: string;
}

/**
 * Contact information for the property sales office
 * 
 * @property phone - Raw phone number (e.g., "+6281234567890")
 * @property phoneFormatted - Human-readable formatted phone number (e.g., "+62 812-3456-7890")
 * @property whatsappLink - Full WhatsApp URL with pre-filled message
 * @property email - Contact email address
 * @property address - Full physical address of the property or sales office
 */
export interface ContactInfo {
  phone: string;
  phoneFormatted: string;
  whatsappLink: string;
  email: string;
  address: string;
}

/**
 * Social media link configuration
 * 
 * @property platform - Name of the social media platform (e.g., "Instagram", "Facebook")
 * @property url - Full URL to the social media profile
 * @property ariaLabel - Accessibility label for screen readers
 */
export interface SocialLink {
  platform: string;
  url: string;
  ariaLabel: string;
}

/**
 * Navigation link configuration
 * 
 * @property label - Display text for the navigation link
 * @property href - URL or anchor link (e.g., "#beranda", "#unit")
 */
export interface NavLink {
  label: string;
  href: string;
}

/**
 * Overall property details and metadata
 * 
 * @property name - Official property name (e.g., "Zaki Mansion Elegance")
 * @property tagline - Marketing tagline or slogan
 * @property description - Detailed description of the property
 * @property location - City or area location (e.g., "Pontianak, Kalimantan Barat")
 * @property mapEmbedUrl - Google Maps embed URL for the property location
 */
export interface PropertyDetails {
  name: string;
  tagline: string;
  description: string;
  location: string;
  mapEmbedUrl: string;
}

/**
 * Trust badge or feature highlight
 * 
 * @property icon - React component (e.g., Lucide icon) or emoji string representing the badge
 * @property label - Descriptive text for the trust badge (e.g., "Cluster Eksklusif")
 */
export interface TrustBadge {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | string;
  label: string;
}
