import "./reset.css";

import "./main.css";

import { Project } from "./project";
import { MainTask, SubTask } from "./task";

// const testSubtasksAsText = [
//   ["Turn AC on", "22 C is the best.", "", 4, ""],
//   ["Make weak milk coffee", "Need to be careful with caffeine before doing next step!", "", 3, ""],
//   ["Take Modafinil", "It is what it is", "", 5, "Should kick in in about 2 hours"],
// ];

const preparingSubtasks = [new SubTask("Turn AC on", "22 C is the best.", "", 4, ""), new SubTask("Make weak milk coffee", "Need to be careful with caffeine before doing next step!", "", 3, ""), new SubTask("Take Modafinil", "It is what it is", "", 5, "Should kick in in about 2 hours")];

preparingSubtasks.forEach((subtask) => {
    
})

// const defaultLearningTasks = [
//   ["Prepare for learning", "Good preparation is always worth it", ""],
//   ["Read last chapter", "Check if you know what you learned before", "", 5, "It might seem boring but it's important"],
//   ["Do 1 Exercism and 1 CodeWars task", "", "", 4, "It will pay off some time."],
// ];

// // const defaultProjects = [
// //   ["Learning", "Tasks for The Odin Project", ""],
// //   ["Working", "Tasks for my job", ""],
// // ];

// // let projects = [];

// // defaultProjects.forEach((data, index) => {
// //   projects.push(new Project(...data));
// // });

// // projects.forEach((project) => {
// //   console.log(project.info);
// // });

// let exampleMainTask = new MainTask("Main Task 1", "DDD", "", 5, "None", "subtasks array");

// console.log(exampleMainTask);

// let exampleSubTask = new SubTask("Sub Task 1", "DDD", "", 5, "None");

// console.log(exampleSubTask);

// // let exampleSubTask = new SubTask();

// // let exampleMainTask = new MainTask();
