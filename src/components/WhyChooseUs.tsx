import * as LucideIcons from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import { whyChooseUsItems } from '../data/content';

export default function WhyChooseUs() {
  return (
    <SectionWrapper id="why-choose-us" background="gradient">
      <SectionHeading
        title="Why Choose Jijau?"
        subtitle="Here's what makes our school the perfect choice for your child's future"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyChooseUsItems.map((item, index) => {
          const IconComponent = LucideIcons[item.icon as keyof typeof LucideIcons] as React.ComponentType<{ size?: number; className?: string }>;
          return (
            <Card key={item.title} delay={index} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center mx-auto mb-5">
                {IconComponent && (
                  <IconComponent size={28} className="text-secondary-600" />
                )}
              </div>
              <h4 className="text-lg font-bold text-secondary-700 font-heading mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-warm-500 leading-relaxed">
                {item.description}
              </p>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
