// ===== Jijau English Medium School — Type Definitions =====

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface Stat {
  icon: string;
  value: string;
  label: string;
}

export interface DirectorInfo {
  name: string;
  role: string;
  education: string;
  image: string;
  message: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface ValueProp {
  icon: string;
  title: string;
  description: string;
}

export interface AcademicGroup {
  id: string;
  title: string;
  ageRange: string;
  description: string;
  subjects: string[];
  activities: string[];
  approach: string;
}

export interface Facility {
  icon: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  span?: 'wide' | 'tall' | 'normal';
}

export interface Testimonial {
  id: number;
  quote: string;
  parentName: string;
  childGrade: string;
  avatarColor: string;
}

export interface AdmissionStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  schoolHours: string;
  mapEmbedUrl: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface FooterContent {
  tagline: string;
  copyright: string;
}

export interface EnquiryFormData {
  parentName: string;
  phone: string;
  email: string;
  childAge: string;
  gradeApplyingFor: string;
  message: string;
}
