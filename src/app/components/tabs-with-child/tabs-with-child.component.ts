import { Component, OnInit } from '@angular/core';
import { Tab } from './interfaces/tab';

@Component({
  selector: 'app-tabs-with-child',
  templateUrl: './tabs-with-child.component.html',
  styleUrl: './tabs-with-child.component.css',
})
export class TabsWithChildComponent implements OnInit {
  tabs: Tab[] = [
    {
      value: 'html',
      label: 'HTML',
      panel:
        'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
    },
    {
      value: 'css',
      label: 'CSS',
      panel:
        'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
    },
    {
      value: 'javascript',
      label: 'JavaScript',
      panel:
        'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
    },
    {
      value: 'angular',
      label: 'Angular',
      panel:
        'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations.',
    },
  ];
  expandedTab: Tab = this.tabs[0];

  constructor() {}

  ngOnInit(): void {}

  onClick(tab: Tab) {
    this.expandedTab = tab;
  }
}
