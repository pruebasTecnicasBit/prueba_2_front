import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../../models/department.model';


@Injectable({
  providedIn: 'root',
})


export class DepartmentService {
  private readonly apiUrl = 'http://localhost:3000/departament';

  private http = inject(HttpClient);

  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.apiUrl}/get-all-departaments`);
  }

  getDepartmentByCode(codigo: number): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}/${codigo}`);
  }

  createDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(`${this.apiUrl}/create-departaments`, department);
  }

  updateDepartment(codigo: number, department: Partial<Department>): Observable<Department> {
    return this.http.put<Department>(`${this.apiUrl}/update-departaments/${codigo}`, department);
  }

  deleteDepartment(codigo: number): Observable<{ message: string; departamento: Department }> {
    return this.http.delete<{ message: string; departamento: Department }>(`${this.apiUrl}/delete-departament/${codigo}`);
  }
}
