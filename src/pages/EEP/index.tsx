import React, { useState, useEffect } from 'react';
import { 
  BrainIcon,
  KeyIcon,
  DatabaseIcon,
  GitBranchIcon,
  CloudIcon,
  UsersIcon,
  BuildingIcon,
  UploadIcon,
  CheckCircle2Icon,
  AlertTriangleIcon,
  FlaskConicalIcon
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  cv: File | null;
  acceptedTerms: boolean;
}

interface Capability {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface Track {
  title: string;
  icon: React.ElementType;
  capabilities: Capability[];
}

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

const TermsAndConditions: React.FC = () => {

    const [termsContent, setTermsContent] = useState<string>('');
    const [isLoadingTerms, setIsLoadingTerms] = useState(false);
    const loadTermsContent = async () => {
        try {
          setIsLoadingTerms(true);
          const response = await window.fs.readFile('terms_and_conditions.docx');
          // Convert Uint8Array to string if necessary
          const content = response instanceof Uint8Array ? 
            new TextDecoder().decode(response) : 
            response;
          setTermsContent(content);
        } catch (error) {
          console.error('Error loading terms:', error);
          setTermsContent('Error loading terms and conditions. Please try again later.');
        } finally {
          setIsLoadingTerms(false);
        }
      };

  useEffect(() => {
    loadTermsContent();
  }, []);

  if (isLoadingTerms) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4 prose prose-sm max-w-none">
      <div className="whitespace-pre-wrap font-sans">{termsContent}</div>
    </div>
  );
};

const EEPPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    cv: null,
    acceptedTerms: false
  });

 

  const tracks: Track[] = [
    {
      title: "Shenal's Track",
      icon: CloudIcon,
      capabilities: [
        {
          title: "AWS Basics",
          description: "Master core AWS services including Lambda, EventBridge, IAM, and S3 for scalable cloud solutions.",
          icon: CloudIcon
        },
        {
          title: "Serverless Development",
          description: "Create event-driven architectures using AWS Lambda and EventBridge for optimal performance.",
          icon: FlaskConicalIcon
        },
        {
          title: "API Development",
          description: "Build RESTful APIs with Flask, integrated with DynamoDB and SQL databases.",
          icon: DatabaseIcon
        },
        {
          title: "Security & Authentication",
          description: "Implement JWT-based authentication and secure token management.",
          icon: KeyIcon
        }
      ]
    },
    {
      title: "Uche's Track",
      icon: BrainIcon,
      capabilities: [
        {
          title: "Web Development Foundations",
          description: "Master client-server architecture, HTTP protocols, and modern web development practices.",
          icon: BuildingIcon
        },
        {
          title: "Frontend Excellence",
          description: "Create responsive interfaces with HTML, CSS, JavaScript, React, and Next.js.",
          icon: UsersIcon
        },
        {
          title: "Backend Mastery",
          description: "Develop robust systems using Node.js, Django, NestJS, and .NET (C#).",
          icon: DatabaseIcon
        },
        {
          title: "Version Control",
          description: "Master Git and GitHub for effective code collaboration and management.",
          icon: GitBranchIcon
        }
      ]
    }
  ];

  const benefits: Benefit[] = [
    {
      icon: GitBranchIcon,
      title: "Enterprise GitHub Access",
      description: "Collaborate and manage code with enterprise-level GitHub features."
    },
    {
      icon: CloudIcon,
      title: "Enterprise Cloud Platform",
      description: "Access AWS, Azure, and GCP enterprise services for AI development."
    },
    {
      icon: UsersIcon,
      title: "1:1 AI Mentorship",
      description: "20 personalized sessions with Deep Tech startup experts."
    },
    {
      icon: BuildingIcon,
      title: "Career Opportunities",
      description: "Potential to join HitoAI Limited and connect with 5,000+ startups."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, cv: file }));
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Enterprise Engagement Program
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              {" "}(EEP)
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast-track your career with cutting-edge AI advancements across enterprise cloud platforms.
            Join a globally recognized, industry-driven initiative and lead the future of AI!
          </p>
        </div>

        {/* Tracks Section */}
        <div className="space-y-12 mb-16">
          {tracks.map((track, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <track.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle>{track.title}</CardTitle>
                    <CardDescription>
                      {track.title === "Shenal's Track" 
                        ? "Master cloud services and backend development" 
                        : "Excel in full-stack web development and modern frameworks"}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {track.capabilities.map((capability, capIndex) => (
                    <Card key={capIndex} className="group hover:border-blue-500 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <capability.icon className="w-5 h-5 text-blue-500" />
                          <CardTitle className="text-lg">{capability.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{capability.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-center">Key Benefits</CardTitle>
            <CardDescription className="text-center">
              Exclusive advantages that set our program apart and accelerate your career growth
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group hover:border-blue-500 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <benefit.icon className="w-5 h-5 text-blue-500" />
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Application Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Apply Now</CardTitle>
            <CardDescription className="text-center">
              Start your journey towards becoming an AI and cloud technology expert
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cv">Upload CV</Label>
                <div className="flex items-center justify-center w-full">
                  <Label
                    htmlFor="cv"
                    className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-50 transition-colors"
                  >
                    <UploadIcon className="w-8 h-8 text-blue-500" />
                    <span className="mt-2 text-base leading-normal">Select a file</span>
                    <Input
                      id="cv"
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                  </Label>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.acceptedTerms}
                  onCheckedChange={(checked: boolean) => 
                    setFormData(prev => ({ ...prev, acceptedTerms: checked }))
                  }
                />
                <div className="flex items-center space-x-2">
                  <Label htmlFor="terms">I accept the</Label>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="link" className="p-0 h-auto font-normal text-blue-500">
                        terms and conditions
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Terms and Conditions</DialogTitle>
                        <DialogDescription>
                          Please read these terms carefully before applying
                        </DialogDescription>
                      </DialogHeader>
                      <TermsAndConditions />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>

              <Alert>
                <AlertTriangleIcon className="h-4 w-4" />
                <AlertTitle>Administration Fee</AlertTitle>
                <AlertDescription>
                  €500 - Please do not make any payment until your application has been approved.
                </AlertDescription>
              </Alert>

              <div className="text-center">
                <Button
                  type="submit"
                  className="w-full sm:w-auto"
                  disabled={!formData.acceptedTerms}
                >
                  Submit Application
                  <CheckCircle2Icon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EEPPage;