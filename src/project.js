export class Project {
  constructor(name, description, tasks) {
    this.name = name;
    this.description = description;
    this.tasks = tasks;
  }

  get info() {
    return `This project is called "${this.name}" and has "${this.description}" description. It has ${this.tasks.length} tasks.`;
  }
}
