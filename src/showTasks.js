const tasksDiv = document.querySelector(".tasks");

export function showTasks(tasks) {
  tasks.forEach((task) => {
    switch (task.type) {
      case "Task":
        console.log("a normal task");
        break;
      case "TaskWithSubtasks":
        console.log("task with some subtasks");
        break;
      case "SubTask":
        console.log("it shouldnt be here???");
        break;
    }
  });
}
