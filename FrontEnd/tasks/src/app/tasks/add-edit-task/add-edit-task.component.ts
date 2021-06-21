import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() tk:any;
  id: string | undefined;
  title: string | undefined;
  description: string | undefined;
  concluded: string | undefined;
  

  ngOnInit(): void {
    this.id = this.id;
    this.title = this.title;
    this.description = this.description;
    this.concluded = this.concluded;
  }

  addTask(){
    var val = {
      id: this.id,
      title: this.title,
      description: this.description,
      concluded: this.concluded
    };
    console.log(val.id);
    this.service.addTask(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateTask(){
    var val = {
      id: this.id,
      title: this.title,
      description: this.description,
      concluded: this.concluded
    };
    console.log(val.id);
    this.service.updateTask(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
