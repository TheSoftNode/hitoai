// components/terms/FloatingMobileNav.tsx
import React from 'react';
import { ChevronUp, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { TableOfContentsItem } from './types/terms';
import { cn } from '@/lib/utils';

interface FloatingMobileNavProps {
  tableOfContents: TableOfContentsItem[];
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export const FloatingMobileNav: React.FC<FloatingMobileNavProps> = ({
  tableOfContents,
  activeSection,
  onSectionClick
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 lg:hidden z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            className="h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <div className="h-full py-4">
            <h2 className="text-lg font-semibold mb-4">Navigate to Section</h2>
            <nav className="space-y-2">
              {tableOfContents.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionClick(item.id);
                  }}
                  className={cn(
                    "w-full text-left px-4 py-2 rounded-lg text-sm transition-colors",
                    activeSection === item.id
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  {item.number}. {item.title}
                </button>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>

      <Button
        size="icon"
        variant="secondary"
        className="h-10 w-10 rounded-full shadow-lg"
        onClick={scrollToTop}
      >
        <ChevronUp className="h-5 w-5" />
      </Button>
    </div>
  );
};