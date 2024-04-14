import { ListService } from '../../services/list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interceptor-list',
  templateUrl: './interceptor-list.component.html',
  styleUrl: './interceptor-list.component.css',
})
export class InterceptorListComponent implements OnInit {
  constructor(public listService: ListService) {}

  ngOnInit(): void {
    this.listService.getPosts();
    this.listService.getUsers();
  }
}
