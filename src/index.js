let todos = [];
let priority = {
  red: 1,
  yellow: 2,
  green: 3,
};

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const taskDescription = event.target.newTaskDescription.value;
    const color = event.target.priority.value;

    todos.push({
      description: taskDescription,
      priority: priority[color],
      color: color,
    });

    //sort the array of todos
    todos.sort(function (a, b) {
      return a.priority - b.priority;
    });

    //delete all li
    let liList = document.querySelectorAll("li");
    liList.forEach(function (li) {
      li.remove();
    });

    //create all li again
    todos.forEach(function (todo) {
      appendToTodoList(todo.description, todo.color);
    });
  });
});

function appendToTodoList(taskDescription, color) {
  const findUl = document.getElementsByTagName("ul")[0];

  let newLi = document.createElement("li");
  newLi.innerText = taskDescription + " ";
  newLi.style.color = color;

  let newButton = document.createElement("button");
  newButton.innerText = "X";
  newButton.addEventListener("click", function (event) {
    event.target.parentElement.remove();

    // Failed from here damn!
    let todo = todos.find((todo) => {
      return todo.description === taskDescription && todo.color === color;
    });
    const idx = todos.indexOf(todo);
    todos.splice(idx, 1);
  });

  newLi.appendChild(newButton);
  findUl.appendChild(newLi);
}
