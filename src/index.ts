class School {
  directions: any[] = [];

  addDirection(direction: any) {
    this.directions.push(direction);
  }
}

class Direction {
  levels: any[] = [];
  private _name: string;

  get name() {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
  }

  addLevel(level: any) {
    this.levels.push(level);
  }
}

class Level {
  groups: any[] = [];
  private _name: string;
  private _program: string;

  constructor(name:string, program:string) {
    this._name = name;
    this._program = program;
  }

  get name() {
    return this._name;
  }

  get program() {
    return this._program;
  }

  addGroup(group:any) {
    this.groups.push(group);
  }
}

class Group {
  _students:any[] = [];
  directionName: string;
  levelName: string;

  get students() {
    return this._students;
  }

  constructor(directionName:string, levelName:string) {
    this.directionName = directionName;
    this.levelName = levelName;
  }

  addStudent(student:any) {
    this._students.push(student);
  }

  showPerformance() {
    const sortedStudents = this.students.sort(
      (a:any, b:any) => b.getPerformanceRating() - a.getPerformanceRating()
    );

    return sortedStudents;
  }
}

class Student {
  grades:any = {};
  attendance:any = [];
  firstName:string;
  lastName:string;
  birthYear:number;

  constructor(firstName:string, lastName:string, birthYear:number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value:string) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  setGrade(subject:string, grade:number) {
    this.grades[subject] = grade;
  }

  markAttendance(present:boolean) {
    this.attendance.push(present);
  }

  getPerformanceRating() {
    const gradeValues = Object.values(this.grades) as number[];

    if (gradeValues.length === 0) return 0;

    const averageGrade =
    gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;

    const attendancePercentage =
      (this.attendance.filter((present:boolean) => present).length /
        this.attendance.length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
