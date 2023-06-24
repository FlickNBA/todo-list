export class Project {
  constructor(name, description, todos) {
    this.name = name;
    this.description = description;
    this.todos = todos;
  }

  get info() {
    return `This project is called "${this.name}" and has "${this.description}" description.`;
  }
}
