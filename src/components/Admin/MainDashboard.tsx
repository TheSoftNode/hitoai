// import React, { useState, useEffect } from 'react';
// import { Bell, Users, Briefcase, UserPlus, Settings, Search, MoreVertical, AlertTriangle, CheckCircle, Star, Trash2, Edit } from 'lucide-react';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Employee, Client, Project, Investor } from '@/lib/types';
// import CreateEmployeeForm from './CreateEmployee';
// import CreateClientForm from './CreateClient';
// import CreateProjectForm from './CreateProject';


// const MainDashboard = () => {
//     const [employees, setEmployees] = useState<Employee[]>([]);
//     const [clients, setClients] = useState<Client[]>([]);
//     const [projects, setProjects] = useState<Project[]>([]);
//     const [investors, setInvestors] = useState<Investor[]>([]);
//     const [notifications, setNotifications] = useState<{ id: number; message: string; timestamp: string }[]>([]);
    
//     // Dialog states
//     const [employeeDialog, setEmployeeDialog] = useState(false);
//     const [clientDialog, setClientDialog] = useState(false);
//     const [projectDialog, setProjectDialog] = useState(false);
  
//     // CRUD Operations for Employees
//     const createEmployee = (newEmployee: Employee) => {
//       setEmployees([...employees, newEmployee]);
//       addNotification(`New employee ${newEmployee.name} added`);
//       setEmployeeDialog(false);
//     };
  
//     const updateEmployee = (id: string, updates: Partial<Employee>) => {
//       setEmployees(employees.map(emp => 
//         emp.id === id ? { ...emp, ...updates } : emp
//       ));
//     };
  
//     const deleteEmployee = (id: string) => {
//       const employee = employees.find(emp => emp.id === id);
//       if (employee) {
//         setEmployees(employees.filter(emp => emp.id !== id));
//         addNotification(`Employee ${employee.name} removed`);
//       }
//     };
  
//     // CRUD Operations for Clients
//     const createClient = (newClient: Client) => {
//       setClients([...clients, newClient]);
//       addNotification(`New client ${newClient.company} added`);
//       setClientDialog(false);
//     };
  
//     const updateClient = (id: string, updates: Partial<Client>) => {
//       setClients(clients.map(client => 
//         client.id === id ? { ...client, ...updates } : client
//       ));
//     };
  
//     const deleteClient = (id: string) => {
//       const client = clients.find(c => c.id === id);
//       if (client) {
//         setClients(clients.filter(c => c.id !== id));
//         addNotification(`Client ${client.company} removed`);
//       }
//     };
  
//     // CRUD Operations for Projects
//     const createProject = (newProject: Project) => {
//       setProjects([...projects, newProject]);
//       // Update assigned engineers' availability
//       newProject.assignedEngineers.forEach(engId => {
//         updateEmployee(engId, { availability: 'assigned' });
//       });
//       addNotification(`New project ${newProject.name} created`);
//       setProjectDialog(false);
//     };
  
//     const updateProject = (id: string, updates: Partial<Project>) => {
//       setProjects(projects.map(project => 
//         project.id === id ? { ...project, ...updates } : project
//       ));
//     };
  
//     const deleteProject = (id: string) => {
//       const project = projects.find(p => p.id === id);
//       if (project) {
//         // Update assigned engineers' availability
//         project.assignedEngineers.forEach(engId => {
//           updateEmployee(engId, { availability: 'available' });
//         });
//         setProjects(projects.filter(p => p.id !== id));
//         addNotification(`Project ${project.name} deleted`);
//       }
//     };
  
//     // Notification system
//     const addNotification = (message: string) => {
//       const newNotification = {
//         id: Date.now(),
//         message,
//         timestamp: new Date().toISOString(),
//       };
//       setNotifications([newNotification, ...notifications]);
//     };
  

//   // Rating system completion
//   const updateEngineerRating = (engineerId: string, projectId: string, rating: number) => {
//     const engineer = employees.find(emp => emp.id === engineerId);
//     if (engineer) {
//       const newRating = (engineer.rating + rating) / 2;
//       updateEmployee(engineerId, { rating: newRating });
//       addNotification(`Engineer ${engineer.name}'s rating updated to ${newRating.toFixed(1)}`);
//     }
//   };

