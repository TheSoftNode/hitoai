import { useState } from 'react';
// @ts-ignore
import { Bell, Users, Briefcase, UserPlus, Settings, Search, MoreVertical, AlertTriangle, CheckCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const AdminDashboard = () => {
  // const [activeTab, setActiveTab] = useState('overview');
  // @ts-ignore
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'new-client', message: 'New client registration: Tech Solutions Inc.', time: '5m ago' },
    { id: 2, type: 'task-complete', message: 'Sarah completed the AI Model Training task', time: '1h ago' },
  ]);

  // Sample data - replace with real data in production
  const clients = [
    { id: 1, name: 'Tech Solutions Inc.', status: 'active', projects: 3, dateJoined: '2024-01-15' },
    { id: 2, name: 'Global Systems', status: 'pending', projects: 1, dateJoined: '2024-02-01' },
  ];

  const employees = [
    { id: 1, name: 'Sarah Chen', role: 'AI Engineer', tasksCompleted: 15, activeProjects: 2 },
    { id: 2, name: 'Michael Lee', role: 'Data Scientist', tasksCompleted: 12, activeProjects: 3 },
  ];

  const projects = [
    { id: 1, name: 'AI Model Optimization', client: 'Tech Solutions Inc.', status: 'in-progress', progress: 75 },
    { id: 2, name: 'Data Pipeline Setup', client: 'Global Systems', status: 'pending', progress: 30 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#003366] via-[#002244] to-[#001a33] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">HitoAI Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </div>
            <Settings className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white/10 backdrop-blur-lg">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="employees">Employees</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Quick Stats */}
              <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
                <CardHeader>
                  <CardTitle>Active Clients</CardTitle>
                  <CardDescription className="text-gray-300">Total active clients</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">{clients.length}</div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
                <CardHeader>
                  <CardTitle>Team Members</CardTitle>
                  <CardDescription className="text-gray-300">Total employees</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">{employees.length}</div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
                <CardHeader>
                  <CardTitle>Active Projects</CardTitle>
                  <CardDescription className="text-gray-300">Current projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">{projects.length}</div>
                </CardContent>
              </Card>

              {/* Recent Notifications */}
              <Card className="md:col-span-2 lg:col-span-3 bg-white/10 backdrop-blur-lg border-none text-white">
                <CardHeader>
                  <CardTitle>Recent Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                        {notification.type === 'new-client' ? (
                          <UserPlus className="h-8 w-8 text-blue-400" />
                        ) : (
                          <CheckCircle className="h-8 w-8 text-green-400" />
                        )}
                        <div>
                          <p className="text-sm text-gray-300">{notification.time}</p>
                          <p className="text-white">{notification.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Clients Tab */}
          <TabsContent value="clients">
            <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Client Management</CardTitle>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Add New Client
                </button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clients.map((client) => (
                    <div key={client.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                      <div>
                        <h3 className="font-medium">{client.name}</h3>
                        <p className="text-sm text-gray-300">Joined: {client.dateJoined}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          client.status === 'active' ? 'bg-green-500/20 text-green-300' : 'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {client.status}
                        </span>
                        <button className="p-2 hover:bg-white/10 rounded-lg">
                          <MoreVertical className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Employees Tab */}
          <TabsContent value="employees">
            <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Employee Management</CardTitle>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Add New Employee
                </button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {employees.map((employee) => (
                    <div key={employee.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                      <div>
                        <h3 className="font-medium">{employee.name}</h3>
                        <p className="text-sm text-gray-300">{employee.role}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm">Tasks: {employee.tasksCompleted}</p>
                          <p className="text-sm text-gray-300">Active: {employee.activeProjects}</p>
                        </div>
                        <button className="p-2 hover:bg-white/10 rounded-lg">
                          <MoreVertical className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <Card className="bg-white/10 backdrop-blur-lg border-none text-white">
              <CardHeader>
                <CardTitle>Project Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="p-4 rounded-lg bg-white/5">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-medium">{project.name}</h3>
                          <p className="text-sm text-gray-300">{project.client}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          project.status === 'in-progress' ? 'bg-blue-500/20 text-blue-300' : 'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 mt-4">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <p className="text-sm text-right mt-1">{project.progress}%</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;