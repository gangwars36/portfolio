import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  currentSlide = 0;


  experiences = [
    {
      company: 'Binary Informatics / Gomedii',
      title: 'Software Developer',
      date: 'Feb 2023 - Present',
      points: [
        'I contributed to a healthcare product (Gomedii) facilitating international and national patients to access top-tier treatment in India. ',
        'Build and maintain vital components essential for constructing Gomedii`s frontend, catering to internal and external portal functionalities across the entire product spectrum. Collaborate extensively with cross-functional teams, including developers, designers, and product managers, to champion and implement best practices in web accessibility, ensuring a seamless user experience.',
        'Integrated web socket & Google map in the chatbot.',
        'Developed multiple ad. campaigns for the Product.'
      ],
      projects: [
        { name: 'https://gomedii.com'},
      ],
      skills:[
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Bootstrap',
      ]
    },
    {
      company: 'Tata Consultancy Services',
      title: 'Associate System Engineer',
      date: 'Dec 2021 - Jan 2023',
      points: [
        'Contributed in the development of an UK based BFSI Platform.',
        'I made significant contributions to the development and management of essential components, including user-related data management, internal team management modules, and a live chat feature facilitating user-management conversations. The implementation of the live chat module notably reduced support calls by 50%, showcasing the impact of our collaborative efforts on improving customer support efficiency and user engagement.'
      ],
      projects: [],
      skills:[
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS',
        'Bootstrap',
      ]
    },
    {
      company: 'ZYPMedia India',
      title: 'Operation Analyst',
      date: 'Mar 2021 - Dec 2021',
      points: [
        'Worked on HeidiSQL for fetching the data of campaigns for daily optimization.',
        'Coordinated with Technical Department Engineers and departmental Engineers for process optimization.'
      ],
      projects: [],
      skills:[
        'HeidiSQL',
        'Excel',
      ]
    }
    // Add more experiences as needed
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % 3;
  }

  prevSlide() {
    console.log("clicked");
    this.currentSlide = (this.currentSlide - 1 + 3) % 3;
  }
}
