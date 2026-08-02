import * as LucideIcons from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import { facilitiesData } from '../data/content';

const facilityColors = [
  'from-primary-100 to-primary-200 text-primary-600',
  'from-green-100 to-green-200 text-green-600',
  'from-secondary-100 to-secondary-200 text-secondary-600',
  'from-blue-100 to-blue-200 text-blue-600',
  'from-amber-100 to-amber-200 text-amber-600',
  'from-rose-100 to-rose-200 text-rose-600',
  'from-teal-100 to-teal-200 text-teal-600',
];

export default function Facilities() {
  return (
    <SectionWrapper id="facilities" background="gradient">
      <SectionHeading
        title="Our Facilities"
        subtitle="A well-equipped campus designed to inspire learning and ensure safety"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {facilitiesData.map((facility, index) => {
          const IconComponent = LucideIcons[facility.icon as keyof typeof LucideIcons] as React.ComponentType<{ size?: number; className?: string }>;
          const colorClass = facilityColors[index % facilityColors.length];
          const textColorClass = colorClass.split(' ').pop() || '';

          return (
            <Card key={facility.title} delay={index}>
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-4`}
              >
                {IconComponent && <IconComponent size={26} />}
              </div>
              <h4 className="text-lg font-bold text-secondary-700 font-heading mb-2">
                {facility.title}
              </h4>
              <p className={`text-sm leading-relaxed ${textColorClass ? 'text-warm-500' : 'text-warm-500'}`}>
                {facility.description}
              </p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
