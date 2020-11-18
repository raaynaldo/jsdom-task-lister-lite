document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // let newArr = document.getElementsByTagName("form");
  // console.log(newArr);
  // console.log(newArr[0]);

  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const findUl = document.getElementsByTagName("ul")[0];

    let newLi = document.createElement("li");
    newLi.innerText = event.target.newTaskDescription.value + " ";

    let newButton = document.createElement("button");
    newButton.innerText = "X";
    newButton.addEventListener("click", function (event) {
      event.target.parentElement.remove();
    });

    newLi.appendChild(newButton);
    findUl.appendChild(newLi);
  });
});
