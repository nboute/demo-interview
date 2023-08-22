export interface TodoTask {
	title: string;
	status: TodoStatus;
	priority: number;
	text: string;


}

export enum TodoStatus {
	Pending = 'pending',
	AwaitingValidation = 'awaitingValidation',
	Completed = 'completed',
}
