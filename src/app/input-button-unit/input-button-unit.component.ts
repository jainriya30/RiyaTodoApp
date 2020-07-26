import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'hello world'

  constructor() { }

  ngOnInit() {
  }

  changeTitle(newTitle: any) {
    this.title = newTitle;
  }

}