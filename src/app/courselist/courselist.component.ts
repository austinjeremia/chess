import { Component } from '@angular/core';

interface Course {
  name: string;
  duration: string;
  description: string;
  students: number;
  timings: string;
}

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent {
  courses: Course[] = [
    {
      name: 'Beginner Course',
      duration: '3 weeks',
      description: 'Learn the basics of chess',
      students: 25,
      timings: 'Monday, Wednesday, Friday - 6:00 PM to 8:00 PM'
    },
    {
      name: 'Intermediate Course',
      duration: '4 weeks',
      description: 'Improve your chess skills',
      students: 18,
      timings: 'Tuesday, Thursday - 7:00 PM to 9:00 PM'
    },
    // Add more courses as needed
  ];

  filteredCourses: Course[] = [];
  searchKeyword: string = '';

  ngOnInit() {
    this.filteredCourses = this.courses;
  }

  searchCourses() {
    const lowerCaseKeyword = this.searchKeyword.toLowerCase();
    this.filteredCourses = this.courses.filter(course => {
      const lowerCaseName = course.name.toLowerCase();
      const lowerCaseDescription = course.description.toLowerCase();
      return lowerCaseName.startsWith(lowerCaseKeyword) || lowerCaseDescription.startsWith(lowerCaseKeyword);
    });
  }
}
