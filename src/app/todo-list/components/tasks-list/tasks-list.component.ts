import { Component, OnInit } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';
import { TodoStatus, TodoTask } from '../../models/todo-list';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
	myTasks : TodoTask[] = [];
	private todoListService: TodoListService;
	TodoStatus = TodoStatus;
	ToDoStatusList = Object.values(TodoStatus);
	columnsToDisplay = ['title', 'status'];
	constructor(
		todoListService: TodoListService
	) {
		this.todoListService = todoListService;
	}

	ngOnInit() {
		this.todoListService.GetTasks().subscribe((tasks: TodoTask[]) => {
			this.myTasks = tasks;
		});

		this.todoListService.addTodoItem({ title: 'test', status: TodoStatus.AwaitingValidation, 'priority': 0, text: 'lorem ipsum'});
		this.todoListService.addTodoItem({ title: 'test 2', status: TodoStatus.AwaitingValidation, 'priority': 0, text: 'lorem'});
		this.todoListService.addTodoItem({ title: 'test 3', status: TodoStatus.AwaitingValidation, 'priority': 0, text: 'lorem'});

	}

	getStatusString(todoStatus: TodoStatus) : string {
		return this.todoListService.GetTaskStatusString(todoStatus);
	}

	changeStatus(todoItem: TodoTask, todoStatus: TodoStatus) {
		this.todoListService.ChangeTodoItemStatus(todoItem, todoStatus);
	}
}
