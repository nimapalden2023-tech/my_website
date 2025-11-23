// To-Do List (only if #todo exists)
if(document.getElementById("todo-list")){
  let tasks = [];
  const todoList = document.getElementById("todo-list");
  const addTaskBtn = document.getElementById("add-task-btn");
  const newTaskInput = document.getElementById("new-task");
  const todoProgress = document.getElementById("todo-progress");

  function renderTasks(){
    todoList.innerHTML = "";
    let doneCount = 0;
    tasks.forEach((task,index)=>{
      const li=document.createElement("li");
      const checkbox=document.createElement("input");
      checkbox.type="checkbox";
      checkbox.checked=task.done;
      checkbox.addEventListener("change",()=>{
        tasks[index].done=checkbox.checked;
        renderTasks();
        updateChart();
      });
      li.appendChild(checkbox);
      li.appendChild(document.createTextNode(" "+task.name));
      todoList.appendChild(li);
      if(task.done) doneCount++;
    });
    todoProgress.textContent = tasks.length?Math.round(doneCount/tasks.length*100)+"%":"0%";
  }

  addTaskBtn.addEventListener("click",()=>{
    const val=newTaskInput.value.trim();
    if(val){ tasks.push({name:val,done:false}); newTaskInput.value=""; renderTasks(); updateChart();}
  });

  renderTasks();
}

// Repeat similar wrapping for Period Tracker, Hydration, Mood, Chart...
