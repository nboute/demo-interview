import { Component, Inject } from '@angular/core';
import { CreationFormComponent } from '../../components/creation-form/creation-form.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TodoTask } from '../../models/todo-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
	constructor(
		public dialog : MatDialog
	) {}

	openDialog(): void {
		const dialogRef = this.dialog.open(CreationFormComponent, {});
	}
}
