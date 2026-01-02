import { Component, input } from '@angular/core';
import { MessageService } from 'primeng/api';

import { TasksInterface } from 'src/app/interface/tasks-interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tela-tasks',
  templateUrl: './tela-tasks.component.html',
  styleUrls: ['./tela-tasks.component.css'],
  providers: [MessageService]
})
export class TelaTasksComponent {
  tasks: TasksInterface[] = [];
  searchTerm: string = '';
  tasksOriginais: any[] = [];

  statusTask: string = '';
  

  constructor(private taskService: TaskService, private messageService: MessageService) {}

  first = 0;

  rows = 10;

  ngOnInit() {
    this.carregarTask();
  }

  filtrarTasks() {
    const termo = this.searchTerm.toLowerCase();
    this.tasks = this.tasksOriginais.filter((task) =>
      task.nome.toLowerCase().includes(termo)
    );
  }

  carregarTask() {
    this.taskService.pegarTask().subscribe({
      next: (task) => {
        this.tasks = task;
        this.tasksOriginais = task;
      },
      error: (erro) => {
        console.error('Erro ao buscar tasks:', erro);
      },
    });
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: { first: number; rows: number }) {
    this.first = event.first;
    this.rows = event.rows;
  }

  isLastPage(): boolean {
    return this.tasks ? this.first === this.tasks.length - this.rows : true;
  }

  isFirstPage(): boolean {
    return this.tasks ? this.first === 0 : true;
  }

  atualizarStatus(novostatus: string, id: number) {
    this.taskService.attStatus(novostatus, id).subscribe({
      next: () => {
        this.carregarTask();
        this.show()
        console.log('Tarefa concluida');
      },
      error: (erro) => {
        console.log('Não foi possível alterar', erro);
      },
    });
  }
  show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Task concluída' });
    }

  excluirTask(id: number) {
    this.taskService.removeTask(id).subscribe({
      next: () => {
        console.log('Tarefa excluída');
        this.carregarTask();
      },
      error: (erro) => {
        console.error('Erro ao excluir', erro);
      },
    });
  }
}
