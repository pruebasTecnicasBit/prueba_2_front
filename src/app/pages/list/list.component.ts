import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentComponent } from '../../components/department/department.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { EmployeeComponent } from '../../components/employee/employee.component';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule, DepartmentComponent, ModalComponent, EmployeeComponent], 
  templateUrl: './list.component.html',
})
export class ListComponent {
  view: 'departments' | 'employees' = 'departments';
  modalIsOpen = false;
  modalMode: 'department' | 'employee' = 'department';

  

  openModal(mode: 'department' | 'employee') {
    this.modalMode = mode;
    this.modalIsOpen = true;
  }

  closeModal() {
    this.modalIsOpen = false;
  }
}
