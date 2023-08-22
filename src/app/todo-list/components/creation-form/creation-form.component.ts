import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TodoTask } from '../../models/todo-list';

@Component({
  selector: 'app-creation-form',
  templateUrl: './creation-form.component.html',
  styleUrls: ['./creation-form.component.scss']
})
export class CreationFormComponent {
	constructor(public dialogRef: MatDialogRef<CreationFormComponent>,
		@Inject(MAT_DIALOG_DATA) public data: TodoTask) { }
}
