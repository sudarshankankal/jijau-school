import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Palette, FlaskConical } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import SectionHeading from './ui/SectionHeading';
import { academicsData } from '../data/content';

const tabIcons = [
  <Palette size={20} key="pre" />,
  <BookOpen size={20} key="grade12" />,
  <FlaskConical size={20} key="grade35" />,
];

const tabIllustrationColors = ['#F5A623', '#2D8BB2', '#E8614D'];

export default function Academics() {
  const [activeTab, setActiveTab] = useState(0);
  const activeGroup = academicsData[activeTab];

  return (
    <SectionWrapper id="academics" background="white">
      <SectionHeading
        title="Academics & Curriculum"
        subtitle="Age-appropriate, engaging education designed for every stage of your child's growth"
      />

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {academicsData.map((group, index) => (
          <button
            key={group.id}
            onClick={() => setActiveTab(index)}
            className={`
              flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 cursor-pointer
              ${
                activeTab === index
                  ? 'bg-secondary-600 text-white shadow-lg'
                  : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
              }
            `}
          >
            {tabIcons[index]}
            <span>{group.title}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeTab === index
                  ? 'bg-white/20 text-white'
                  : 'bg-warm-200 text-warm-500'
              }`}
            >
              {group.ageRange}
            </span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeGroup.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="grid lg:grid-cols-2 gap-10 items-start"
        >
          {/* Left: Description + Approach */}
          <div>
            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
              style={{
                backgroundColor: `${tabIllustrationColors[activeTab]}20`,
                color: tabIllustrationColors[activeTab],
              }}
            >
              {activeGroup.ageRange}
            </div>
            <h3 className="text-2xl font-bold text-secondary-700 font-heading mb-4">
              {activeGroup.title}
            </h3>
            <p className="text-warm-600 leading-relaxed mb-6">
              {activeGroup.description}
            </p>

            <div className="bg-warm-50 rounded-2xl p-5 border border-warm-200">
              <h4 className="text-sm font-semibold text-secondary-600 uppercase tracking-wide mb-2">
                Our Approach
              </h4>
              <p className="text-sm text-warm-600 leading-relaxed">
                {activeGroup.approach}
              </p>
            </div>
          </div>

          {/* Right: Subjects & Activities */}
          <div className="space-y-6">
            {/* Subjects */}
            <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-card)]">
              <h4 className="text-sm font-semibold text-secondary-600 uppercase tracking-wide mb-4 flex items-center gap-2">
                <BookOpen size={16} />
                Subjects
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeGroup.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="px-3 py-1.5 bg-secondary-50 text-secondary-600 rounded-lg text-sm font-medium"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div className="bg-white rounded-2xl p-6 shadow-[var(--shadow-card)]">
              <h4 className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-4 flex items-center gap-2">
                <Palette size={16} />
                Activities
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeGroup.activities.map((activity) => (
                  <span
                    key={activity}
                    className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium"
                  >
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
