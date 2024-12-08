import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee.model';


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly apiUrl = 'http://localhost:3000/employer';

  private http = inject(HttpClient);

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/get-all-employers`);
  }

  getEmployeeByCode(codigo: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${codigo}`);
  }

  createEmployee(Employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(
      `${this.apiUrl}/create-employer`,
      Employee
    );
  }

  updateEmployee(
    codigo: number,
    Employee: Partial<Employee>
  ): Observable<Employee> {
    return this.http.put<Employee>(
      `${this.apiUrl}/update-employers/${codigo}`,
      Employee
    );
  }

  deleteEmployee(
    codigo: number
  ): Observable<{ message: string; departamento: Employee }> {
    return this.http.delete<{ message: string; departamento: Employee }>(
      `${this.apiUrl}/delete-employer/${codigo}`
    );
  }
  // constructor() { }
}
