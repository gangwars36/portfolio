import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {


  projects = [
    {
      name: 'Gomedii',
      details: [
        'Mainly worked on hospital, treatment, doctor, and enquiry.',
        'Created multiple ad. Campaigns pages (using js and Angular 7+).',
      ]
    },
    {
      name: 'Executive Portal',
      details: [
        'Mainly worked on hospital, treatment, doctor, and enquiry.',
        'Created multiple ad. Campaigns pages (using js and Angular 7+).',
      ]
    },
    {
      name: 'Partner Portal',
      details: [
        'Mainly worked on hospital, treatment, doctor, and enquiry.',
        'Created multiple ad. Campaigns pages (using js and Angular 7+).',
      ]
    },
    {
      name: 'Experience Center',
      details: [
        'Mainly worked on hospital, treatment, doctor, and enquiry.',
        'Created multiple ad. Campaigns pages (using js and Angular 7+).',
      ]
    },
  ];
  selectedProject: any;
  modalRef: BsModalRef | undefined;


  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>, project: any) {
    this.selectedProject = project;
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    if(this.modalRef){
      this.modalRef.hide();
    }
  }
}