//   // Dashboard stats calculations
//   const calculateDashboardStats = () => {
//     return {
//       totalEmployees: employees.length,
//       totalClients: clients.length,
//       activeProjects: projects.filter(p => p.status === 'in-progress').length,
//       completedProjects: projects.filter(p => p.status === 'completed').length,
//       totalBudget: projects.reduce((sum, p) => sum + p.budget, 0),
//       avgProjectProgress: projects.length > 0 
//         ? projects.reduce((sum, p) => sum + p.progress, 0) / projects.length 
//         : 0
//     };
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Admin Dashboard</h1>
//         <div className="flex items-center gap-4">
//           <div className="relative">
//             <Bell className="h-6 w-6 cursor-pointer" />
//             {notifications.length > 0 && (
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//                 {notifications.length}
//               </span>
//             )}
//           </div>
//           <Settings className="h-6 w-6 cursor-pointer" />
//         </div>
//       </div>

//       {/* Main Content */}
//       <Tabs defaultValue="overview" className="space-y-6">
//         <TabsList>
//           <TabsTrigger value="overview">Overview</TabsTrigger>
//           <TabsTrigger value="employees">Employees</TabsTrigger>
//           <TabsTrigger value="clients">Clients</TabsTrigger>
//           <TabsTrigger value="projects">Projects</TabsTrigger>
//         </TabsList>

//         {/* Overview Tab */}
//         <TabsContent value="overview">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle>Employees</CardTitle>
//                 <CardDescription>Total team members</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-4xl font-bold">{calculateDashboardStats().totalEmployees}</div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle>Active Projects</CardTitle>
//                 <CardDescription>Currently in progress</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-4xl font-bold">{calculateDashboardStats().activeProjects}</div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle>Total Budget</CardTitle>
//                 <CardDescription>All active projects</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-4xl font-bold">${calculateDashboardStats().totalBudget.toLocaleString()}</div>
//               </CardContent>
//             </Card>

//             {/* Recent Notifications */}
//             <Card className="col-span-full">
//               <CardHeader>
//                 <CardTitle>Recent Notifications</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {notifications.slice(0, 5).map((notification) => (
//                     <Alert key={notification.id}>
//                       <AlertDescription>{notification.message}</AlertDescription>
//                     </Alert>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </TabsContent>

//         {/* Employees Tab */}
//         <TabsContent value="employees">
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between">
//               <CardTitle>Employee Management</CardTitle>
//               <Dialog open={employeeDialog} onOpenChange={setEmployeeDialog}>
//                 <DialogTrigger asChild>
//                   <Button>Add Employee</Button>
//                 </DialogTrigger>
//                 <DialogContent>
//                   <DialogHeader>
//                     <DialogTitle>Add New Employee</DialogTitle>
//                   </DialogHeader>
//                   <CreateEmployeeForm 
//                     onSubmit={createEmployee}
//                     onCancel={() => setEmployeeDialog(false)}
//                   />
//                 </DialogContent>
//               </Dialog>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 {employees.map((employee) => (
//                   <div key={employee.id} className="flex items-center justify-between p-4 rounded-lg border">
//                     <div className="flex items-center gap-4">
//                       <Avatar>
//                         <AvatarFallback>{employee.name.slice(0, 2).toUpperCase()}</AvatarFallback>
//                       </Avatar>
//                       <div>
//                         <h3 className="font-medium">{employee.name}</h3>
//                         <p className="text-sm text-gray-500">{employee.role}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-4">
//                       <div className="flex items-center">
//                         <Star className="h-4 w-4 text-yellow-400" />
//                         <span className="ml-1">{employee.rating.toFixed(1)}</span>
//                       </div>
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         onClick={() => deleteEmployee(employee.id)}
//                       >
//                         <Trash2 className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         {/* Clients Tab */}
//         <TabsContent value="clients">
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between">
//               <CardTitle>Client Management</CardTitle>
//               <Dialog open={clientDialog} onOpenChange={setClientDialog}>
//                 <DialogTrigger asChild>
//                   <Button>Add Client</Button>
//                 </DialogTrigger>
//                 <DialogContent>
//                   <DialogHeader>
//                     <DialogTitle>Add New Client</DialogTitle>
//                   </DialogHeader>
//                   <CreateClientForm 
//                     onSubmit={createClient}
//                     onCancel={() => setClientDialog(false)}
//                   />
//                 </DialogContent>
//               </Dialog>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 {clients.map((client) => (
//                   <div key={client.id} className="flex items-center justify-between p-4 rounded-lg border">
//                     <div>
//                       <h3 className="font-medium">{client.company}</h3>
//                       <p className="text-sm text-gray-500">{client.industry}</p>
//                     </div>
//                     <div className="flex items-center gap-4">
//                       <span className={`px-2 py-1 rounded-full text-sm ${
//                         client.status === 'active' ? 'bg-green-100 text-green-800' :
//                         client.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
//                         'bg-gray-100 text-gray-800'
//                       }`}>
//                         {client.status}
//                       </span>
//                       <Button
//                         variant="ghost"
//                         size="icon"
//                         onClick={() => deleteClient(client.id)}
//                       >
//                         <Trash2 className="h-4 w-4" />
//                       </Button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>

