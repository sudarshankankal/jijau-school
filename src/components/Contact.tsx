import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
} from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeading from './ui/SectionHeading';
import { contactInfo, socialLinks } from '../data/content';

// Custom SVG social icons (lucide-react doesn't include brand logos)
function FacebookIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YoutubeIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Youtube: YoutubeIcon,
};

export default function Contact() {
  return (
    <SectionWrapper id="contact" background="white">
      <SectionHeading
        title="Get in Touch"
        subtitle="We'd love to hear from you. Visit us, call us, or send us a message!"
      />

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Map */}
        <motion.div
          className="rounded-3xl overflow-hidden shadow-[var(--shadow-card)] min-h-[350px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* [EDIT ME] Replace with your school's Google Maps embed URL */}
          <iframe
            src={contactInfo.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '350px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Jijau English Medium School Location"
          />
        </motion.div>

        {/* Contact Details */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Address */}
          <div className="flex items-start gap-4 p-5 bg-warm-50 rounded-2xl border border-warm-200">
            <div className="w-12 h-12 rounded-xl bg-secondary-100 flex items-center justify-center flex-shrink-0">
              <MapPin size={22} className="text-secondary-600" />
            </div>
            <div>
              <h4 className="font-semibold text-secondary-700 text-sm mb-1">
                Address
              </h4>
              {/* [EDIT ME] */}
              <p className="text-warm-600 text-sm leading-relaxed">
                {contactInfo.address}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 p-5 bg-warm-50 rounded-2xl border border-warm-200">
            <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
              <Phone size={22} className="text-primary-600" />
            </div>
            <div>
              <h4 className="font-semibold text-secondary-700 text-sm mb-1">
                Phone
              </h4>
              {/* [EDIT ME] */}
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="text-warm-600 text-sm hover:text-primary-500 transition-colors"
              >
                {contactInfo.phone}
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 p-5 bg-warm-50 rounded-2xl border border-warm-200">
            <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
              <Mail size={22} className="text-accent-500" />
            </div>
            <div>
              <h4 className="font-semibold text-secondary-700 text-sm mb-1">
                Email
              </h4>
              {/* [EDIT ME] */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-warm-600 text-sm hover:text-accent-500 transition-colors"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* WhatsApp + Hours Row */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-2xl border border-green-200">
              <MessageCircle size={20} className="text-green-600 flex-shrink-0" />
              <div>
                <p className="text-xs text-green-700 font-semibold">WhatsApp</p>
                {/* [EDIT ME] */}
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 hover:text-green-700 transition-colors"
                >
                  Chat with us
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-warm-50 rounded-2xl border border-warm-200">
              <Clock size={20} className="text-warm-500 flex-shrink-0" />
              <div>
                <p className="text-xs text-warm-600 font-semibold">
                  School Hours
                </p>
                {/* [EDIT ME] */}
                <p className="text-sm text-warm-500">{contactInfo.schoolHours}</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4 pt-2">
            <span className="text-sm text-warm-500 font-medium">Follow us:</span>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-warm-100 hover:bg-secondary-100 flex items-center justify-center text-warm-500 hover:text-secondary-600 transition-all"
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    {Icon && <Icon size={18} />}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
