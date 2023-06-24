import "./reset.css";

import "./main.css";

import { Project } from "./project";
import { Task, TaskWithSubtasks, SubTask } from "./task";
import { showProject } from "./showProject";

let ST1 = new SubTask("Turn AC on", "22 C is the best.", "", 4, "");
let ST2 = new SubTask("Make weak milk coffee", "Need to be careful with caffeine before doing next step!", "", 3, "");
let ST3 = new SubTask("Take Modafinil", "It is what it is", "", 5, "Should kick in in about 2 hours");

let ST4 = new SubTask("Do 1 Exercism task", "", "", 2, "");

let ST5 = new SubTask("Do 1 CodeWars task", "", "", 3, "");

let T1 = new TaskWithSubtasks("Prepare for learning", "Good preparation is always worth it", "", 5, "", [ST1, ST2, ST3]);

let T2 = new Task("Read last chapter of TOP", "Check if you know what you learned before", "", 5, "It might seem boring but it's important");

let T3 = new TaskWithSubtasks("Do JS exercises", "", "", 4, "It will pay off in future", [ST4, ST5]);

let T4 = new Task("Start learning", "Open next chapter and start reading", "", 5, "");

console.log(T1);

console.log(T2);

console.log(T3);

console.log(T4);

let learningProject = new Project("Learning", "TOP is difficult but worth it.", [T1, T2, T3, T4]);

console.log(learningProject.info);

showProject(learningProject);
