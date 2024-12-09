// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-modal',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './modal.component.html',
// })
// export class ModalComponent {
//   @Input() mode: 'department' | 'employee' = 'department'; // Define mode como @Input
//   @Output() close = new EventEmitter<void>();

//   department = { codigo: 0, nombre: '' };
//   employee = {
//     codigo: 0,
//     nombre: '',
//     apellido1: '',
//     apellido2: '',
//     codigo_departamento: 0,
//   };

//   save() {
//     if (this.mode === 'department') {
//     } else if (this.mode === 'employee') {
//     }
//     this.close.emit();
//   }
// }

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../services/department/department.service';
import { EmployeeService } from '../../services/employee/employee.service';
import { Department } from '../../models/department.model';
import { Employee } from '../../models/employee.model';
@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() mode: 'department' | 'employee' = 'department'; // Define mode como @Input
  @Output() close = new EventEmitter<void>();

  department: Department = { departamentCode: 0, name: '' };
  employee: Employee = {
    code: 0,
    name: '',
    lastname1: '',
    lastname2: '',
    departamentCode: '',
  };

  constructor(private departmentService: DepartmentService, private employeeService: EmployeeService) {}

  save() {
    if (this.mode === 'department') {
      this.departmentService.createDepartment(this.department).subscribe(
        (data) => {
          console.log('Department created:', data);
          this.close.emit();
        },
        (error) => console.error('Error creating department:', error)
      );
    } else if (this.mode === 'employee') {
      this.employeeService.createEmployee(this.employee).subscribe(
        (data) => {
          console.log('Employee created:', data);
          this.close.emit();
        },
        (error) => console.error('Error creating employee:', error)
      );
    }
  }
}
