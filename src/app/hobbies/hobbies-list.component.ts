import { Component } from '@angular/core';

@Component ({
  selector: 'pm-hobbies',
  templateUrl:'./hobbies-list.component.html'
})

export class HobbiesListComponent {
  x: number = 5;
  y: number = 4;
  z: number = this.x + this.y;

  pageTitle: string = 'Hobbies List';

  hobbies: any[] = [
    {
      "hobbyId": 2,
      "hobbyName": "Cycling",
      "code": "HB2",
      "timeAndDate": "November 25, 2009",
      "cost": 2500,
      "starRating": 4.8,
      "imageUrl": "assets/image/garden_cart.png"
    },
    {
      "hobbyId": 3,
      "hobbyName": "French Language",
      "code": "HB3",
      "timeAndDate": "June 15, 2018",
      "cost": 450,
      "starRating": 4.8,
      "imageUrl": "assets/image/hammer.png"
    }
  ]
}
