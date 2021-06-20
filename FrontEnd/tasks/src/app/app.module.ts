import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { ShowDelTaskComponent } from './tasks/show-del-task/show-del-task.component';
import { AddEditTaskComponent } from './tasks/add-edit-task/add-edit-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ShowDelTaskComponent,
    AddEditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
