import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/views/todo-list/todo-list.component';
import { AboutComponent } from './about/views/about/about.component';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule)
	},
	{
		path: 'home',
		loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule)
	},
	{
		path: 'about',
		component: AboutComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
