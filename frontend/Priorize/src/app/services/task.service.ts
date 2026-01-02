import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TasksInterface } from '../interface/tasks-interface';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class TaskService {

 
  
  private apiUrl = `http://localhost:5000/Task`;
  constructor(private http: HttpClient) {}

  pegarTotalTask(): Observable<TasksInterface[]> {
    return this.http.get<TasksInterface[]>(this.apiUrl);
  }

  pegarTask(): Observable<TasksInterface[]> {
    return this.http.get<TasksInterface[]>(this.apiUrl);
  }

  criarTask(task: TasksInterface): Observable<any> {
    return this.http.post(this.apiUrl, task);
  }

  attStatus(novostatus: string, id: number):Observable<any>{
    
    return this.http.patch(`${this.apiUrl}/${id}`, {status: novostatus});
  }

  removeTask(id: number) {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete(url);
  }
}
