import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationFormComponent } from './components/creation-form/creation-form.component';
import { TodoListComponent } from './views/todo-list/todo-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    CreationFormComponent,
	TodoListComponent,
 TasksListComponent,
  ],
  imports: [
	MatCardModule,
    CommonModule,
	TodoListRoutingModule,
	MatButtonModule,
	MatTableModule,
	MatSortModule,
	MatSelectModule,
	MatDialogModule,
  ]
})
export class TodoListModule { }
