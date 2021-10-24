import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  counter: number = 1;
  list: { name: string }[] = [];

  constructor() { }

  addNum(num: number) {
    this.counter += num;
  }

  ngOnInit(): void {
  }

  addToTheToDoList(listElement: {name: string}) {
    if (!listElement.name) {
      return;
    }
    this.list.push(listElement);
  }

  deleteFromToDoList(index: number) {
    this.list.splice(index, 1);
  }

}
