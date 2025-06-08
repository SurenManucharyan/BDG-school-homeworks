console.log("Task2 \n");

class TaskManager {
    constructor() {
      this.arr = [];
    }
  
    addTask(value) {
      const newTask = {
        title: value,
        completed: false,
      };
      this.arr.push(newTask);
    }
  
    completeTask(value) {
      this.arr.forEach((el) => {
        if (el.title === value) {
          el.completed = true;
        }
      });
    }
  
    getCompletedTasks() {
      return this.arr.filter((el) => el.completed === true);
    }
  
    printTasks() {
      console.log(this.arr);
    }
  }
  
  const manager = new TaskManager();
  manager.addTask("Wash dishes1");
  manager.addTask("Wash dishes2");
  manager.addTask("Wash dishes3");
  manager.addTask("Wash dishes4");
  manager.addTask("Wash dishes");
  manager.addTask("Do homework");
  manager.completeTask("Wash dishes");
  console.log(manager.getCompletedTasks()); // Shows completed tasks
  manager.printTasks();