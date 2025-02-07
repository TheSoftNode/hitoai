import { motion } from 'framer-motion';
import { Section as SectionType } from './types/terms';
import { cn } from '@/lib/utils';

interface SectionProps {
    section: SectionType;
    isActive: boolean;
}

export const Section: React.FC<SectionProps> = ({ section, isActive }) => {
    return (
        <motion.section
            id={section.id}
            className={cn(
                "scroll-mt-24 p-6 rounded-xl bg-white border border-gray-100",
                "transition-all duration-300",
                isActive && "ring-2 ring-blue-100 shadow-lg"
            )}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <motion.h2
                className="text-xl font-bold mb-4 text-gray-800"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                {section.number}. {section.title}
            </motion.h2>

            {Array.isArray(section.content) ? (
                <div className="space-y-4">
                    {section.content.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-600 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
            ) : (
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
            )}

            {section.subsections && (
                <div className="mt-6 space-y-6">
                    {section.subsections.map((subsection, idx) => (
                        <div key={idx} className="pl-4 border-l-2 border-blue-100">
                            <h3 className="text-lg font-semibold text-gray-700 mb-3">
                                {subsection.title}
                            </h3>
                            <div className="space-y-3">
                                {subsection.content.map((paragraph, pIdx) => (
                                    <p key={pIdx} className="text-gray-600 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </motion.section>
    );
};