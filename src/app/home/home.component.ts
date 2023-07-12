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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userName = 'John Doe';
  activeTab = 'academy';
  academies: Academy[] = [
    {
      name: 'Chess Guru',
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
      name: 'Premier Chess',
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
  filteredAcademies: Academy[] = [];
  searchKeyword: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.filteredAcademies = this.academies;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  searchAcademies() {
    const lowerCaseKeyword = this.searchKeyword.toLowerCase();
    this.filteredAcademies = this.academies.filter(academy => {
      const lowerCaseName = academy.name.toLowerCase();
      return lowerCaseName.startsWith(lowerCaseKeyword);
    });
  }
  

  navigateToCourselist(academy: any): void {
    this.router.navigate(['/courselist'], { state: { academy } });
  }
}
