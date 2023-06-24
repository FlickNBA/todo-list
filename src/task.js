class Task {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.type = "Task";
  }
  // I won't be used
}

export class MainTask extends Task {
  constructor(title, description, dueDate, priority, notes, subtasks) {
    super(title, description, dueDate, priority, notes);
    this.subtasks = subtasks;
    this.type = "MainTask";
  }
}

export class SubTask extends Task {
  constructor(title, description, dueDate, priority, notes, subtasks) {
    super(title, description, dueDate, priority, notes);
    this.subtasks = subtasks;
    this.type = "SubTask";
  }
}
