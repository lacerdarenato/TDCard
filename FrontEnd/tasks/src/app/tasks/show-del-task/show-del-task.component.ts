import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-del-task',
  templateUrl: './show-del-task.component.html',
  styleUrls: ['./show-del-task.component.css']
})
export class ShowDelTaskComponent implements OnInit {

  constructor(private service:SharedService) { }

  TaskList:any;

  ModalTitle?: string;
  ActivateAddEditTaskComp: boolean=false;
  tk:any;

  ngOnInit(): void {
    this.refreshTaskList();
  }

  addClick(){
    this.tk={
      id:0,
      title:"",
      description:"",
      concluded:""
    }
    this.ModalTitle="Adicionar Tarefa";
    this.ActivateAddEditTaskComp=true;
  }

  editClick(item: any){
    this.tk = item;
    console.log(item);
    this.ModalTitle="Editar Tarefa";
    this.ActivateAddEditTaskComp=true;
  }

  deleteClick(item: any){
    if(confirm("Deseja Mesmo Deletar?")){
      this.service.deleteTask(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshTaskList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditTaskComp=false;
    this.refreshTaskList();

  }

  refreshTaskList(){
    this.service.getTaskList()
    .subscribe(
      (data)=> {
        this.TaskList = data;
      }
    );
  }

}
