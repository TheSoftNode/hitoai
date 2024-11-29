import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
    
    DialogFooter,
  } from "@/components/ui/dialog";
import { Button } from "../ui/button";


interface CreateEmployeeFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

const CreateEmployeeForm: React.FC<CreateEmployeeFormProps> = ({ onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
      name: '',
      role: '',
      email: '',
      skills: '',
    });
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit({
        ...formData,
        id: Date.now().toString(),
        rating: 5,
        activeProjects: [],
        tasksCompleted: 0,
        availability: 'available',
        skills: formData.skills.split(',').map(skill => skill.trim()),
      });
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="role">Role</Label>
          <Input
            id="role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="skills">Skills (comma-separated)</Label>
          <Input
            id="skills"
            value={formData.skills}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
            required
          />
        </div>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Create Employee</Button>
        </DialogFooter>
      </form>
    );
  };

export default CreateEmployeeForm;
  