//         {/* Projects Tab */}
//         <TabsContent value="projects">
//           <Card>
//             <CardHeader className="flex flex-row items-center justify-between">
//               <CardTitle>Project Management</CardTitle>
//               <Dialog open={projectDialog} onOpenChange={setProjectDialog}>
//                 <DialogTrigger asChild>
//                   <Button>Add Project</Button>
//                 </DialogTrigger>
//                 <DialogContent>
//                   <DialogHeader>
//                     <DialogTitle>Create New Project</DialogTitle>
//                   </DialogHeader>
//                   <CreateProjectForm 
//                     onSubmit={createProject}
//                     onCancel={() => setProjectDialog(false)}
//                     clients={clients}
//                     employees={employees}
//                   />
//                 </DialogContent>
//               </Dialog>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 {projects.map((project) => (
//                   <div key={project.id} className="p-4 rounded-lg border">
//                     <div className="flex justify-between items-start mb-2">
//                       <div>
//                         <h3 className="font-medium">{project.name}</h3>
//                         <p className="text-sm text-gray-500">
//                           Client: {clients.find(c => c.id === project.clientId)?.company}
//                         </p>
//                       </div>
//                       <span className={`px-2 py-1 rounded-full text-sm ${
//                         project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
//                         project.status === 'completed' ? 'bg-green-100 text-green-800' :
//                         'bg-gray-100 text-gray-800'
//                       }`}>
//                         {project.status}
//                       </span>
//                     </div>
//                     <div className="mt-4">
//                       <div className="flex justify-between text-sm text-gray-500 mb-1">
//                         <span>Progress</span>
//                         <span>{project.progress}%</span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-2">
//                         <div
//                           className="bg-blue-600 h-2 rounded-full"
//                           style={{ width: `${project.progress}%` }}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default MainDashboard;

import React, { useState, useEffect } from 'react';
import { Bell, Users, Briefcase, UserPlus, Settings, Search, MoreVertical, AlertTriangle, CheckCircle, Star, Trash2, Edit, X } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Employee, Client, Project, Investor } from '@/lib/types';
import CreateEmployeeForm from './CreateEmployee';
import CreateClientForm from './CreateClient';
import CreateProjectForm from './CreateProject';

