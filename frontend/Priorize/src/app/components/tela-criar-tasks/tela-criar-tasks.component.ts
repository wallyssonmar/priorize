import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';



import { TasksInterface } from 'src/app/interface/tasks-interface';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-tela-criar-tasks',
  templateUrl: './tela-criar-tasks.component.html',
  styleUrls: ['./tela-criar-tasks.component.css'],
  providers: [ TaskService, MessageService]
})
export class TelaCriarTasksComponent {

  constructor(private TaskService: TaskService,private messageService: MessageService) {}

  nome: string = '';
  detalhes: string = '';
  status: string = "Pendente";

  categorySelect: any[] = [
    { label: 'Categoria 1', categoria: 'Categoria 1' },
    { label: 'Categoria 2', categoria: 'Categoria 2' },
    { label: 'Categoria 3', categoria: 'Categoria 3' },
  ];

  categoria: string = 'off';

  ngOnInit() {}

  mandarForm(){
   let task: TasksInterface = {
    nome: this.nome,
    detalhes: this.detalhes,
    categoria: this.categoria,
    status: this.status,
    
    
   }
   this.TaskService.criarTask(task).subscribe({
    next: (dados) => {
      this.show()
      this.nome = '';
      this.categoria = '';
      this.detalhes = '';
    },
    error: (erro) => {
      console.log("erro", erro)
    }
    
   })
  }

  show() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Task criada' });
    }
}
