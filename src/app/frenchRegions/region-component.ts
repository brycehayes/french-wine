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

;
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
      "regionNumber": 7,
      "regionName": "Brittany",
      "capital": "Rennes",
      "numberOfBeauxVillages": "Six",
      "imageUrl": "assets/images/Locronan.svg.png"


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
    console.log("Oninit for region");
  }

  toggleCoatOfArmsImage(): void {
    console.log("J'ai fait quelque chose");
    console.log("Je pense que c'est travail");

    console.log("Future avoir - J'aurai, Tu auras, elle aura, nous aurons, vous aurez, elles auront");

    console.log("Je serai reussir");
    console.log("J'ai change le fichier");
    console.log("J'ai etait heureux depuis travaille ici")

    this.showCoatsOfArms = !this.showCoatsOfArms;
  }



}
