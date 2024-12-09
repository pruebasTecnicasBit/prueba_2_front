import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  private EmployeeService  = inject(EmployeeService);
  employees: Employee[] = [];

  constructor() {
    this.EmployeeService.getEmployee().subscribe((data: Employee[]) => (this.employees = data));
  }
}
