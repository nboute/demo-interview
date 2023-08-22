import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoStatus, TodoTask } from '../todo-list/models/todo-list';

@Injectable({
	providedIn: 'root'
})
export class TodoListService {

	todoList : TodoTask[] = [];
	todoListSubject : BehaviorSubject<TodoTask[]> = new BehaviorSubject<TodoTask[]>([]);
	constructor() { }

	addTodoItem(todoItem : TodoTask) {
		this.todoList.push(todoItem);
		this.todoListSubject.next(this.todoList);
	}

	removeTodoItem(todoItem : TodoTask) {
		this.todoList = this.todoList.filter((item) => { todoItem.title !== item.title });
		this.todoListSubject.next(this.todoList);
	}

	ChangeTodoItemStatus(todoItem : TodoTask, todoStatus : TodoStatus) {
		this.todoList = this.todoList.map((item) => {
			if (todoItem.title === item.title) {
				item.status = todoStatus;
				console.log(item.status);
			}
			return item;
		});
		this.todoListSubject.next(this.todoList);
	}

	GetTasks() : BehaviorSubject<TodoTask[]> {
		return this.todoListSubject;
	}

	public GetTaskStatusString(todoStatus : TodoStatus) : string {
		let value = '';

		switch (todoStatus) {
			case TodoStatus.Pending:
				value = 'Pending';
				break;
			case TodoStatus.AwaitingValidation:
				value = 'Awaiting validation';
				break;
			case TodoStatus.Completed:
				value = 'Completed';
				break;
			default:
				value = 'Unknown';
				break;
		}
		return value;
	}
}
