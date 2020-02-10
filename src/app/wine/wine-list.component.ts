import { Component, OnInit } from '@angular/core';
import { IWine } from './wine';

@Component ({
  selector: 'pm-wines',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})

export class WineListComponent implements OnInit{
  pageTitle: string = 'Wine List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  showRegions: boolean = false;

  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value:string) {
    this._listFilter = value;
    this.filteredWines =
           this.listFilter ? this.performFilter(this.listFilter) : this.wines;
  }

  filteredWines: IWine[];

  wines: IWine[] = [
    {
      "wineId": 101,
      "wineName": "Gigondas",
      "code": "f-101",
      "region": "South Rhone",
      "grapeType": "Grenache",
      "price": 16.99,
      "year": 2017,
      "starRating": 4.5,
      "imageUrl": "assets/images/gigondas.jpg"
    },
    {
      "wineId": 102,
      "wineName": "Chateauneuf Du Pape",
      "code": "f-102",
      "region": "Provence",
      "grapeType": "Cinsaut",
      "price": 18.99,
      "year": 2018,
      "starRating": 4.8,
      "imageUrl": "assets/images/chateauneuf.jpeg"
    },
    {
      "wineId": 103,
      "wineName": "Les Dauphins. Cote Du Rhone",
      "code": "f-103",
      "region": "The Rhone Valley",
      "grapeType": "Syrah and Grenache",
      "price": 8.00,
      "year": 2017,
      "starRating": 4.3,
      "imageUrl": "assets/images/Les_Dauphins.jpeg"
    },
    {
      "wineId": 104,
      "wineName": "Sainte Birthe",
      "code": "f-104",
      "region": "Les Baux de Provence",
      "grapeType": "Grenache",
      "price": 12.99,
      "year": 2017,
      "starRating": 5.0,
      "imageUrl": "assets/images/sainte-berthe.jpg"
    },
    {
      "wineId": 105,
      "wineName": "Patrick Chodat - Brouilly",
      "code": "f-105",
      "region": "Côte de Brouilly",
      "grapeType": "Gamay",
      "price": 9.00,
      "year": 2017,
      "starRating": 4.4,
      "imageUrl": "assets/images/Brouilly.jpeg"
    },
    {
      "wineId": 106,
      "wineName": "Faugeres",
      "code": "f-106",
      "region": "Languedoc",
      "grapeType": "Carignan, Shiraz/Syrah",
      "price": 12.99,
      "year": 2017,
      "starRating": 4.6,
      "imageUrl": "assets/images/faugeres.jpeg"
    },
    {
      "wineId": 107,
      "wineName": "Cap Royal-Bordeaux",
      "code": "f-107",
      "region": "Bordeaux",
      "grapeType": "Merlot, Cabernet Sauvignon",
      "price": 10.00,
      "year": 2016,
      "starRating": 4.4,
      "imageUrl": "assets/images/caproyal.jpeg"
    },
    {
      "wineId": 108,
      "wineName": "Louis-Jadot. Beaujolais",
      "code": "f-108",
      "region": "Regnie",
      "grapeType": "Gamay",
      "price": 11.00,
      "year": 2017,
      "starRating": 4.5,
      "imageUrl": "assets/images/louis_jardot.jpeg"
    },
    {
      "wineId": 109,
      "wineName": "Saint Emilion ",
      "code": "f-109",
      "region": "Bordeaux",
      "grapeType": "Merlot, Cabernet Sauvignon",
      "price": 12.99,
      "year": 2018,
      "starRating": 4.5,
      "imageUrl": "assets/images/st_emilion.jpeg"
    },
    {
      "wineId": 1010,
      "wineName": "Les Cardinaux",
      "code": "f-110",
      "region": "The Rhone Valley",
      "grapeType": "Grenache, Mourvèdre",
      "price": 10.00,
      "year": 2017,
      "starRating": 4.6,
      "imageUrl": "assets/images/les_cardinaux.jpeg"
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
    this.onClick();
  }

  ngOnInit(): void {
    console.log('In OnInit for Wine');
  }

  constructor() {
    this.filteredWines = this.wines;
    this.listFilter = 'Provence';
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Wine List: ' + message;
  }

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  performFilter(filterBy: string): IWine[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.wines.filter((wine: IWine) =>
        wine.region.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  onClick(): void {
    console.log('The show/hide button was clicked!');
  }

  toggleRegion(): void {
    this.showRegions = !this.showRegions;
    console.log("J'irais en France, si j'avais l'argent");
  }
}
