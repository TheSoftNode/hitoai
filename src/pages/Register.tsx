import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, Building2, Briefcase, ArrowRight, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const RegisterPage = () =>
{
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() =>
    {
        window.scrollTo(0, 0);
    }, []);


    const RegisterForm = ({ userType }: { userType: string }) => (
        <form className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor={`${userType}-email`}>Email</Label>
                <div className="relative">
                    <Input
                        id={`${userType}-email`}
                        placeholder="Enter your email"
                        type="email"
                        className="pl-10"
                    />
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor={`${userType}-password`}>Password</Label>
                <div className="relative">
                    <Input
                        id={`${userType}-password`}
                        type={showPassword ? "text" : "password"}
                        className="pl-10"
                    />
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                    >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {userType === "partner" && (
                <div className="space-y-2">
                    <Label htmlFor="company-name">Company Name</Label>
                    <div className="relative">
                        <Input
                            id="company-name"
                            placeholder="Enter company name"
                            className="pl-10"
                        />
                        <Building2 className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                </div>
            )}

            {userType === "investor" && (
                <div className="space-y-2">
                    <Label htmlFor="investment-range">Investment Range</Label>
                    <div className="relative">
                        <Input
                            id="investment-range"
                            placeholder="Expected investment range"
                            className="pl-10"
                        />
                        <Briefcase className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                </div>
            )}

            <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                Create Account
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </form>
    );

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">
                        Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">HItoAI</span>
                    </CardTitle>
                    <CardDescription className="text-center">
                        Choose your role and start transforming with AI
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Tabs defaultValue="user" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-8">
                            <TabsTrigger value="user" className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                User
                            </TabsTrigger>
                            <TabsTrigger value="partner" className="flex items-center gap-2">
                                <Building2 className="h-4 w-4" />
                                Partner
                            </TabsTrigger>
                            <TabsTrigger value="investor" className="flex items-center gap-2">
                                <Briefcase className="h-4 w-4" />
                                Investor
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="user">
                            <RegisterForm userType="user" />
                        </TabsContent>
                        <TabsContent value="partner">
                            <RegisterForm userType="partner" />
                        </TabsContent>
                        <TabsContent value="investor">
                            <RegisterForm userType="investor" />
                        </TabsContent>
                    </Tabs>
                </CardContent>

                <CardFooter className="flex flex-col gap-4">
                    <div className="text-sm text-center text-gray-500">
                        Already have an account?
                        <Link
                            to="/login"
                            className="ml-1 text-blue-600 hover:text-blue-800 font-medium"
                        >
                            Sign in
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default RegisterPage;