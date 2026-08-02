// ===== Jijau English Medium School — Content Data =====
// This file is the SINGLE SOURCE OF TRUTH for all editable content.
// School administrators: search for [EDIT ME] to find values to update.

import type {
  NavLink,
  HeroContent,
  Stat,
  FeatureCard,
  DirectorInfo,
  ValueProp,
  AcademicGroup,
  Facility,
  GalleryImage,
  Testimonial,
  AdmissionStep,
  ContactInfo,
  SocialLink,
  FooterContent,
} from '../types';

// ─── Navigation ─────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Contact', href: '#contact' },
];

// ─── Hero Section ────────────────────────────────────────
export const heroContent: HeroContent = {
  headline: "Where Every Child's Journey Begins with Joy & Excellence",
  subheadline:
    'Jijau English Medium School nurtures young minds through quality English-medium education, holistic development, and a safe, joyful learning environment.',
  ctaPrimary: 'Book a Campus Visit',
  ctaSecondary: 'Download Brochure',
};

// [EDIT ME] Replace with real school statistics
export const heroStats: Stat[] = [
  { icon: 'Users', value: '500+', label: 'Happy Students' },
  { icon: 'Clock', value: '15+', label: 'Years of Excellence' },
  { icon: 'Award', value: '50+', label: 'Qualified Teachers' },
  { icon: 'BookOpen', value: 'CBSE', label: 'Board Affiliated' },
];

// ─── About Section ───────────────────────────────────────
export const aboutMission =
  'At Jijau English Medium School, we believe every child is unique and capable of extraordinary achievements. Founded with the vision of providing accessible, high-quality English-medium education, we combine academic excellence with character building to create confident, compassionate young learners.';

export const aboutVision =
  'To be a nurturing educational institution that empowers every child with knowledge, values, and the confidence to shape a brighter future.';

export const aboutFeatures: FeatureCard[] = [
  {
    icon: 'BookOpen',
    title: 'English Medium Curriculum',
    description:
      'Comprehensive English-medium education following the latest curriculum guidelines, preparing students for a global future.',
  },
  {
    icon: 'Shield',
    title: 'Safe & Nurturing Campus',
    description:
      'A secure, CCTV-monitored campus designed specifically for young learners with trained safety staff at all times.',
  },
  {
    icon: 'GraduationCap',
    title: 'Experienced Teachers',
    description:
      'Dedicated and qualified educators who bring passion, patience, and innovative teaching methods to every classroom.',
  },
  {
    icon: 'Heart',
    title: 'Holistic Development',
    description:
      'Beyond academics — we foster creativity, sportsmanship, leadership, and emotional intelligence in every child.',
  },
];

export const directorData: DirectorInfo = {
  name: 'Kailas Sambhaji Kapate',
  role: 'Director, Jijau English Medium School',
  education: 'M.A., B.Ed.',
  image: '/director.png',
  message:
    'Welcome to Jijau English Medium School! Our mission is to nurture young minds through value-based education, modern learning techniques, and a compassionate environment. We strive to instill confidence, discipline, and excellence in every student.',
};

// ─── Why Choose Us ───────────────────────────────────────
export const whyChooseUsItems: ValueProp[] = [
  {
    icon: 'UsersRound',
    title: 'Small Class Sizes',
    description:
      'Personalized attention with optimal student-teacher ratios, ensuring every child is seen and heard.',
  },
  {
    icon: 'GraduationCap',
    title: 'Qualified Faculty',
    description:
      'B.Ed certified teachers with specialized training in early childhood and primary education.',
  },
  {
    icon: 'Bus',
    title: 'Safe Transport',
    description:
      'GPS-tracked school buses with trained attendants covering all major routes and neighborhoods.',
  },
  {
    icon: 'Monitor',
    title: 'Smart Classrooms',
    description:
      'Interactive digital boards and modern learning tools that make lessons engaging and memorable.',
  },
  {
    icon: 'Trophy',
    title: 'Sports & Extracurriculars',
    description:
      'A wide range of sports, arts, music, dance, and club activities for all-round development.',
  },
  {
    icon: 'Bell',
    title: 'Regular Parent Updates',
    description:
      'Transparent communication through a parent portal, regular PTMs, and timely progress reports.',
  },
];

