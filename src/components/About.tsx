import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import { aboutMission, aboutVision, aboutFeatures, directorData } from '../data/content';
import { Quote, GraduationCap } from 'lucide-react';

function AboutIllustration() {
  return (
    <svg viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-md mx-auto">
      {/* Background */}
      <ellipse cx="200" cy="190" rx="180" ry="150" fill="#FFF5E8" opacity="0.6" />
      
      {/* Desk */}
      <rect x="80" y="220" width="240" height="12" rx="4" fill="#A66208" />
      <rect x="90" y="232" width="10" height="60" rx="2" fill="#7D4A06" />
      <rect x="300" y="232" width="10" height="60" rx="2" fill="#7D4A06" />
      
      {/* Teacher */}
      <circle cx="200" cy="150" r="25" fill="#FFE09E" />
      <circle cx="200" cy="140" r="30" fill="#1B4965" opacity="0.1" />
      <rect x="180" y="168" width="40" height="55" rx="10" fill="#E8614D" />
      
      {/* Blackboard */}
      <rect x="110" y="60" width="180" height="100" rx="6" fill="#163C54" />
      <rect x="118" y="68" width="164" height="84" rx="3" fill="#1B4965" />
      <text x="200" y="105" textAnchor="middle" fill="#8EC8DE" fontSize="12" fontFamily="sans-serif">ABC   123</text>
      <text x="200" y="130" textAnchor="middle" fill="#FFD077" fontSize="10" fontFamily="sans-serif">Welcome to Jijau!</text>
      
      {/* Students sitting */}
      {/* Student 1 */}
      <circle cx="120" cy="260" r="14" fill="#FFE09E" />
      <rect x="110" y="270" width="20" height="25" rx="6" fill="#F5A623" />
      
      {/* Student 2 */}
      <circle cx="200" cy="255" r="14" fill="#FFE09E" />
      <rect x="190" y="265" width="20" height="25" rx="6" fill="#2D8BB2" />
      
      {/* Student 3 */}
      <circle cx="280" cy="260" r="14" fill="#FFE09E" />
      <rect x="270" y="270" width="20" height="25" rx="6" fill="#E8614D" />
      
      {/* Books on desk */}
      <rect x="140" y="210" width="20" height="14" rx="2" fill="#F5A623" />
      <rect x="143" y="207" width="20" height="14" rx="2" fill="#2D8BB2" />
      <rect x="240" y="210" width="20" height="14" rx="2" fill="#E8614D" />
      
      {/* Stars */}
      <path d="M80 50 L83 57 L90 60 L83 63 L80 70 L77 63 L70 60 L77 57 Z" fill="#F5A623" opacity="0.5" />
      <path d="M320 40 L322 45 L327 47 L322 49 L320 54 L318 49 L313 47 L318 45 Z" fill="#E8614D" opacity="0.4" />
    </svg>
  );
}

export default function About() {
  return (
    <SectionWrapper id="about" background="white">
      <SectionHeading
        title="About Our School"
        subtitle="Building foundations for a lifetime of learning since 2008"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AboutIllustration />
        </motion.div>

        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-secondary-700 font-heading mb-4">
              Our Mission
            </h3>
            <p className="text-warm-600 mb-6 leading-relaxed">{aboutMission}</p>

            <h3 className="text-2xl font-bold text-secondary-700 font-heading mb-4">
              Our Vision
            </h3>
            <p className="text-warm-600 leading-relaxed">{aboutVision}</p>
          </motion.div>
        </div>
      </div>

      {/* Director Profile / Leadership */}
      <motion.div
        className="mb-16 bg-gradient-to-br from-warm-50 to-primary-50/40 rounded-3xl p-6 sm:p-8 md:p-10 border border-warm-200 shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 lg:col-span-3 text-center">
            <div className="relative inline-block">
              <img
                src={directorData.image}
                alt={directorData.name}
                className="w-44 h-44 sm:w-48 sm:h-48 object-cover rounded-2xl shadow-md border-4 border-white mx-auto"
              />
              <div className="absolute -bottom-3 inset-x-0">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-secondary-600 text-white text-xs font-semibold rounded-full shadow-sm">
                  <GraduationCap size={14} />
                  {directorData.education}
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 lg:col-span-9 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-1 block font-heading">
              School Leadership
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-secondary-700 font-heading mb-1">
              {directorData.name}
            </h3>
            <p className="text-sm font-medium text-warm-600 mb-4">
              {directorData.role}
            </p>

            <div className="relative bg-white/80 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-warm-200 text-warm-700 text-sm leading-relaxed italic">
              <Quote size={20} className="text-primary-400 mb-2 opacity-60" />
              "{directorData.message}"
            </div>
          </div>
        </div>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {aboutFeatures.map((feature, index) => {
          const IconComponent = LucideIcons[feature.icon as keyof typeof LucideIcons] as React.ComponentType<{ size?: number; className?: string }>;
          return (
            <Card key={feature.title} delay={index}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center mb-4">
                {IconComponent && (
                  <IconComponent size={26} className="text-primary-600" />
                )}
              </div>
              <h4 className="text-lg font-bold text-secondary-700 font-heading mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-warm-500 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
