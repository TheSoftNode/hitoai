import { motion, Variants } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, MessageSquare } from 'lucide-react';
import { teamCategories } from "../../../data/team";

interface TeamMemberProps
{
    name: string;
    role: string;
    image?: string;
    description?: string;
}

const fadeIn: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const staggerChildren: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

// const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, description }) => (
//     <motion.div
//         variants={fadeIn}
//         className="group h-full"
//     >
//         <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl backdrop-blur-sm bg-white/80 border-0 hover:bg-white/90 h-full">
//             <CardContent className="p-6 flex flex-col h-full">
//                 <div className="flex flex-col items-center space-y-4 flex-grow">
//                     <div className="relative">
//                         <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
//                         <Avatar className="w-24 h-24 border-2 border-primary relative">
//                             <AvatarImage src={image || `/api/placeholder/150/150`} alt={name} />
//                             <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
//                         </Avatar>
//                     </div>
//                     <div className="text-center flex-grow flex flex-col">
//                         <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">{name}</h3>
//                         <Badge variant="secondary" className="mt-2 self-center bg-gradient-to-r from-blue-500/10 to-purple-500/10">{role}</Badge>
//                         <p className="mt-4 text-sm text-muted-foreground flex-grow">{description}</p>
//                     </div>
//                 </div>
//             </CardContent>
//         </Card>
//     </motion.div>
// );

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, description }) => (
    <motion.div
        variants={fadeIn}
        className="group h-full"
    >
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl backdrop-blur-sm bg-white/80 border-0 hover:bg-white/90 h-full">
            <CardContent className="p-6 flex flex-col h-full">
                <div className="flex flex-col items-center space-y-4 flex-grow">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
                        <Avatar className="w-24 h-24 border-2 border-primary relative">
                            <AvatarImage src={image || `/api/placeholder/150/150`} alt={name} />
                            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="text-center flex-grow flex flex-col">
                        <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">{name}</h3>
                        <Badge variant="secondary" className="mt-2 self-center bg-gradient-to-r from-blue-500/10 to-purple-500/10">{role}</Badge>
                        <p className="mt-4 text-sm text-muted-foreground flex-grow">{description}</p>
                        {/* {description ? (
                            <p className="mt-4 text-sm text-muted-foreground flex-grow">{description}</p>
                        ) : (
                            <div className="mt-4 flex-grow flex flex-col items-center justify-center space-y-3">
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50/50 to-purple-50/50 flex items-center justify-center">
                                    <UserCircle2 className="w-6 h-6 text-blue-500/40" />
                                </div>
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                            </div>
                        )} */}
                    </div>
                </div>
            </CardContent>
        </Card>
    </motion.div>
);

const TeamSection = () =>
{
    type TabKeys = keyof typeof teamCategories;

    return (
        <section className="relative pt-20 pb-32 px-4  overflow-visible">
            {/* Sophisticated layered background */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 via-purple-400/5 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),rgba(255,255,255,0))]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),rgba(255,255,255,0))]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={staggerChildren}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">Our Team</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Meet the innovative minds behind HitoAI's groundbreaking solutions.
                    </p>
                </motion.div>

                <Tabs defaultValue="board" className="w-full">
                    <div className="sticky top-4 z-50 mb-8 bg-white/50 backdrop-blur-md rounded-full p-2 max-w-2xl mx-auto">
                        <TabsList className="flex flex-wrap justify-center items-center rounded-full h-[100%] gap-2">
                            <TabsTrigger value="board" className="flex items-center gap-2 rounded-full px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white transition-all duration-300">
                                <Users className="w-4 h-4" />Leadership Board
                            </TabsTrigger>
                            <TabsTrigger value="interns" className="flex items-center gap-2 rounded-full px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white transition-all duration-300">
                                <GraduationCap className="w-4 h-4" /> Interns and trainees
                            </TabsTrigger>
                            <TabsTrigger value="alumni" className="flex items-center gap-2 rounded-full px-4 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white transition-all duration-300">
                                <MessageSquare className="w-4 h-4" /> Alumni
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {(Object.keys(teamCategories) as TabKeys[]).map((category) => (
                        <TabsContent key={category} value={category as string}>
                            <motion.div
                                variants={staggerChildren}
                                initial="initial"
                                animate="animate"
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8"
                            >
                                {teamCategories[category].map((member, index) => (
                                    <TeamMember key={index} {...member} />
                                ))}
                            </motion.div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    );
};

export default TeamSection;