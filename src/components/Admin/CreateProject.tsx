import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
import { Employee } from "@/lib/types";
import { Project } from "@/lib/types";

interface CreateProjectFormProps {
  onSubmit: (project: any) => void;
  onCancel: () => void;
  clients: { id: string; company: string }[];
  employees: Employee[];
  initialData?: Project | null;
}

const CreateProjectForm: React.FC<CreateProjectFormProps> = ({ onSubmit, onCancel, clients, employees }) => {
    const [formData, setFormData] = useState<{
      name: string;
      clientId: string;
      description: string;
      budget: string;
      priority: string;
      assignedEngineers: string[];
      startDate: string;
      endDate: string;
    }>({
      name: '',
      clientId: '',
      description: '',
      budget: '',
      priority: 'medium',
      assignedEngineers: [],
      startDate: '',
      endDate: '',
    });
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit({
        ...formData,
        id: Date.now().toString(),
        status: 'planning',
        progress: 0,
        budget: parseFloat(formData.budget),
      });
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Project Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="client">Client</Label>
          <Select
            value={formData.clientId}
            onValueChange={(value) => setFormData({ ...formData, clientId: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select client" />
            </SelectTrigger>
            <SelectContent>
              {clients.map((client) => (
                <SelectItem key={client.id} value={client.id}>
                  {client.company}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="engineers">Assigned Engineers</Label>
          <Select
            value={formData.assignedEngineers[0] || ''}
            onValueChange={(value) => setFormData({ 
              ...formData, 
              assignedEngineers: [...formData.assignedEngineers, value]
            })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Assign engineers" />
            </SelectTrigger>
            <SelectContent>
              {employees
                .filter(emp => emp.availability === 'available')
                .map((employee) => (
                  <SelectItem key={employee.id} value={employee.id}>
                    {employee.name} - {employee.role}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="budget">Budget</Label>
          <Input
            id="budget"
            type="number"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="priority">Priority</Label>
          <Select
            value={formData.priority}
            onValueChange={(value) => setFormData({ ...formData, priority: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="startDate">Start Date</Label>
            <Input
              id="startDate"
              type="date"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              required
            />
          </div>
          <div>
            <Label htmlFor="endDate">End Date</Label>
            <Input
              id="endDate"
              type="date"
              value={formData.endDate}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
              required
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Create Project</Button>
        </DialogFooter>
      </form>
    );
  };

  export default CreateProjectForm;