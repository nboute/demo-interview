import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './views/todo-list/todo-list.component';
import { CreationFormComponent } from './components/creation-form/creation-form.component';



const routes: Routes = [
  {
    path: '',
    component: TodoListComponent
  },
  {
	path: 'create',
	component: CreationFormComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TodoListRoutingModule { }
