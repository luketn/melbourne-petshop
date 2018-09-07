import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'melbourne-petshop';
  pets = [
    {name: "fluffy", numberOfPats: 0},
    {name: "hairy", numberOfPats: 2},
    {name: "yum", numberOfPats: 4}
  ];
}
