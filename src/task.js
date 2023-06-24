export class Task {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.type = "Task";
  }

  get info() {
    return `Task: ${this.title}
Description: ${this.description}
Due date: ${this.dueDate}
Priority: ${this.priority}/5
Notes: ${this.notes}
Type: ${this.type}`;
  }
}

export class TaskWithSubtasks extends Task {
  constructor(title, description, dueDate, priority, notes, subtasks) {
    super(title, description, dueDate, priority, notes);
    this.subtasks = subtasks;
    this.type = "TaskWithSubtasks";
  }
}

export class SubTask extends Task {
  constructor(title, description, dueDate, priority, notes) {
    super(title, description, dueDate, priority, notes);
    this.type = "SubTask";
  }
}
