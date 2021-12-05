var pageContentEl= document.querySelector("#page-content");
var taskIdCOunter = 0;
var fromEl = docu.querySelector("#task-form");
var tasksInProgressEl = document.querySelector("#tasks-in-progress");
var tasksCompletedEl = document.querySelector("#tasks-completed");

var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var tasks = [
  {
    id: "taskIdCounter",
    name: "",
    type: "",
    status: ""
  },
];
//if data display something else or nothing load data function 

var taskFormHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  var isEdit = formEl.hasAttribute("data-task-id");
