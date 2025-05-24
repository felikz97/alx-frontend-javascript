// js/main.ts

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// DOM rendering
const output = document.getElementById('output')!;
const employees = [createEmployee(200), createEmployee(1000), createEmployee('$500')];

employees.forEach((employee, index) => {
  const div = document.createElement('div');
  const role = employee instanceof Teacher ? 'Teacher' : 'Director';
  div.innerText = `Employee ${index + 1} is a ${role}`;
  output.appendChild(div);
});

//6 Creating functions specific to employees-------------------------------------------------

const testResult1 = executeWork(createEmployee(200));
const testResult2 = executeWork(createEmployee(1000));

const r1 = document.createElement('div');
r1.innerText = testResult1;
output.appendChild(r1);

const r2 = document.createElement('div');
r2.innerText = testResult2;
output.appendChild(r2);

function executeWork(employee: Teacher | Director): string {
  if (employee instanceof Teacher) {
    return employee.workTeacherTasks();
  }
  return employee.workDirectorTasks();
}

//7. String literal types:  Render teachClass results to the DOM-----------------------------
type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}
const mathDiv = document.createElement('div');
mathDiv.innerText = teachClass('Math');
output.appendChild(mathDiv);

const historyDiv = document.createElement('div');
historyDiv.innerText = teachClass('History');
output.appendChild(historyDiv);