// ─── Academics ───────────────────────────────────────────
export const academicsData: AcademicGroup[] = [
  {
    id: 'pre-primary',
    title: 'Pre-Primary',
    ageRange: 'Ages 3–5',
    description:
      'A play-based, Montessori-inspired curriculum that builds curiosity, motor skills, and social confidence through structured exploration.',
    subjects: [
      'Language & Literacy',
      'Numeracy Concepts',
      'Environmental Awareness',
      'Art & Craft',
      'Music & Movement',
    ],
    activities: [
      'Story Time',
      'Outdoor Play',
      'Show & Tell',
      'Rhymes & Songs',
      'Sensory Activities',
    ],
    approach:
      'Learning through play, hands-on activities, and guided exploration in a warm, nurturing environment.',
  },
  {
    id: 'grade-1-2',
    title: 'Grade 1–2',
    ageRange: 'Ages 6–7',
    description:
      'Building strong foundations in reading, writing, and mathematics while developing critical thinking and a love for learning.',
    subjects: [
      'English',
      'Mathematics',
      'Environmental Science',
      'Hindi',
      'Computer Basics',
      'Art & Craft',
    ],
    activities: [
      'Reading Circles',
      'Math Games',
      'Nature Walks',
      'Creative Writing',
      'Mini Projects',
    ],
    approach:
      'Activity-based learning with a balanced mix of structured lessons and exploratory projects.',
  },
  {
    id: 'grade-3-5',
    title: 'Grade 3–5',
    ageRange: 'Ages 8–11',
    description:
      'Advanced curriculum focused on analytical thinking, subject depth, and preparing students for the next level of education.',
    subjects: [
      'English',
      'Mathematics',
      'Science',
      'Social Studies',
      'Hindi',
      'Computer Science',
      'Physical Education',
    ],
    activities: [
      'Science Experiments',
      'Debates & Elocution',
      'Sports Competitions',
      'Cultural Programs',
      'Leadership Clubs',
    ],
    approach:
      'Concept-driven teaching with real-world applications, collaborative projects, and exam preparedness.',
  },
];

// ─── Facilities ──────────────────────────────────────────
export const facilitiesData: Facility[] = [
  {
    icon: 'Library',
    title: 'Library',
    description:
      'A well-stocked library with age-appropriate books, encyclopedias, and a dedicated reading corner.',
  },
  {
    icon: 'TreePine',
    title: 'Playground',
    description:
      'Spacious outdoor playground with safe play equipment, sports fields, and shaded seating areas.',
  },
  {
    icon: 'Monitor',
    title: 'Smart Classrooms',
    description:
      'Equipped with interactive whiteboards, projectors, and digital learning tools for immersive lessons.',
  },
  {
    icon: 'Laptop',
    title: 'Computer Lab',
    description:
      'Modern computer lab with high-speed internet and age-appropriate educational software.',
  },
  {
    icon: 'Bus',
    title: 'Transport',
    description:
      'Fleet of GPS-tracked buses with trained drivers and attendants for safe daily commute.',
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Canteen & Nutrition',
    description:
      'Hygienic canteen serving nutritious meals and snacks with a focus on balanced child nutrition.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Safety & CCTV',
    description:
      'Comprehensive CCTV coverage, fire safety systems, and trained security personnel at all entry points.',
  },
];

// ─── Gallery ─────────────────────────────────────────────
// [EDIT ME] Replace these placeholder descriptions & sources with real campus photos
export const galleryImages: GalleryImage[] = [
  {
    src: '/gallery/campus-1.jpg',
    alt: 'Outdoor school celebration and student felicitation',
    category: 'School Event',
    span: 'wide',
  },
  {
    src: '/gallery/campus-2.jpg',
    alt: 'Children happily playing on the campus playground slides',
    category: 'Playground',
    span: 'tall',
  },
  {
    src: '/gallery/campus-3.jpg',
    alt: 'Students sitting together for traditional school meals and prayer',
    category: 'School Meal',
    span: 'wide',
  },
  {
    src: '/gallery/campus-4.jpg',
    alt: 'Morning prayers and cultural traditions at campus',
    category: 'Cultural Values',
    span: 'normal',
  },
  {
    src: '/gallery/campus-5.jpg',
    alt: 'Students gathered in traditional attire for cultural celebration',
    category: 'Cultural Day',
    span: 'normal',
  },
  {
    src: '/gallery/campus-6.jpg',
    alt: 'Flag hoisting ceremony celebrating national pride at school campus',
    category: 'Patriotic Event',
    span: 'wide',
  },
];

