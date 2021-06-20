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

  ngOnInit(): void {
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
