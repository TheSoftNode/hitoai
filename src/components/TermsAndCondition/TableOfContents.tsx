// components/terms/TableOfContents.tsx
import { cn } from '@/lib/utils';
import { TableOfContentsItem } from './types/terms';

interface TableOfContentsProps {
  items: TableOfContentsItem[];
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  activeSection,
  onSectionClick
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-xl p-6 sticky top-24">
      <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        Table of Contents
      </h2>
      <nav className="max-h-[60vh] overflow-y-auto pr-4 styled-scrollbar">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onSectionClick(item.id)}
                className={cn(
                  "text-left text-sm w-full px-3 py-2 rounded-lg transition-all duration-200",
                  "hover:bg-blue-50 hover:text-blue-700",
                  activeSection === item.id 
                    ? "bg-blue-50 text-blue-700 font-medium" 
                    : "text-gray-600"
                )}
              >
                {item.number}. {item.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};