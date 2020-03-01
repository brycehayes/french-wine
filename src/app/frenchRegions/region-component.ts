import { Component, OnInit} from '@angular/core';
import { IRegion } from './region';

@Component ({
  selector: 'french-region',
  templateUrl: 'region.component.html'
})
export class FrenchRegionComponent implements OnInit{

  pageTitle: string = "French Regions";
  regionNumber: number;
  imageWidth: number = 50;
  imageMargin: number = 2;
  showCoatsOfArms: boolean = false;
 //listFilter: string='Cor';

  _regionListFilter: string;

  get regionListFilter(): string {
    return this._regionListFilter;
  }
  set regionListFilter(value: string) {
    this._regionListFilter = value;
    this.filteredRegions = this.regionListFilter ? this.performRegionFilter(this.regionListFilter) : this.regions;
  }

  filteredRegions: IRegion[];

  regions:  IRegion[] = [
    {
      "regionNumber": 1,
      "regionName": "Corsica",
      "capital": "Ajaccio",
      "numberOfBeauxVillages": "deux",
      "imageUrl": "assets/images/Piana.png"
    },
    {
      "regionNumber": 2,
      "regionName": "Provence",
      "capital": "Marseille",
      "numberOfBeauxVillages": "dix huit",
      "imageUrl": "assets/images/Gordes.svg.png"
    },
    {
      "regionNumber": 3,
      "regionName": "Occitane",
      "capital": "Toulouse",
      "numberOfBeauxVillages": "trente",
      "imageUrl": "assets/images/Belcastel.svg.png"
    },
    {
      "regionNumber": 4,
      "regionName": "Auverge-Rhone-Alps",
      "capital": "Lyon",
      "numberOfBeauxVillages": "vingt quatre",
      "imageUrl": "assets/images/Usson.svg.png"
    },
    {
      "regionNumber": 5,
      "regionName": "Normandy",
      "capital": "Rouen",
      "numberOfBeauxVillages": "Cinq",
      "imageUrl": "assets/images/Lyons-la-Foret.svg.png"
    },
    {
      "regionNumber": 6,
      "regionName": "Bourgogne-Franche-Comte",
      "capital": "Dijon",
      "numberOfBeauxVillages": "Neuf",
      "imageUrl": "assets/images/Lods.svg.png"
    }
  ];


  ngOnInit(): void {
    console.log("Oninit for French region");
  }

  toggleCoatOfArmsImage(): void {
    console.log("J'ai fait quelque chose");
    console.log("Je pense que c'est travail");
    console.log("Je serai reussir");
    console.log("J'ai change le fichier");
    console.log("J'ai etait heureux depuis travaille ici")
    this.showCoatsOfArms = !this.showCoatsOfArms;
  }

  constructor() {
    this.filteredRegions = this.regions;
    this.regionListFilter = 'Cors';
  }

  performRegionFilter(filterBy: string) : IRegion[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.regions.filter((region : IRegion) =>
          region.regionName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


}
