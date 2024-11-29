export interface Employee {
    id: string;
    name: string;
    role: string;
    email: string;
    rating: number;
    skills: string[];
    activeProjects: string[];
    tasksCompleted: number;
    availability: 'available' | 'assigned' | 'busy';
    imageUrl?: string;
  }
  
  export interface Client {
    id: string;
    name: string;
    company: string;
    email: string;
    status: 'active' | 'pending' | 'inactive';
    projects: string[];
    dateJoined: string;
    industry: string;
    budget: number;
  }
  
  export interface Project {
    id: string;
    name: string;
    clientId: string;
    assignedEngineers: string[];
    status: 'planning' | 'in-progress' | 'review' | 'completed';
    progress: number;
    startDate: string;
    endDate: string;
    description: string;
    budget: number;
    priority: 'low' | 'medium' | 'high';
  }
  
  export interface Investor {
    id: string;
    name: string;
    company: string;
    investmentAmount: number;
    investmentDate: string;
    status: 'active' | 'potential' | 'past';
    projects: string[];
  }