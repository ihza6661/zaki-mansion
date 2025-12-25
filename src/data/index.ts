/**
 * Centralized Data File for Zaki Mansion
 * 
 * This file contains ALL marketing content, contact information, and property details.
 * Update this file to change any text, prices, or contact info across the entire site.
 */

import type { 
  ContactInfo, 
  PropertyDetails, 
  NavLink, 
  SocialLink, 
  UnitType, 
  AmenityType, 
  NearbyPlaceType 
} from '@/types';

// Import assets
import unit36 from "@/assets/unit-type36.jpg";
import unit54 from "@/assets/unit-type54.jpg";
import unit72 from "@/assets/unit-type72.jpg";
import poolImage from "@/assets/amenity-pool.jpg";
import gardenImage from "@/assets/amenity-garden.jpg";
import securityImage from "@/assets/amenity-security.jpg";
import interiorImage from "@/assets/interior-living.jpg";
import heroImage from "@/assets/hero-mansion.webp";

// ===========================
// SITE CONFIGURATION
// ===========================

/**
 * Production site configuration
 * Update this when deploying to production or changing domains
 */
export const SITE_CONFIG = {
  url: "https://zaki-mansion.vercel.app",
  ogImagePath: "/og-image.jpg",
};

// ===========================
// CONTACT CONFIGURATION
// ===========================
export const CONTACT_CONFIG: ContactInfo = {
  phone: "+6281234567890",
  phoneFormatted: "+62 812-3456-7890",
  whatsappLink: "https://wa.me/+6281352265111",
  email: "info@zakimansion.com",
  address: "Jl. Contoh Alamat No. 123, Pontianak, Kalimantan Barat"
};

// ===========================
// PROPERTY DETAILS
// ===========================
export const PROPERTY_DETAILS: PropertyDetails = {
  name: "Zaki Mansion",
  tagline: "Luxury Living Redefined",
  description: "Temukan hunian premium dengan desain modern dan kenyamanan maksimal di Kota Pontianak",
  location: "Pontianak, Kalimantan Barat",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.75772082095!2d109.26539!3d-0.02123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d5987fd61ee53%3A0x88b38f3d04c3adac!2sPontianak%2C%20Pontianak%20City%2C%20West%20Kalimantan!5e0!3m2!1sen!2sid!4v1703000000000!5m2!1sen!2sid"
};

// ===========================
// NAVIGATION
// ===========================
export const NAV_LINKS: NavLink[] = [
  { label: "Beranda", href: "#beranda" },
  { label: "Fasilitas", href: "#fasilitas" },
  { label: "Unit", href: "#unit" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "Kontak", href: "#kontak" },
];

// ===========================
// SOCIAL MEDIA
// ===========================
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "instagram",
    url: "https://www.instagram.com/zakimansion",
    ariaLabel: "Instagram Zaki Mansion"
  },
  {
    platform: "facebook",
    url: "#",
    ariaLabel: "Facebook Zaki Mansion"
  }
];

// ===========================
// SITE CONTENT BY SECTION
// ===========================

