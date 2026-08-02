import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import EnquiryForm from './EnquiryForm';
import { admissionSteps } from '../../data/content';

export default function AdmissionsSection() {
  return (
    <SectionWrapper id="admissions" background="gradient">
      <SectionHeading
        title="Admissions"
        subtitle="Join the Jijau family — a simple, transparent admission process"
      />

      {/* Admission Steps Timeline */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {admissionSteps.map((step, index) => {
          const IconComponent = LucideIcons[step.icon as keyof typeof LucideIcons] as React.ComponentType<{ size?: number; className?: string }>;
          return (
            <motion.div
              key={step.step}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              {/* Connector line (not on last item) */}
              {index < admissionSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] right-[-calc(50%-40px)] h-0.5 bg-primary-200 z-0" />
              )}

              <div className="relative z-10 text-center">
                {/* Step Number + Icon */}
                <div className="inline-flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-[var(--shadow-card)] flex items-center justify-center mb-4 relative">
                    {IconComponent && (
                      <IconComponent
                        size={30}
                        className="text-secondary-600"
                      />
                    )}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary-400 text-white text-xs font-bold flex items-center justify-center shadow-md">
                      {step.step}
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-secondary-700 font-heading mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-warm-500 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Enquiry Form */}
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-[var(--shadow-card-hover)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary-700 font-heading mb-2">
              Enquire Now
            </h3>
            <p className="text-warm-500 text-sm">
              Fill out the form and our admissions team will get back to you
              within 24 hours.
            </p>
          </div>
          <EnquiryForm />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
