const logoPage = document.getElementById("logoPage");
const todoPage = document.getElementById("todoPage");
const enterBtn = document.getElementById("enterBtn");

const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const happyMsg = document.getElementById("happyMsg");

let tasks = [];

// PAGE CHANGE
enterBtn.addEventListener("click", () => {
  logoPage.classList.remove("active");
  todoPage.classList.add("active");
});

// ADD TASK
addBtn.addEventListener("click", () => {
  let text = taskInput.value.trim();
  if (text === "") return;

  tasks.push({ text, done: false });
  render();
  taskInput.value = "";
});

// RENDER TASKS
function render(){
  taskList.innerHTML = "";

  tasks.forEach((t, i) => {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.className = "text" + (t.done ? " completed" : "");
    span.textContent = t.text;
    span.onclick = () => toggle(i);

    let actions = document.createElement("div");
    actions.className = "actions";

    let tick = document.createElement("button");
    tick.className = "tick";
    tick.textContent = "✔";
    tick.onclick = () => toggle(i);

    let del = document.createElement("button");
    del.className = "delete";
    del.textContent = "✖";
    del.onclick = () => remove(i);

    actions.appendChild(tick);
    actions.appendChild(del);

    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);
  });
}

// COMPLETE TASK
function toggle(i){
  tasks[i].done = !tasks[i].done;
  render();
  if (tasks[i].done) {
    happyMsg.style.display = "block";
    setTimeout(() => happyMsg.style.display = "none", 1500);
  }
}

// DELETE TASK
function remove(i){
  tasks.splice(i, 1);
  render();
}