// ─── Testimonials ────────────────────────────────────────
// [EDIT ME] Replace with real parent testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Jijau School has been a wonderful experience for my daughter. The teachers are incredibly dedicated and the school truly focuses on each child's individual growth. I couldn't be happier with our choice.",
    parentName: 'Priya Sharma',
    childGrade: "Mother of Ananya, Grade 3",
    avatarColor: '#F5A623',
  },
  {
    id: 2,
    quote:
      "The safe and nurturing environment at Jijau gave us complete peace of mind. Our son looks forward to going to school every single day. The balance between academics and activities is perfect.",
    parentName: 'Rajesh Patil',
    childGrade: "Father of Arjun, Grade 1",
    avatarColor: '#1B4965',
  },
  {
    id: 3,
    quote:
      "We moved to this area and were worried about finding the right school. Jijau exceeded all our expectations — the faculty is warm, the campus is beautiful, and the communication with parents is excellent.",
    parentName: 'Meena Kulkarni',
    childGrade: "Mother of Saanvi, Pre-Primary",
    avatarColor: '#E8614D',
  },
  {
    id: 4,
    quote:
      "Both my children study at Jijau, and I've seen remarkable growth in their confidence and academic skills. The school's emphasis on values alongside education sets it apart from others.",
    parentName: 'Amit Deshmukh',
    childGrade: "Father of Rohan (Grade 4) & Ria (Grade 2)",
    avatarColor: '#2D8BB2',
  },
  {
    id: 5,
    quote:
      "The extracurricular activities and sports programs here are fantastic. My daughter has discovered a passion for art and dance, all thanks to the opportunities Jijau provides beyond the regular curriculum.",
    parentName: 'Sunita Jadhav',
    childGrade: "Mother of Kavya, Grade 5",
    avatarColor: '#F5A623',
  },
];

// ─── Admissions ──────────────────────────────────────────
export const admissionSteps: AdmissionStep[] = [
  {
    step: 1,
    title: 'Enquire',
    description:
      'Fill out the enquiry form or call us to express your interest. Our admissions team will reach out within 24 hours.',
    icon: 'MessageSquare',
  },
  {
    step: 2,
    title: 'Campus Visit',
    description:
      'Schedule a guided tour of our campus to experience the learning environment, meet teachers, and explore facilities.',
    icon: 'MapPin',
  },
  {
    step: 3,
    title: 'Assessment',
    description:
      "A friendly, age-appropriate interaction/assessment to understand your child's learning level and needs.",
    icon: 'ClipboardCheck',
  },
  {
    step: 4,
    title: 'Confirmation',
    description:
      'Complete the enrollment formalities and welcome your child to the Jijau family!',
    icon: 'PartyPopper',
  },
];

// ─── Contact Info ────────────────────────────────────────
export const contactInfo: ContactInfo = {
  address: 'Yelegaon, Maharashtra',
  phone: '+91 8484840224',
  email: 'kailaskapate@gmail.com',
  whatsapp: '918484840224',
  schoolHours: 'Mon – Sat: 8:00 AM – 3:00 PM', // [EDIT ME]
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d77.386084!3d19.220055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzEyLjIiTiA3N8KwMjMnMTAuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
};

// [EDIT ME] Replace with real social media URLs
export const socialLinks: SocialLink[] = [
  { platform: 'Facebook', url: 'https://facebook.com/jijauschool', icon: 'Facebook' }, // [EDIT ME]
  { platform: 'Instagram', url: 'https://instagram.com/jijauschool', icon: 'Instagram' }, // [EDIT ME]
  { platform: 'YouTube', url: 'https://youtube.com/@jijauschool', icon: 'Youtube' }, // [EDIT ME]
];

// ─── Footer ──────────────────────────────────────────────
export const footerContent: FooterContent = {
  tagline: 'Nurturing young minds, building bright futures.',
  copyright: `© ${new Date().getFullYear()} Jijau English Medium School. All rights reserved.`, // Auto-updates year
};
