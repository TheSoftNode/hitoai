// // pages/terms-conditions.tsx
// import { motion, AnimatePresence } from 'framer-motion';

// export default function TermsAndConditionsPage() {
//   // ... previous state and effects

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       <motion.div 
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {/* Header */}
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           <h1 className="text-4xl font-bold text-gray-900">
//             Terms and Conditions
//           </h1>
//           <p className="mt-4 text-lg text-gray-600">
//             Last updated: November 29, 2024
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
//           {/* Desktop Sidebar */}
//           <aside className="hidden lg:block">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               <TableOfContents
//                 items={tableOfContents}
//                 activeSection={activeSection}
//                 onSectionClick={scrollToSection}
//               />
//             </motion.div>
//           </aside>

//           {/* Main Content */}
//           <main className="space-y-8">
//             <AnimatePresence mode="wait">
//               {sectionsData.map((section) => (
//                 <motion.div
//                   key={section.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-100px" }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <Section
//                     section={section}
//                     isActive={activeSection === section.id}
//                   />
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </main>
//         </div>
//       </motion.div>

//       {/* Mobile Navigation */}
//       <FloatingMobileNav
//         tableOfContents={tableOfContents}
//         activeSection={activeSection}
//         onSectionClick={scrollToSection}
//       />
//     </div>
//   );
// }