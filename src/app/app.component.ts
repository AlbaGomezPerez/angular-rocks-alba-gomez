import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  names: string [];
  title = 'Paco';
  FatherText: string;
  constructor() {
    this.names = ['Cris', 'Carlos', 'Gonzalo'];
  }

  valueInputResponse(dataInput: string) {
    this.FatherText = dataInput;
  }

  ngOnInit(): void {}
}