export const SITE_CONTENT = {
  hero: {
    headline: "Luxury Living",
    subheadline: "Redefined",
    description: PROPERTY_DETAILS.description,
    location: PROPERTY_DETAILS.location,
    ctaPrimary: "Lihat Unit",
    ctaPrimaryHref: "#unit",
    ctaSecondary: "Hubungi Kami",
    ctaSecondaryHref: "#kontak",
    scrollText: "Scroll",
    image: heroImage,
    imageAlt: "Zaki Mansion - Hunian mewah dengan arsitektur modern di Kota Pontianak, menampilkan fasad elegan dan landscape premium"
  },

  experience: {
    title: "Desain Modern &",
    titleContinued: "Kenyamanan Premium",
    paragraphs: [
      "Zaki Mansion menghadirkan konsep hunian modern yang memadukan keeleganan arsitektur kontemporer dengan kenyamanan hidup maksimal. Setiap detail dirancang dengan cermat untuk memberikan pengalaman tinggal yang tak terlupakan.",
      "Nikmati ruang hidup yang luas dengan pencahayaan alami yang optimal, material premium berkualitas tinggi, dan tata letak yang fungsional untuk memenuhi kebutuhan keluarga modern."
    ],
    ctaText: "Jelajahi Unit",
    ctaHref: "#unit",
    image: interiorImage,
    imageAlt: "Interior mewah Zaki Mansion dengan ruang tamu luas, pencahayaan alami optimal, dan desain minimalis kontemporer menggunakan material premium"
  },

  amenities: {
    title: "Fasilitas Premium",
    description: "Nikmati berbagai fasilitas eksklusif yang dirancang untuk meningkatkan kualitas hidup Anda dan keluarga",
    additionalFeatures: [
      { icon: "🏠", label: "Cluster Eksklusif" },
      { icon: "🚗", label: "Akses Mudah" },
      { icon: "🌳", label: "Area Hijau" },
      { icon: "⚡", label: "Listrik Underground" }
    ]
  },

  units: {
    title: "Pilihan Unit",
    description: "Berbagai pilihan tipe rumah yang dapat disesuaikan dengan kebutuhan dan gaya hidup keluarga Anda",
    ctaText: "Lihat Detail",
    ctaHref: "#kontak"
  },

  location: {
    title: "Lokasi Strategis",
    description: "Terletak di kawasan premium Kota Pontianak dengan akses mudah ke berbagai fasilitas umum, pusat perbelanjaan, sekolah, dan rumah sakit terkemuka.",
    ctaText: "Lihat di Maps",
    mapsUrl: "https://maps.google.com"
  },

  contact: {
    title: "Wujudkan Hunian Impian Anda",
    description: "Hubungi tim sales kami untuk informasi lebih lanjut, jadwal kunjungan ke lokasi, atau konsultasi mengenai unit yang sesuai dengan kebutuhan Anda.",
    ctaWhatsapp: "WhatsApp",
    ctaPhone: CONTACT_CONFIG.phoneFormatted,
    trustBadges: [
      { icon: "shield", label: "Developer Terpercaya" },
      { icon: "document", label: "Legalitas Lengkap" },
      { icon: "currency", label: "KPR Dibantu" }
    ]
  },

  kpr: {
    title: "Simulasi KPR",
    description: "Hitung estimasi cicilan bulanan Anda dengan kalkulator KPR kami",
    labels: {
      housePrice: "Harga Rumah",
      downPayment: "Uang Muka (DP)",
      interestRate: "Bunga Tahunan",
      tenure: "Jangka Waktu",
      monthlyPayment: "Estimasi Cicilan per Bulan",
      loanAmount: "Pinjaman",
      totalPayment: "Total Pembayaran"
    },
    tenorOptions: [10, 15, 20],
    defaultValues: {
      housePrice: 190000000,
      dpPercent: 20,
      interestRate: 5,
      tenor: 15
    },
    ctaText: "Ajukan KPR",
    ctaHref: "#kontak",
    disclaimer: "*Perhitungan ini hanya estimasi. Cicilan aktual dapat berbeda tergantung kebijakan bank dan kondisi kredit Anda."
  },

  footer: {
    brandDescription: "Hunian premium dengan desain modern dan kenyamanan maksimal di jantung Kota Pontianak.",
    quickLinksTitle: "Menu",
    contactTitle: "Kontak",
    copyrightText: "Zaki Mansion. All rights reserved."
  }
};

// ===========================
// UNITS DATA
// ===========================
export const UNITS: UnitType[] = [
  {
    type: "Type 36",
    area: "36/72 m²",
    bedrooms: "2 Kamar Tidur",
    price: "Mulai Rp 650 Juta",
    image: unit36,
    alt: "Rumah Type 36 Zaki Mansion - 2 kamar tidur dengan luas 36/72 m², desain modern minimalis dengan ruang tamu luas dan dapur fungsional",
    featured: false
  },
  {
    type: "Type 54",
    area: "54/105 m²",
    bedrooms: "3 Kamar Tidur",
    price: "Mulai Rp 950 Juta",
    image: unit54,
    alt: "Rumah Type 54 Zaki Mansion - 3 kamar tidur dengan luas 54/105 m², unit terlaris dengan ruang keluarga luas dan taman belakang",
    featured: true
  },
  {
    type: "Type 72",
    area: "72/150 m²",
    bedrooms: "4 Kamar Tidur",
    price: "Mulai Rp 1.5 Miliar",
    image: unit72,
    alt: "Rumah Type 72 Zaki Mansion - 4 kamar tidur dengan luas 72/150 m², hunian premium dengan kamar tidur master suite dan ruang kerja",
    featured: false
  }
];

// ===========================
// AMENITIES DATA
// ===========================
export const AMENITIES: AmenityType[] = [
  {
    title: "Keamanan 24 Jam",
    subtitle: "CCTV & Security",
    image: securityImage,
    size: "tall",
    alt: "Sistem keamanan 24 jam Zaki Mansion dengan CCTV dan petugas keamanan profesional untuk ketenangan keluarga Anda"
  },
  {
    title: "Taman Hijau",
    subtitle: "Green Living",
    image: gardenImage,
    size: "wide",
    alt: "Taman hijau asri Zaki Mansion dengan landscape indah, area bermain anak, dan jogging track untuk gaya hidup sehat"
  },
  {
    title: "Kolam Renang",
    subtitle: "Swimming Pool",
    image: poolImage,
    size: "tall",
    alt: "Kolam renang eksklusif Zaki Mansion dengan area kolam dewasa dan anak, dilengkapi fasilitas gazebo untuk bersantai"
  }
];

// ===========================
// LOCATION DATA
// ===========================
export const NEARBY_PLACES: NearbyPlaceType[] = [
  { name: "Bandara Supadio", distance: "15 menit" },
  { name: "Mall Transmart", distance: "10 menit" },
  { name: "RS Antonius", distance: "8 menit" },
  { name: "Sekolah Internasional", distance: "5 menit" }
];
