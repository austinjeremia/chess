import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Course {
  name: string;
  description: string;
  enrolled: boolean;
}

interface Academy {
  name: string;
  description: string;
  imageUrl: string;
  courses: Course[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Austin';
  activeTab = 'academy';
  title='chess';
  academies: Academy[] = [
    {
      name: 'Academy 1',
      imageUrl: 'assets/images/academy1.jpg',
      description: 'Academy 1 description',
      courses: [
        {
          name: 'Course 1',
          description: 'Course 1 description',
          enrolled: false
        },
        {
          name: 'Course 2',
          description: 'Course 2 description',
          enrolled: false
        }
      ]
    },
    {
      name: 'Academy 2',
      imageUrl: 'assets/images/academy2.jpg',
      description: 'Academy 2 description',
      courses: [
        {
          name: 'Course 3',
          description: 'Course 3 description',
          enrolled: false
        },
        {
          name: 'Course 4',
          description: 'Course 4 description',
          enrolled: false
        }
      ]
    }
    // Add more academies as needed
  ];
  selectedAcademy: Academy | null = null;

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  constructor(private router: Router) {}

  navigateToCourselist(academy: any): void {
    this.router.navigate(['/courselist'], { state: { academy } });
  }
}