const MainDashboard = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [clients, setClients] = useState<Client[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [investors, setInvestors] = useState<Investor[]>([]);
    const [notifications, setNotifications] = useState<{ id: number; message: string; timestamp: string }[]>([]);
    const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
    const [selectedClient, setSelectedClient] = useState<Client | null>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    
    // Dialog states
    const [employeeDialog, setEmployeeDialog] = useState(false);
    const [clientDialog, setClientDialog] = useState(false);
    const [projectDialog, setProjectDialog] = useState(false);
    const [editMode, setEditMode] = useState(false);
    
    // CRUD Operations for Employees
    const createEmployee = (newEmployee: Employee) => {
      const employeeWithDefaults = {
        ...newEmployee,
        rating: 0,
        availability: 'available' as 'available' | 'assigned' | 'busy',
        projects: [],
      };
      setEmployees([...employees, employeeWithDefaults]);
      addNotification(`New employee ${newEmployee.name} added`);
      setEmployeeDialog(false);
    };
    
    const updateEmployee = (id: string, updates: Partial<Employee>) => {
      setEmployees(employees.map(emp => 
        emp.id === id ? { ...emp, ...updates } : emp
      ));
      addNotification(`Employee ${updates.name || 'information'} updated`);
      setSelectedEmployee(null);
      setEditMode(false);
    };
    
    const deleteEmployee = (id: string) => {
      const employee = employees.find(emp => emp.id === id);
      if (employee) {
        // Check if employee is assigned to any projects
        const assignedProjects = projects.filter(p => 
          p.assignedEngineers.includes(id) && p.status !== 'completed'
        );
        
        if (assignedProjects.length > 0) {
          addNotification(`Cannot delete ${employee.name} - assigned to active projects`);
          return;
        }
        
        setEmployees(employees.filter(emp => emp.id !== id));
        addNotification(`Employee ${employee.name} removed`);
      }
    };
    
    // CRUD Operations for Clients
    const createClient = (newClient: Client) => {
      const clientWithDefaults = {
        ...newClient,
        status: 'active' as 'active' | 'pending' | 'inactive',
        projects: [],
      };
      setClients([...clients, clientWithDefaults]);
      addNotification(`New client ${newClient.company} added`);
      setClientDialog(false);
    };
    
    const updateClient = (id: string, updates: Partial<Client>) => {
      setClients(clients.map(client => 
        client.id === id ? { ...client, ...updates } : client
      ));
      addNotification(`Client ${updates.company || 'information'} updated`);
      setSelectedClient(null);
      setEditMode(false);
    };
    
    const deleteClient = (id: string) => {
      const client = clients.find(c => c.id === id);
      if (client) {
        // Check if client has active projects
        const activeProjects = projects.filter(p => 
          p.clientId === id && p.status !== 'completed'
        );
        
        if (activeProjects.length > 0) {
          addNotification(`Cannot delete ${client.company} - has active projects`);
          return;
        }
        
        setClients(clients.filter(c => c.id !== id));
        addNotification(`Client ${client.company} removed`);
      }
    };
    
    // Project Operations
    const createProject = (newProject: Project) => {
      const projectWithDefaults = {
        ...newProject,
        progress: 0,
        status: 'in-progress' as 'planning' | 'in-progress' | 'review' | 'completed',
      };
      setProjects([...projects, projectWithDefaults]);
      
      // Update assigned engineers' availability
      newProject.assignedEngineers.forEach(engId => {
        updateEmployee(engId, { availability: 'assigned' });
      });
      
      // Update client's projects
      const client = clients.find(c => c.id === newProject.clientId);
      if (client) {
        updateClient(client.id, {
          projects: [...(client.projects || []), newProject.id]
        });
      }
      
      addNotification(`New project ${newProject.name} created`);
      setProjectDialog(false);
    };
    
    const updateProject = (id: string, updates: Partial<Project>) => {
      const oldProject = projects.find(p => p.id === id);
      if (!oldProject) return;
      
      const updatedProject = { ...oldProject, ...updates };
      
      // Handle engineer reassignment
      if (updates.assignedEngineers) {
        const removedEngineers = oldProject.assignedEngineers.filter(
          engId => !updates.assignedEngineers?.includes(engId)
        );
        const addedEngineers = updates.assignedEngineers.filter(
          engId => !oldProject.assignedEngineers.includes(engId)
        );
        
        removedEngineers.forEach(engId => {
          updateEmployee(engId, { availability: 'available' });
        });
        
        addedEngineers.forEach(engId => {
          updateEmployee(engId, { availability: 'assigned' });
        });
      }
      
      // Handle project completion
      if (updates.status === 'completed' && oldProject.status !== 'completed') {
        updatedProject.assignedEngineers.forEach(engId => {
          const engineer = employees.find(emp => emp.id === engId);
          if (engineer) {
            updateEngineerRating(engId, id, updatedProject.progress / 20); // Rating based on project success
          }
        });
      }
      
      setProjects(projects.map(project => 
        project.id === id ? updatedProject : project
      ));
      
      addNotification(`Project ${updatedProject.name} updated`);
      setSelectedProject(null);
      setEditMode(false);
    };
    
    const deleteProject = (id: string) => {
      const project = projects.find(p => p.id === id);
      if (project) {
        if (project.status === 'in-progress') {
          addNotification(`Cannot delete active project ${project.name}`);
          return;
        }
        
        // Update assigned engineers' availability
        project.assignedEngineers.forEach(engId => {
          updateEmployee(engId, { availability: 'available' });
        });
        
        // Update client's projects
        const client = clients.find(c => c.id === project.clientId);
        if (client) {
          updateClient(client.id, {
            projects: client.projects.filter(pId => pId !== id)
          });
        }
        
        setProjects(projects.filter(p => p.id !== id));
        addNotification(`Project ${project.name} deleted`);
      }
    };
    
    // Rating system
    const updateEngineerRating = (engineerId: string, projectId: string, rating: number) => {
      const engineer = employees.find(emp => emp.id === engineerId);
      if (engineer) {
        const currentRating = engineer.rating || 0;
        const projectCount = engineer.activeProjects?.length || 1;
        const newRating = ((currentRating * projectCount) + rating) / (projectCount + 1);
        
        updateEmployee(engineerId, { 
          rating: Number(newRating.toFixed(1)),
          activeProjects: [...(engineer.activeProjects || []), projectId]
        });
      }
    };

    // Notification system with cleanup
    const addNotification = (message: string) => {
      const newNotification = {
        id: Date.now(),
        message,
        timestamp: new Date().toISOString(),
      };
      setNotifications(prev => [newNotification, ...prev].slice(0, 10)); // Keep only last 10 notifications
    };

    // Dashboard stats calculations
    const calculateDashboardStats = () => {
      return {
        totalEmployees: employees.length,
        totalClients: clients.length,
        activeProjects: projects.filter(p => p.status === 'in-progress').length,
        completedProjects: projects.filter(p => p.status === 'completed').length,
        totalBudget: projects.reduce((sum, p) => sum + p.budget, 0),
        avgProjectProgress: projects.length > 0 
          ? projects.reduce((sum, p) => sum + p.progress, 0) / projects.length 
          : 0,
        topPerformers: [...employees]
          .sort((a, b) => (b.rating || 0) - (a.rating || 0))
          .slice(0, 3)
      };
    };

    // Clear all dialogs
    const clearDialogs = () => {
      setEmployeeDialog(false);
      setClientDialog(false);
      setProjectDialog(false);
      setEditMode(false);
      setSelectedEmployee(null);
      setSelectedClient(null);
      setSelectedProject(null);
    };

    return (
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">HitoAI Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="h-6 w-6 cursor-pointer" />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </div>
            <Settings className="h-6 w-6 cursor-pointer" />
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="employees">Employees</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Employees</CardTitle>
                  <CardDescription>Total team members</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">{calculateDashboardStats().totalEmployees}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Active Projects</CardTitle>
                  <CardDescription>Currently in progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">{calculateDashboardStats().activeProjects}</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Total Budget</CardTitle>
                  <CardDescription>All active projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">${calculateDashboardStats().totalBudget.toLocaleString()}</div>
                </CardContent>
              </Card>

              {/* Top Performers */}
              <Card className="col-span-full md:col-span-1">
                <CardHeader>
                  <CardTitle>Top Performers</CardTitle>
                  <CardDescription>Highest rated employees</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {calculateDashboardStats().topPerformers.map((emp, index) => (
                      <div key={emp.id} className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>{emp.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <p className="font-medium">{emp.name}</p>
                          <p className="text-sm text-gray-500">{emp.role}</p>
                        </div>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span className="ml-1">{emp.rating?.toFixed(1) || '0.0'}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Notifications */}
              <Card className="col-span-full md:col-span-2">
                <CardHeader>
                  <CardTitle>Recent Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.slice(0, 5).map((notification) => (
                      <Alert key={notification.id}>
                        <AlertDescription>
                          {notification.message}
                          <span className="text-sm text-gray-500 ml-2">
                            {new Date(notification.timestamp).toLocaleTimeString()}
                          </span>
                        </AlertDescription>
                      </Alert>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Employees Tab */}
          <TabsContent value="employees">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Employee Management</CardTitle>
                <Dialog open={employeeDialog} onOpenChange={setEmployeeDialog}>
                  <DialogTrigger asChild>
                    <Button>Add Employee</Button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>
                        {editMode ? 'Edit Employee' : 'Add New Employee'}
                      </DialogTitle>
                    </DialogHeader>
                    <CreateEmployeeForm 
                      onSubmit={editMode ? 
                        (data) => updateEmployee(selectedEmployee!.id, data) : 
                        createEmployee}
                      onCancel={() => {
                        setEmployeeDialog(false);
                        setEditMode(false);
                        setSelectedEmployee(null);
                      }}
                      initialData={selectedEmployee}
                    />
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {employees.map((employee) => (
                    <div key={employee.id} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarFallback>{employee.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{employee.name}</h3>
                          <p className="text-sm text-gray-500">{employee.role}</p>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            employee.availability === 'available' ? 'bg-green-100 text-green-800' : 
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {employee.availability}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <span className="ml-1">{employee.rating?.toFixed(1) || '0.0'}</span>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setSelectedEmployee(employee);
                            setEditMode(true);
                            setEmployeeDialog(true);
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteEmployee(employee.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Clients Tab */}
          <TabsContent value="clients">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Client Management</CardTitle>
                <Dialog open={clientDialog} onOpenChange={setClientDialog}>
                  <DialogTrigger asChild>
                    <Button>Add Client</Button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>
                        {editMode ? 'Edit Client' : 'Add New Client'}
                      </DialogTitle>
                    </DialogHeader>
                    <CreateClientForm 
                      onSubmit={editMode ? 
                        (data) => updateClient(selectedClient!.id, data) : 
                        createClient}
                      onCancel={() => {
                        setClientDialog(false);
                        setEditMode(false);
                        setSelectedClient(null);
                      }}
                      initialData={selectedClient}
                    />
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clients.map((client) => (
                    <div key={client.id} className="flex items-center justify-between p-4 rounded-lg border">
                      <div>
                        <h3 className="font-medium">{client.company}</h3>
                        <p className="text-sm text-gray-500">{client.industry}</p>
                        <div className="mt-1">
                          <span className="text-xs text-gray-500">
                            Active Projects: {projects.filter(p => p.clientId === client.id && p.status === 'in-progress').length}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`px-2 py-1 rounded-full text-sm ${
                          client.status === 'active' ? 'bg-green-100 text-green-800' :
                          client.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {client.status}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setSelectedClient(client);
                            setEditMode(true);
                            setClientDialog(true);
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteClient(client.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Project Management</CardTitle>
                <Dialog open={projectDialog} onOpenChange={setProjectDialog}>
                  <DialogTrigger asChild>
                    <Button>Add Project</Button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>
                        {editMode ? 'Edit Project' : 'Create New Project'}
                      </DialogTitle>
                    </DialogHeader>
                    <CreateProjectForm 
                      onSubmit={editMode ? 
                        (data) => updateProject(selectedProject!.id, data) : 
                        createProject}
                      onCancel={() => {
                        setProjectDialog(false);
                        setEditMode(false);
                        setSelectedProject(null);
                      }}
                      initialData={selectedProject}
                      clients={clients}
                      employees={employees.filter(e => e.availability === 'available' || 
                        (selectedProject?.assignedEngineers.includes(e.id)))}
                    />
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="p-4 rounded-lg border">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">{project.name}</h3>
                          <p className="text-sm text-gray-500">
                            Client: {clients.find(c => c.id === project.clientId)?.company}
                          </p>
                          <div className="flex gap-2 mt-2">
                            {project.assignedEngineers.map(engId => {
                              const engineer = employees.find(e => e.id === engId);
                              return engineer ? (
                                <Avatar key={engId} className="h-6 w-6">
                                  <AvatarFallback className="text-xs">
                                    {engineer.name.slice(0, 2).toUpperCase()}
                                  </AvatarFallback>
                                </Avatar>
                              ) : null;
                            })}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-sm ${
                            project.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                            project.status === 'completed' ? 'bg-green-100 text-green-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {project.status}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                              setSelectedProject(project);
                              setEditMode(true);
                              setProjectDialog(true);
                            }}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => deleteProject(project.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="flex justify-between text-sm text-gray-500 mb-1">
                          <span>Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-sm text-gray-500 mt-2">
                          <span>Budget: ${project.budget.toLocaleString()}</span>
                          <span>Team: {project.assignedEngineers.length} members</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    );
};

export default MainDashboard;