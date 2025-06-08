console.log("Task1 \n");
class Student {
  constructor(name, grades) {
    this.name = name;
    this.grades = grades;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }
  printGrades() {
    this.grades.forEach((el) => {
      console.log(el);
    });
  }
}

let student = new Student("Gago", [1, 2, 3]);
student.addGrade(4);
student.printGrades();