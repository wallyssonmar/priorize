import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { TasksInterface } from 'src/app/interface/tasks-interface';

@Component({
  selector: 'app-tela-dashboard',
  templateUrl: './tela-dashboard.component.html',
  styleUrls: ['./tela-dashboard.component.css'],
})
export class TelaDashboardComponent {
  tasks: TasksInterface[] = [];
  totalTask: number = 0;
  pendentes = 0;
  concluidas = 0;
  categoria1 = 0;
  categoria2 = 0;
  categoria3 = 0;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.pegarStatus();
    this.carregarTask();
  }

  pegarStatus() {
    this.pendentes = this.tasks.filter((t) => t.status === 'Pendente').length;
    this.concluidas = this.tasks.filter((t) => t.status === 'Concluído').length;
  }

  pegarCategoria() {
    this.categoria1 = this.tasks.filter(
      (t) => t.categoria === 'Categoria 1'
    ).length;
    this.categoria2 = this.tasks.filter(
      (t) => t.categoria === 'Categoria 2'
    ).length;
    this.categoria3 = this.tasks.filter(
      (t) => t.categoria === 'Categoria 3'
    ).length;
  }

  carregarTask() {
    this.taskService.pegarTask().subscribe({
      next: (task) => {
        this.tasks = task;
        this.totalTask = task.length;
        this.pegarStatus();
        this.pegarCategoria();
      },
      error: (erro) => {
        console.error('Erro ao buscar tasks:', erro);
      },
    });
  }
}
